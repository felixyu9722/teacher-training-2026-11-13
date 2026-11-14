/* ==========================================================================
   Teacher Training Portal — Multi-Module Interactive Controller
   ========================================================================== */

(function () {
  const DATA = window.MODULE1_DATA;
  const ALL_GLOSSARY = [...DATA.glossary, ...(window.EXTRA_GLOSSARY || [])];
  const META = window.MODULE_META;

  let currentLang = localStorage.getItem("ttp_lang") || "zh";
  let currentModule = localStorage.getItem("ttp_module") || "m1";
  let currentStage = "middle";
  let currentCat = "all";
  let searchQuery = "";
  let doneByModule = JSON.parse(localStorage.getItem("ttp_done_all") || "{}");
  let checkedM1 = JSON.parse(localStorage.getItem("ttp_checks_m1") || "[]");
  let checkedM2 = JSON.parse(localStorage.getItem("ttp_checks_m2") || "[]");

  function getDoneList(mod) {
    return doneByModule[mod] || [];
  }

  // ---------- Switch Module & Color Theme ----------
  function switchModule(modId) {
    if (!META[modId]) return;
    currentModule = modId;
    localStorage.setItem("ttp_module", modId);
    document.body.setAttribute("data-theme", modId);

    document.querySelectorAll(".course-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.mod === modId);
    });
    document.querySelectorAll(".module-view").forEach((view) => {
      view.classList.toggle("active", view.id === `view-${modId}`);
    });

    const searchCard = document.getElementById("sidebarSearchCard");
    if (searchCard) searchCard.style.display = modId === "m1" ? "block" : "none";

    renderSidebar();
    updateProgressUI();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSidebar() {
    const info = META[currentModule];
    const bmInfo = (window.BM_MODULE_META || {})[currentModule];
    const titleEl = document.getElementById("sideTitle");
    const speakerEl = document.getElementById("sideSpeaker");
    const subEl = document.getElementById("sideSub");
    const navEl = document.getElementById("sideNavList");
    if (!info || !navEl) return;

    titleEl.textContent = currentLang === "zh" ? info.titleZh : (currentLang === "bm" && bmInfo ? bmInfo.titleBm : info.titleEn);
    speakerEl.textContent = currentLang === "zh" ? info.speakerZh : (currentLang === "bm" && bmInfo ? bmInfo.speakerBm : info.speakerEn);
    subEl.textContent = currentLang === "zh" ? info.subZh : (currentLang === "bm" && bmInfo ? bmInfo.subBm : info.subEn);

    const done = getDoneList(currentModule);
    navEl.innerHTML = info.sections
      .map((s, idx) => {
        const label = currentLang === "zh" ? s.zh : (currentLang === "bm" && bmInfo ? bmInfo.sections[idx] : s.en);
        const isDone = done.includes(s.id);
        return `<li><a class="nav-link ${isDone ? "done" : ""}" href="#${s.id}"><span>${label}</span><span class="nav-check">✓</span></a></li>`;
      })
      .join("");

    navEl.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.getElementById("sidebar")?.classList.remove("open");
      });
    });
  }

  // ---------- Language Switching (ZH -> EN -> BM) ----------
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("ttp_lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "bm" ? "ms-MY" : "en";
    const bmMap = window.BM_TEXT_MAP || {};

    document.querySelectorAll("[data-zh]").forEach((el) => {
      const zhVal = el.getAttribute("data-zh");
      let val = zhVal;
      if (lang === "en") val = el.getAttribute("data-en");
      else if (lang === "bm") val = el.getAttribute("data-bm") || bmMap[zhVal] || el.getAttribute("data-en");

      if (val !== null) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });

    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.textContent =
        lang === "zh" ? "🌐 中文 · 切EN/BM" : lang === "en" ? "🌐 EN · 切BM/中文" : "🌐 BM · 切中文/EN";
    }

    renderSidebar();
    renderStageBars(currentStage);
    renderDisorders();
    renderQuiz();
    renderChecklist(checkedM1, "actionChecklist", DATA.checklist, "ttp_checks_m1");
    renderChecklist(checkedM2, "m2Checklist", window.M2_CHECKLIST || [], "ttp_checks_m2");
    renderGlossary(document.getElementById("glossarySearch")?.value || "");
    updateProgressUI();
  }

  // ---------- Stage Prevalence Bars (M1) ----------
  function renderStageBars(stageKey) {
    currentStage = stageKey;
    const container = document.getElementById("stageStatsContainer");
    const noteEl = document.getElementById("stageNote");
    if (!container || !noteEl) return;

    document.querySelectorAll(".stage-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.stage === stageKey);
    });

    const stage = DATA.stageData[stageKey];
    noteEl.textContent = currentLang === "zh" ? stage.noteZh : stage.noteEn;

    container.innerHTML = stage.stats
      .map((s) => {
        const label = currentLang === "zh" ? s.nameZh : s.nameEn;
        return `
          <div class="stat-row">
            <div class="stat-row-head"><span>${label}</span><span>${s.val}%</span></div>
            <div class="stat-bar-track">
              <div class="stat-bar-fill ${s.high ? "high" : ""}" style="width: ${Math.min(s.val * 2.5, 100)}%"></div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // ---------- Disorder Explorer (M1) ----------
  function renderDisorders() {
    const container = document.getElementById("disorderList");
    if (!container) return;

    const q = searchQuery.trim().toLowerCase();
    const filtered = DATA.disorders.filter((d) => {
      const catMatch = currentCat === "all" || d.cat === currentCat;
      if (!catMatch) return false;
      if (!q) return true;
      const hay = `${d.nameZh} ${d.nameEn} ${d.summaryZh} ${d.summaryEn} ${d.signalsZh} ${d.actionZh}`.toLowerCase();
      return hay.includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="callout info">${
        currentLang === "zh" ? "未找到匹配的条目，请尝试清除筛选或更换关键词。" : "No matching conditions found. Try clearing filters."
      }</div>`;
      return;
    }

    container.innerHTML = filtered
      .map((d) => {
        const title = currentLang === "zh" ? d.nameZh : d.nameEn;
        const sub = currentLang === "zh" ? d.nameEn : d.nameZh;
        const tag = currentLang === "zh" ? d.tagZh : d.tagEn;
        const summary = currentLang === "zh" ? d.summaryZh : d.summaryEn;
        const signals = currentLang === "zh" ? d.signalsZh : d.signalsEn;
        const action = currentLang === "zh" ? d.actionZh : d.actionEn;
        const lblSignals = currentLang === "zh" ? "课堂与日常识别信号" : "Classroom & Daily Signals";
        const lblAction = currentLang === "zh" ? "教师/家长应对策略" : "Teacher & Parent Response";

        return `
          <div class="disorder-item" data-id="${d.id}">
            <button class="disorder-trigger" type="button" aria-expanded="false">
              <div class="disorder-title-wrap">
                <span class="disorder-name">${title}</span>
                <span class="disorder-en">${sub}</span>
                <span class="disorder-tag ${d.urgent ? "urgent" : ""}">${tag}</span>
              </div>
              <span class="disorder-chevron">▼</span>
            </button>
            <div class="disorder-body">
              <p style="margin-top:0">${summary}</p>
              <div class="disorder-cols">
                <div class="d-box"><strong>👀 ${lblSignals}</strong><div>${signals}</div></div>
                <div class="d-box"><strong>🛠️ ${lblAction}</strong><div>${action}</div></div>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll(".disorder-trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".disorder-item");
        const isOpen = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  // ---------- Interactive Quiz (M1) ----------
  function renderQuiz() {
    const container = document.getElementById("quizContainer");
    if (!container) return;

    container.innerHTML = DATA.quiz
      .map((item, idx) => {
        const q = currentLang === "zh" ? item.qZh : item.qEn;
        const opts = currentLang === "zh" ? item.optionsZh : item.optionsEn;
        const explain = currentLang === "zh" ? item.explainZh : item.explainEn;

        return `
          <div class="quiz-card" data-qidx="${idx}">
            <div class="quiz-q">${q}</div>
            <div class="quiz-options">
              ${opts
                .map(
                  (opt, oIdx) =>
                    `<button class="quiz-opt" type="button" data-oidx="${oIdx}">${String.fromCharCode(65 + oIdx)}. ${opt}</button>`
                )
                .join("")}
            </div>
            <div class="quiz-feedback">${explain}</div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll(".quiz-opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".quiz-card");
        const qIdx = Number(card.dataset.qidx);
        const oIdx = Number(btn.dataset.oidx);
        const correctIdx = DATA.quiz[qIdx].answer;

        card.querySelectorAll(".quiz-opt").forEach((b, i) => {
          b.disabled = true;
          if (i === correctIdx) b.classList.add("correct");
          else if (i === oIdx) b.classList.add("wrong");
        });
        card.querySelector(".quiz-feedback").classList.add("show");
      });
    });
  }

  // ---------- Generic Action Checklist ----------
  function renderChecklist(stateArr, containerId, items, storageKey) {
    const container = document.getElementById(containerId);
    if (!container || !items.length) return;

    container.innerHTML = items
      .map((item) => {
        const isChecked = stateArr.includes(item.id);
        const text = currentLang === "zh" ? item.zh : item.en;
        return `
          <label class="check-item ${isChecked ? "checked" : ""}">
            <input type="checkbox" data-cid="${item.id}" ${isChecked ? "checked" : ""} />
            <span>${text}</span>
          </label>
        `;
      })
      .join("");

    container.querySelectorAll("input[type='checkbox']").forEach((cb) => {
      cb.addEventListener("change", () => {
        const id = cb.dataset.cid;
        const idx = stateArr.indexOf(id);
        if (cb.checked && idx === -1) stateArr.push(id);
        else if (!cb.checked && idx > -1) stateArr.splice(idx, 1);
        localStorage.setItem(storageKey, JSON.stringify(stateArr));
        cb.closest(".check-item").classList.toggle("checked", cb.checked);
      });
    });
  }

  // ---------- Glossary Modal ----------
  function renderGlossary(filterText = "") {
    const body = document.getElementById("glossaryBody");
    if (!body) return;
    const q = filterText.trim().toLowerCase();
    const list = ALL_GLOSSARY.filter(
      (g) => !q || g.zh.toLowerCase().includes(q) || g.en.toLowerCase().includes(q) || g.descZh.toLowerCase().includes(q)
    );
    body.innerHTML = list
      .map(
        (g) => `
        <div class="glossary-row">
          <strong>${g.zh} · ${g.en}</strong>
          <p>${currentLang === "zh" ? g.descZh : g.descEn}</p>
        </div>
      `
      )
      .join("");
  }

  // ---------- Inline Term Popover ----------
  function setupTermPopovers() {
    const popover = document.getElementById("termPopover");
    if (!popover) return;

    function showPopover(target) {
      const entry = ALL_GLOSSARY.find((g) => g.id === target.dataset.term);
      if (!entry) return;

      popover.innerHTML = `
        <div class="tp-title">${entry.zh} / ${entry.en}</div>
        <div>${currentLang === "zh" ? entry.descZh : entry.descEn}</div>
      `;
      const rect = target.getBoundingClientRect();
      const top = Math.min(rect.bottom + 8, window.innerHeight - 130);
      const left = Math.min(Math.max(12, rect.left), window.innerWidth - 336);
      popover.style.top = `${top}px`;
      popover.style.left = `${left}px`;
      popover.classList.add("visible");
    }

    function hidePopover() {
      popover.classList.remove("visible");
    }

    document.addEventListener("mouseover", (e) => {
      const pill = e.target.closest(".term-pill");
      if (pill) showPopover(pill);
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(".term-pill")) hidePopover();
    });
    document.addEventListener("click", (e) => {
      const pill = e.target.closest(".term-pill");
      if (pill) showPopover(pill);
      else hidePopover();
    });
  }

  // ---------- Progress Tracking ----------
  function updateProgressUI() {
    const total = META[currentModule].sections.length;
    const done = getDoneList(currentModule);
    const pct = Math.round((done.length / total) * 100);
    const fill = document.getElementById("progressFill");
    const pctText = document.getElementById("progressPct");
    if (fill) fill.style.width = `${pct}%`;
    if (pctText) pctText.textContent = `${done.length}/${total}`;

    document.querySelectorAll(".mark-done-btn").forEach((btn) => {
      const sid = btn.dataset.sec;
      const mod = btn.dataset.mod || "m1";
      const isDone = getDoneList(mod).includes(sid);
      btn.classList.toggle("done", isDone);
      btn.textContent = isDone
        ? currentLang === "zh" ? "✓ 已读" : currentLang === "bm" ? "✓ Selesai" : "✓ Completed"
        : currentLang === "zh" ? "标记已读" : currentLang === "bm" ? "Tanda Selesai" : "Mark Read";
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      const sid = link.getAttribute("href")?.replace("#", "");
      link.classList.toggle("done", done.includes(sid));
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("langToggleBtn")?.addEventListener("click", () => {
      const next = currentLang === "zh" ? "en" : currentLang === "en" ? "bm" : "zh";
      applyLanguage(next);
    });

    document.querySelectorAll(".course-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchModule(tab.dataset.mod));
    });

    document.querySelectorAll(".stage-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => renderStageBars(btn.dataset.stage));
    });

    document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentCat = btn.dataset.cat;
        document.querySelectorAll(".cat-filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderDisorders();
      });
    });

    document.getElementById("sidebarSearch")?.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderDisorders();
    });

    document.querySelectorAll(".mark-done-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const sid = btn.dataset.sec;
        const mod = btn.dataset.mod || "m1";
        const arr = getDoneList(mod);
        if (arr.includes(sid)) doneByModule[mod] = arr.filter((x) => x !== sid);
        else doneByModule[mod] = [...arr, sid];
        localStorage.setItem("ttp_done_all", JSON.stringify(doneByModule));
        updateProgressUI();
      });
    });

    // Glossary Modal
    const modal = document.getElementById("glossaryModal");
    document.getElementById("openGlossaryBtn")?.addEventListener("click", () => {
      modal.classList.add("open");
      renderGlossary();
    });
    document.getElementById("closeGlossaryBtn")?.addEventListener("click", () => {
      modal.classList.remove("open");
    });
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    document.getElementById("glossarySearch")?.addEventListener("input", (e) => {
      renderGlossary(e.target.value);
    });

    // Mobile drawer
    document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
      document.getElementById("sidebar")?.classList.toggle("open");
    });

    // Copy Helpline & Prompt buttons
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        navigator.clipboard?.writeText(btn.dataset.copy || "");
        const orig = btn.textContent;
        btn.textContent = currentLang === "zh" ? "已复制" : "Copied!";
        setTimeout(() => (btn.textContent = orig), 1400);
      });
    });
    document.querySelectorAll(".prompt-copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.closest(".prompt-card")?.querySelector(".prompt-body")?.textContent || "";
        navigator.clipboard?.writeText(text.trim());
        const orig = btn.textContent;
        btn.textContent = currentLang === "zh" ? "✓ 已复制" : "✓ Copied";
        setTimeout(() => (btn.textContent = orig), 1500);
      });
    });

    setupTermPopovers();
    switchModule(currentModule);
    applyLanguage(currentLang);
  });
})();
