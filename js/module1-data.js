/* ==========================================================================
   Module 1 Data: 青少年心理健康建设 (Youth Mental Health Building)
   Bilingual (ZH / EN) structured content + Terminology Glossary
   ========================================================================== */

window.MODULE1_DATA = {
  glossary: [
    {
      id: "stigma",
      zh: "病耻感",
      en: "Stigma",
      descZh: "对心理问题抱有危险、疯狂、丢人等负面偏见，导致当事人和家庭刻意隐瞒、延误求助。",
      descEn: "Negative stereotypes viewing mental health issues as dangerous, shameful, or untreatable, causing concealment and delayed help-seeking."
    },
    {
      id: "wellbeing",
      zh: "心理健康（良好幸福状态）",
      en: "Well-being / Mental Health",
      descZh: "WHO定义：不仅是没有心理疾病，更能认识并实现潜力、应对正常压力、有效学习工作并回馈社会。",
      descEn: "WHO: Not merely the absence of illness, but realizing one's potential, coping with normal stress, working productively, and contributing to community."
    },
    {
      id: "prefrontal",
      zh: "前额叶皮层",
      en: "Prefrontal Cortex",
      descZh: "负责冲动控制、理性决策与情绪“刹车”的大脑区域，约25岁才发育成熟。",
      descEn: "Brain region responsible for impulse control and executive function; matures around age 25, explaining why adolescents have a fast 'accelerator' and slow 'brake'."
    },
    {
      id: "neurosis",
      zh: "神经症",
      en: "Neurosis",
      descZh: "无器质性病变但不能控制的持久精神痛苦，心理冲突与现实无关，病程+痛苦+社会功能总分>6分。",
      descEn: "Persistent mental distress without organic pathology where inner conflict is unrelated to reality; diagnosed when duration + distress + impairment score > 6."
    },
    {
      id: "panic",
      zh: "惊恐发作",
      en: "Panic Attack",
      descZh: "急性焦虑障碍的“假警报”，10分钟达峰值、15–30分钟自行缓解，极难受但无生命危险。",
      descEn: "Acute anxiety 'false alarm' peaking within 10 minutes and subsiding in 15–30 minutes; intensely distressing but not life-threatening."
    },
    {
      id: "yerkes",
      zh: "叶克斯·多德森定律",
      en: "Yerkes-Dodson Law",
      descZh: "压力与表现呈倒U型关系：适度焦虑促进学习效率，过度焦虑则导致发挥失常。",
      descEn: "Inverted-U relationship between arousal and performance: moderate anxiety boosts focus, while excessive anxiety impairs performance."
    },
    {
      id: "somatization",
      zh: "躯体化",
      en: "Somatization",
      descZh: "心理痛苦以头痛、胃痛、疲劳等身体不适表达，医学检查却无器质性病变。",
      descEn: "Psychological distress expressed as physical symptoms (headaches, stomachaches, fatigue) with no organic medical cause found."
    },
    {
      id: "nssi",
      zh: "非自杀性自伤",
      en: "Non-Suicidal Self-Injury (NSSI)",
      descZh: "无自杀意图下的故意自我伤害（如割伤、烫伤），常作为调节情绪痛苦的方式，但显著升高自杀风险。",
      descEn: "Deliberate self-harm (cutting, burning) without suicidal intent, often used to regulate emotional pain, yet significantly raises future suicide risk."
    },
    {
      id: "adhd",
      zh: "注意缺陷与多动障碍",
      en: "ADHD",
      descZh: "神经发育障碍（患病率3%–7%），源于脑结构与功能差异，与“品行差”或“懒惰”无关。",
      descEn: "Neurodevelopmental disorder (3%–7% prevalence) rooted in brain differences—not laziness or poor character."
    },
    {
      id: "odd",
      zh: "对立违抗障碍",
      en: "Oppositional Defiant Disorder (ODD)",
      descZh: "持续至少6个月的抵触、反抗、易怒行为（发病率约2%），行为背后往往是未被识别的情绪与困难。",
      descEn: "Persistent pattern (6+ months) of angry/irritable mood and defiant behavior (~2% prevalence); often signals unrecognized emotional distress."
    },
    {
      id: "asd_autism",
      zh: "孤独症谱系障碍（自闭症）",
      en: "Autism Spectrum Disorder (ASD)",
      descZh: "以社交互动困难、沟通障碍、刻板行为与感官敏感为核心特征的神经发育差异。",
      descEn: "Neurodevelopmental condition characterized by differences in social communication, restricted/repetitive behaviors, and sensory sensitivities."
    },
    {
      id: "ptsd",
      zh: "急性应激障碍 / 创伤后应激障碍",
      en: "ASD (Acute Stress Disorder) & PTSD",
      descZh: "重大创伤后3天–1个月内的强烈应激反应为ASD；症状持续超过1个月则可能发展为PTSD。",
      descEn: "Severe trauma reaction lasting 3 days to 1 month is ASD; if symptoms persist beyond 1 month, it may progress to PTSD."
    },
    {
      id: "nvc",
      zh: "非暴力沟通",
      en: "Nonviolent Communication (NVC)",
      descZh: "围绕“观察—感受—需要—请求”四要素展开沟通，替代指责与大吼大叫。",
      descEn: "Four-step empathetic communication framework: Observation, Feeling, Need, and Request—replacing blame and shouting."
    },
    {
      id: "mentari",
      zh: "Klinik MENTARI",
      en: "Community Mental Health Centre (Malaysia)",
      descZh: "马来西亚卫生部设立的社区心理健康诊所，提供专业心理评估、辅导与转介支持。",
      descEn: "Community mental health clinics established by Malaysia's Ministry of Health providing screening, counseling, and psychiatric referrals."
    }
  ],

  stageData: {
    primary: {
      labelZh: "小学生 Primary",
      labelEn: "Primary School",
      noteZh: "核心关注：睡眠问题突出，抑郁与焦虑已开始出现。",
      noteEn: "Key focus: Sleep problems lead; early depression and anxiety already emerge.",
      stats: [
        { nameZh: "睡眠问题 Sleep Issues", nameEn: "Sleep Issues", val: 25.2 },
        { nameZh: "抑郁 Depression", nameEn: "Depression", val: 14.6 },
        { nameZh: "焦虑 Anxiety", nameEn: "Anxiety", val: 12.3 },
        { nameZh: "攻击行为 Aggression", nameEn: "Aggression", val: 4.1 },
        { nameZh: "退缩行为 Withdrawal", nameEn: "Withdrawal", val: 3.8 },
        { nameZh: "躯体化 Somatization", nameEn: "Somatization", val: 3.6 }
      ]
    },
    middle: {
      labelZh: "初中生 Middle School",
      labelEn: "Middle School",
      noteZh: "十年间初中生焦虑检出率由约 18% 上升至 27.0%；自伤与自杀意念显著抬头。",
      noteEn: "Anxiety rose from ~18% to 27.0% over a decade; self-harm and suicidal ideation rise sharply.",
      stats: [
        { nameZh: "焦虑 Anxiety", nameEn: "Anxiety", val: 27.0, high: true },
        { nameZh: "抑郁 Depression", nameEn: "Depression", val: 24.0, high: true },
        { nameZh: "自我伤害 Self-Harm", nameEn: "Self-Harm", val: 22.0, high: true },
        { nameZh: "自杀意念 Suicidal Ideation", nameEn: "Suicidal Ideation", val: 17.0 },
        { nameZh: "睡眠问题 Sleep Issues", nameEn: "Sleep Issues", val: 17.0 },
        { nameZh: "自杀计划 Suicide Plan", nameEn: "Suicide Plan", val: 7.0 }
      ]
    },
    high: {
      labelZh: "高中生 High School",
      labelEn: "High School",
      noteZh: "十年间高中生抑郁检出率由约 22% 上升至 30.2%（元分析 28.0%），学段风险陡增。",
      noteEn: "Depression rose from ~22% to 30.2% over a decade; risk escalates steeply by grade.",
      stats: [
        { nameZh: "抑郁 Depression", nameEn: "Depression", val: 28.0, high: true },
        { nameZh: "焦虑 Anxiety", nameEn: "Anxiety", val: 26.3, high: true },
        { nameZh: "睡眠问题 Sleep Issues", nameEn: "Sleep Issues", val: 23.0 },
        { nameZh: "自我伤害 Self-Harm", nameEn: "Self-Harm", val: 22.8, high: true },
        { nameZh: "自杀意念 Suicidal Ideation", nameEn: "Suicidal Ideation", val: 17.1 },
        { nameZh: "躯体化 Somatization", nameEn: "Somatization", val: 9.8 }
      ]
    },
    college: {
      labelZh: "大学生 University",
      labelEn: "University",
      noteZh: "睡眠问题依然高居首位（23.5%），抑郁与自伤比例仍需持续关注。",
      noteEn: "Sleep issues remain top (23.5%), with depression and self-harm still requiring support.",
      stats: [
        { nameZh: "睡眠问题 Sleep Issues", nameEn: "Sleep Issues", val: 23.5 },
        { nameZh: "抑郁 Depression", nameEn: "Depression", val: 20.8 },
        { nameZh: "自我伤害 Self-Harm", nameEn: "Self-Harm", val: 16.2 },
        { nameZh: "焦虑 Anxiety", nameEn: "Anxiety", val: 13.7 },
        { nameZh: "自杀意念 Suicidal Ideation", nameEn: "Suicidal Ideation", val: 10.8 },
        { nameZh: "躯体化 Somatization", nameEn: "Somatization", val: 4.5 }
      ]
    }
  },

  disorders: [
    {
      id: "panic",
      cat: "mood",
      urgent: false,
      nameZh: "惊恐发作",
      nameEn: "Panic Attack",
      tagZh: "急性焦虑 · 假警报",
      tagEn: "Acute Anxiety",
      summaryZh: "非预期突发，10分钟达峰值，15–30分钟自行缓解。发病率 3.3%–4.6%（女:男 = 2–3:1）。非常难受但无生命危险，排除哮喘/心脏疾病后可不送医。",
      summaryEn: "Sudden onset peaking in 10 min and subsiding in 15–30 min (3.3%–4.6% prevalence). Intense but not life-threatening once cardiac/asthma causes are ruled out.",
      signalsZh: "心悸、出汗颤抖、胸闷呼吸困难、头晕站立不稳、手脚麻木、忽冷忽热、不真实感、害怕失控或死亡（突发且≥4项症状）。",
      signalsEn: "Palpitations, sweating/trembling, chest tightness, shortness of breath, dizziness, numbness, chills/hot flashes, derealization, fear of dying (≥4 symptoms).",
      actionZh: "四步陪伴法：① 稳住：平稳说“没事，会过去的”；② 深呼吸：鼻吸4拍、嘴呼6拍；③ 着陆：数5样看见物、4样摸到物；④ 冷水洗脸或敷冰。",
      actionEn: "4-Step Grounding: (1) Reassure calmly ('It will pass'); (2) 4-6 breathing (inhale 4, exhale 6); (3) Grounding (5 things seen, 4 things touched); (4) Cool water on face."
    },
    {
      id: "gad",
      cat: "mood",
      urgent: false,
      nameZh: "慢性焦虑症",
      nameEn: "Generalized Anxiety Disorder (GAD)",
      tagZh: "情绪与焦虑",
      tagEn: "Mood & Anxiety",
      summaryZh: "长期、持续数月的过度担忧（危险、健康、不幸），常伴完美主义（反复检查、极度怕出错）与回避行为。",
      summaryEn: "Persistent, uncontrollable worry lasting months, often paired with perfectionism and avoidance.",
      signalsZh: "不敢发言/拒绝上台、被点名慌乱、反复询问同一问题、频繁因“肚子痛”请假或逃学。",
      signalsEn: "Refuses public speaking, panics when called on, asks the same question repeatedly, frequent 'stomachache' absences.",
      actionZh: "理解其躯体不适是真实的、并非“装病”；避免只说“想开点”；建议“心理+药物”专业治疗。",
      actionEn: "Validate that physical discomfort is real (not faking); avoid saying 'just stop worrying'; support combined therapy + medication."
    },
    {
      id: "exam",
      cat: "mood",
      urgent: false,
      nameZh: "考试焦虑",
      nameEn: "Exam Anxiety",
      tagZh: "常见评价焦虑",
      tagEn: "Evaluation Anxiety",
      summaryZh: "遵循叶克斯·多德森倒U型定律：适度焦虑促进学习，过度则严重损害发挥。马来西亚发生率约 28%–52%。",
      summaryEn: "Follows Yerkes-Dodson inverted-U law: moderate anxiety aids focus, excessive anxiety impairs recall (28%–52% prevalence in Malaysia).",
      signalsZh: "灾难化思维、注意力与记忆力下降、心跳手抖、胃肠不适、逃考或发挥失常。",
      signalsEn: "Catastrophizing, memory blanks, trembling, GI upset, exam avoidance or underperformance.",
      actionZh: "家长勿只盯分数排名，改问“需要什么帮助”；学生可做目标分解、模拟考、少喝咖啡，考场用深呼吸与跳过难题。",
      actionEn: "Shift focus from ranking to support; break goals into small steps, practice mock tests, reduce caffeine, use deep breathing & skip-and-return."
    },
    {
      id: "phobia",
      cat: "mood",
      urgent: false,
      nameZh: "恐怖症",
      nameEn: "Specific & Social Phobias",
      tagZh: "情绪与焦虑",
      tagEn: "Mood & Anxiety",
      summaryZh: "青少年发生率约 16%。持续半年以上、明显超出实际危险的恐惧（动物、自然、受伤、社交、幽闭、死亡恐怖症），常源于创伤条件反射。",
      summaryEn: "Affects ~16% of youth. Intense, disproportionate fear lasting 6+ months (social, specific objects, enclosed spaces), often linked to trauma conditioning.",
      signalsZh: "极度回避特定场景、社交场合或公开表达，出现强烈惊恐或逃离反应。",
      signalsEn: "Extreme avoidance of specific triggers, social gatherings, or speaking up, with acute fear responses.",
      actionZh: "给予更多关爱与安全感，不强行逼迫面对，通过暴露治疗/系统脱敏逐步改善。",
      actionEn: "Provide empathy and safety; avoid forced confrontation; refer for exposure therapy / systematic desensitization."
    },
    {
      id: "ocd",
      cat: "mood",
      urgent: false,
      nameZh: "强迫症",
      nameEn: "Obsessive-Compulsive Disorder (OCD)",
      tagZh: "强迫思维与行为",
      tagEn: "Obsessions & Compulsions",
      summaryZh: "发病率 1%–3%，半数起病于青少年期。明知不合理却赶不走的侵入性想法（强迫思维），通过反复清洗、计数、检查、排序来缓解焦虑。",
      summaryEn: "1%–3% prevalence (half onset in adolescence). Intrusive unwanted thoughts relieved temporarily by repetitive rituals (washing, checking, counting).",
      signalsZh: "每天核查耗时超 1 小时、作业反复涂改写不完、手部因频繁清洗破损、人际摩擦。",
      signalsEn: "Rituals consuming >1 hr/day, endless erasing/rewriting, skin damage from washing, social friction.",
      actionZh: "切勿嘲笑或强行制止仪式行为；需“心理治疗 + 药物治疗 + 家庭支持 + 生活调整”。",
      actionEn: "Never mock or forcibly block rituals; combine psychotherapy (CBT/ERP), medication, and family support."
    },
    {
      id: "depression",
      cat: "mood",
      urgent: true,
      nameZh: "抑郁症",
      nameEn: "Major Depressive Disorder",
      tagZh: "重点关注 · 持续≥2周",
      tagEn: "Priority · ≥2 Weeks",
      summaryZh: "不是懒，也不是不努力。DSM 诊断需满足 9 项中的 5 项以上且持续 2 周以上（青少年常表现为易怒而非单纯悲伤）。",
      summaryEn: "Not laziness. Diagnosis requires ≥5 of 9 symptoms for ≥2 weeks (in teens, often manifests as irritability rather than sadness).",
      signalsZh: "四类信号叠加：情绪（低落/易怒/无价值感）、行为（退缩/自伤/送出心爱物）、躯体（失眠/疲乏/头痛胃痛）、学业（成绩骤降/拒学）。",
      signalsEn: "4-domain cluster: Mood (sad/irritable/worthless), Behavior (withdrawal/self-harm/giving away items), Somatic (insomnia/fatigue), Academic (grade drop/school refusal).",
      actionZh: "单条出现先观察；同一类多条 + 持续 2 周以上 + 影响吃睡上学 → 立即启动评估与专业转介（心理+药物）。",
      actionEn: "Single sign: observe. Multiple signs + ≥2 weeks + impaired eating/sleeping/schooling → initiate professional assessment & referral."
    },
    {
      id: "nssi",
      cat: "crisis",
      urgent: true,
      nameZh: "自伤与自杀行为",
      nameEn: "NSSI & Suicidal Behavior",
      tagZh: "最高紧急度 · 立即行动",
      tagEn: "Urgent Crisis",
      summaryZh: "非自杀性自伤（割伤、烫伤）常是调节痛苦的方式，但有自伤史者自杀风险显著升高，必须认真对待每一次信号。",
      summaryEn: "NSSI (cutting, burning) is often used to regulate emotional pain, but significantly elevates suicide risk. Every signal must be taken seriously.",
      signalsZh: "炎热天气仍穿长袖遮掩伤痕；突然赠送心爱物品、写告别式文字；流露无望感或打听死亡话题。",
      signalsEn: "Long sleeves in hot weather, giving away prized possessions, farewell notes, hopelessness, or researching death.",
      actionZh: "① 温和询问以传递“看见与在乎”；② 立即通知家长与学校；③ 高风险时绝不独留孩子，拨打 999 或专业热线。",
      actionEn: "(1) Ask directly and compassionately; (2) Immediately notify parents & school; (3) Never leave the student alone—call 999 or crisis helplines."
    },
    {
      id: "adhd",
      cat: "neuro",
      urgent: false,
      nameZh: "注意缺陷与多动障碍",
      nameEn: "ADHD",
      tagZh: "神经发育差异",
      tagEn: "Neurodevelopmental",
      summaryZh: "患病率 3%–7%，12岁前起病，源于脑结构与功能差异，与品行差和懒无关。分注意缺陷型、多动冲动型、混合型。",
      summaryEn: "3%–7% prevalence, onset before age 12. Rooted in brain structure/function—not laziness or bad behavior.",
      signalsZh: "粗心漏题、常丢物品、坐不住小动作多、话多、没听完就抢答、难以等待。",
      signalsEn: "Careless mistakes, losing items, fidgeting, leaving seat, excessive talking, blurting out answers.",
      actionZh: "① 调整座位（近师、远门窗，不贴“特殊”标签），桌面只留当前物品，提前2分钟预告转换；② 指令短而明确（1-2步），私下确认理解。",
      actionEn: "(1) Seat near teacher away from distractions without stigmatizing; keep desk clear; give 2-min transition warnings. (2) Give short 1–2 step instructions; check understanding privately."
    },
    {
      id: "odd",
      cat: "neuro",
      urgent: false,
      nameZh: "对立违抗障碍与品行障碍",
      nameEn: "ODD & Conduct Disorder",
      tagZh: "行为背后的情绪",
      tagEn: "Behavioral",
      summaryZh: "ODD（2%）表现为持续≥6个月的发脾气、争执、拒绝规则；品行障碍则涉及欺凌、斗殴、偷窃、破坏等侵犯他人权利行为。",
      summaryEn: "ODD (2%) involves 6+ months of anger/defiance; Conduct Disorder involves severe rule/rights violations (bullying, fighting, stealing).",
      signalsZh: "频繁与成人顶撞争执、故意惹人生气、推卸责任、记仇报复，或出现校园欺凌与逃学。",
      signalsEn: "Frequent arguing with adults, blaming others, spitefulness, or escalating aggression/truancy.",
      actionZh: "惩罚只会加重问题！先减少权力斗争，指令简短并给有限选择；规则少而清；平静后练习替代行为，配合家庭治疗。",
      actionEn: "Punishment worsens it. Reduce power struggles, offer limited choices, keep rules clear and few, practice alternatives when calm, and engage family therapy."
    },
    {
      id: "asd_autism",
      cat: "neuro",
      urgent: false,
      nameZh: "孤独症（自闭症）",
      nameEn: "Autism Spectrum Disorder (ASD)",
      tagZh: "需要被理解的神经多样性",
      tagEn: "Neurodiversity",
      summaryZh: "青春期社交要求提高后更显眼。核心特征：社交互动困难、刻板行为、沟通障碍、感官敏感、能力分布不均。",
      summaryEn: "Becomes more visible in adolescence as social demands rise. Core traits: social/communication differences, repetitive behaviors, sensory sensitivity.",
      signalsZh: "集体中格格不入、易被孤立霸凌、被误解为“没礼貌”、因声光过载而烦躁捂耳。",
      signalsEn: "Isolated in group activities, misread as 'rude', overwhelmed by noise/light, covering ears or melting down.",
      actionZh: "8大沟通原则：先连接再提要求；语言短具体正向（“请慢慢走”替代“别跑”）；给5–10秒等待处理时间；接受非口语沟通；崩溃时先减压不讲道理；切忌强迫对视。",
      actionEn: "8 Principles: Connect first; use short positive phrasing; wait 5–10s for processing; accept non-verbal cues; de-escalate sensory load during meltdowns (no lecturing); never force eye contact."
    },
    {
      id: "somatization",
      cat: "somatic",
      urgent: false,
      nameZh: "躯体化",
      nameEn: "Somatization",
      tagZh: "情绪的身体语言",
      tagEn: "Mind-Body",
      summaryZh: "青春期发生率达 17%。心理痛苦以头痛、腹痛、疲劳等身体不适表达，医学检查基本正常。",
      summaryEn: "Affects 17% in adolescence. Emotional pain manifests as recurring physical pain with normal medical workups.",
      signalsZh: "四条线索：伴随情境压力、医学检查基本正常、不适部位游走、随压力时轻时重。",
      signalsEn: "4 Clues: tied to situational stress, normal medical tests, shifting pain locations, fluctuates with stress.",
      actionZh: "先做医学排查避免漏诊；接纳不适的真实性，采用认知行为治疗（CBT）+ 家庭沟通调整。",
      actionEn: "Rule out medical illness first; validate symptoms; use CBT and adjust high-control/critical family communication."
    },
    {
      id: "sleep",
      cat: "somatic",
      urgent: false,
      nameZh: "睡眠障碍",
      nameEn: "Sleep Disorders",
      tagZh: "最常见行为障碍",
      tagEn: "Sleep Health",
      summaryZh: "初中生需 9 小时、高中生需 8 小时，但近八成青少年未达标。青春期褪黑素分泌峰值后移至凌晨 2–3 点。",
      summaryEn: "Teens need 8–9 hours, yet ~80% fall short. Puberty shifts melatonin peak to 2–3 AM, clashing with early school starts.",
      signalsZh: "每周≥3天入睡难/早醒、持续1个月、白天嗜睡效率低下、情绪波动放大。",
      signalsEn: "Trouble falling/staying asleep ≥3 nights/week for 1+ month, daytime fatigue, amplified emotional reactivity.",
      actionZh: "① 固定起床时间并见阳光；② 午后不喝咖啡茶、睡前关手机强光；③ 床只用来睡觉；④ 必要时 CBT-I 治疗。",
      actionEn: "(1) Fixed wake time + morning sunlight; (2) No afternoon caffeine, screens off before bed; (3) Bed is for sleep only; (4) CBT-I if persistent."
    },
    {
      id: "eating",
      cat: "somatic",
      urgent: true,
      nameZh: "进食障碍",
      nameEn: "Eating Disorders",
      tagZh: "高死亡率风险",
      tagEn: "High Medical Risk",
      summaryZh: "包括神经性厌食症与贪食症，本质是体像扭曲与自我评价过度绑定外貌体重，是死亡率最高的心理障碍之一。",
      summaryEn: "Anorexia & bulimia driven by body image distortion—among the highest-mortality psychiatric disorders.",
      signalsZh: "极端节食、暴食后催吐/滥用泻药、体重骤降、刻意隐瞒饮食习惯、疲劳晕厥。",
      signalsEn: "Extreme restriction, binge-purge cycles, rapid weight loss, hiding food behaviors, dizziness.",
      actionZh: "绝非“挑食”或“爱美”，必须立即启动专业医疗 + 心理联合治疗。",
      actionEn: "Never dismiss as 'picky eating' or vanity; requires immediate medical + psychological intervention."
    },
    {
      id: "addiction",
      cat: "somatic",
      urgent: false,
      nameZh: "网络/手机成瘾与物质使用",
      nameEn: "Internet Addiction & Substance Use",
      tagZh: "逃避与自我治疗",
      tagEn: "Behavioral & Substance",
      summaryZh: "Kimberly Young 标准：无意义上网 >4 小时/天且失控；物质使用（电子烟 vape、酒精等）常是青少年缓解焦虑抑郁的“自我治疗”。",
      summaryEn: "Internet addiction (>4h/day non-purposeful + loss of control) and vaping/alcohol use often serve as 'self-medication' for underlying distress.",
      signalsZh: "衣物残留甜味香精或烟味、缺课迟到、频繁借钱、停用网络即烦躁、向家人隐瞒。",
      signalsEn: "Sweet/smoke odors on clothes, truancy, borrowing money, irritability when offline, secrecy.",
      actionZh: "惩罚无法根治，须看见其背后的情绪痛点，越早提供支持与专业戒断治疗越好。",
      actionEn: "Punishment fails; address the underlying emotional pain and connect early with support and cessation resources."
    },
    {
      id: "psychosis",
      cat: "crisis",
      urgent: true,
      nameZh: "重性精神病早期与双相障碍",
      nameEn: "Early Psychosis & Bipolar Disorder",
      tagZh: "别错过干预黄金期",
      tagEn: "Golden Window",
      summaryZh: "青少年期是首发高峰期。包括幻觉、妄想及双相情感障碍（抑郁与躁狂剧烈摆动），延误治疗会显著影响预后。",
      summaryEn: "Adolescence is a peak onset window. Includes hallucinations, delusions, and bipolar mood swings. Delays worsen prognosis.",
      signalsZh: "突然坚信同学针对议论自己、自言自语、无故发笑、精力异常亢奋几乎不睡、成绩骤降。",
      signalsEn: "Sudden paranoid beliefs, talking to self, inappropriate laughter, extreme energy with almost no sleep, sharp grade drop.",
      actionZh: "发现后**不争辩、不附和**其妄想内容，保持冷静安全，尽快联系家长寻求精神科医疗。",
      actionEn: "Do NOT argue with or validate delusions; keep calm and safe, and urgently coordinate psychiatric care with parents."
    },
    {
      id: "ptsd",
      cat: "crisis",
      urgent: true,
      nameZh: "急性应激障碍 (ASD) 与 PTSD",
      nameEn: "Acute Stress Disorder & PTSD",
      tagZh: "创伤干预 · 5大红旗",
      tagEn: "Trauma & Red Flags",
      summaryZh: "重大创伤后：0–3天为正常应激（安全+安抚+连接）；3天–1个月为ASD（14项中≥9项）；超1个月可能发展为PTSD。",
      summaryEn: "Post-trauma timeline: 0–3 days normal stress (safety & comfort); 3 days–1 mo ASD; >1 mo potential PTSD.",
      signalsZh: "五大症状组：事件重现（闪回/噩梦）、负性心境、解离断片、刻意回避、高警觉。红旗信号：严重解离、自伤念头、完全拒学、借酒药麻痹。",
      signalsEn: "5 Clusters: Intrusion, Negative mood, Dissociation, Avoidance, Hyperarousal. Red flags: severe dissociation, suicidal thoughts, total school refusal, substance numbing.",
      actionZh: "出现任何一条“红旗信号”**不要等满 1 个月**，立即转介青少年精神科/心理科！",
      actionEn: "If ANY red flag appears, do NOT wait 1 month—refer immediately to adolescent psychiatry/psychology."
    }
  ],

  quiz: [
    {
      qZh: "情景 1：课堂上，一名学生突然呼吸急促、胸闷手抖、大喊“我快死了”，持续约 5 分钟。老师最恰当的第一步做法是？",
      qEn: "Scenario 1: During class, a student suddenly hyperventilates, clutches their chest, trembles, and cries 'I'm dying!'. What is the best immediate step?",
      optionsZh: [
        "立刻大声训斥全班安静，并让该生“别装了，深呼吸想开点”",
        "稳住情绪，温和陪伴说“没事，会过去的”，引导鼻吸4拍嘴呼6拍与5-4着陆练习",
        "让全班同学围上去安慰并追问发生什么事"
      ],
      optionsEn: [
        "Tell the student to stop faking and 'just think positive'",
        "Stay calm, reassure them ('It will pass'), and guide 4-6 breathing + 5-4 sensory grounding",
        "Have the whole class gather around and question them immediately"
      ],
      answer: 1,
      explainZh: "这是典型的“惊恐发作（假警报）”。围观和训斥会加剧窒息感，四步陪伴法（稳住、4-6呼吸、5-4着陆、冷水降温）能有效帮助其度过15–30分钟的峰值期。",
      explainEn: "This resembles a Panic Attack. Crowding or lecturing worsens distress; the 4-step grounding protocol helps them ride out the peak safely."
    },
    {
      qZh: "情景 2：马来西亚 32°C 的大热天，某初中生连续两周穿着长袖外套不肯脱下，成绩骤降且回避同伴，课本角落写着“消失了更好”。老师应如何处理？",
      qEn: "Scenario 2: In 32°C weather, a student wears long sleeves for 2 weeks straight, grades drop, avoids peers, and writes 'better off disappearing' in a notebook. What should the teacher do?",
      optionsZh: [
        "在班上当众表扬或询问他为什么穿长袖，看他会不会自己说出来",
        "先观察一个月，等成绩再降一点再通知家长",
        "私下温和关切并记录信号，立即通知家长与学校辅导老师，高风险时保持不离人并启动专业转介"
      ],
      optionsEn: [
        "Ask them in front of the class why they are wearing long sleeves",
        "Wait another month to see if grades drop further",
        "Check in privately with care, document signals, immediately notify parents & school counselor, and never leave them alone if high risk"
      ],
      answer: 2,
      explainZh: "炎热穿长袖遮掩 + 告别/无望感文字是自伤与自杀高危信号。切忌当众询问或拖延观察，应私下表达看见与在乎，并立即启动家校与专业转介。",
      explainEn: "Covering arms in heat + hopelessness notes are urgent self-harm/suicide warning signs. Never confront publicly or delay—engage privately and escalate immediately."
    },
    {
      qZh: "情景 3：患有 ADHD 的学生在课堂上经常没听完指令就动笔做错，还频繁打断同学。以下哪项课堂调整最有效？",
      qEn: "Scenario 3: A student with ADHD frequently starts tasks before hearing instructions and interrupts peers. Which classroom strategy works best?",
      optionsZh: [
        "把座位调到教室最后排角落单独隔离，贴上“重点关注”标签",
        "先叫名字建立注意，每次只给 1–2 步短指令并配合板书，私下确认理解，提前 2 分钟预告活动转换",
        "每次打断就罚站并当众批评“你怎么又走神了”"
      ],
      optionsEn: [
        "Isolate their desk in the back corner with a special label",
        "Say their name first, give 1–2 short steps with visual cues, check privately, and give a 2-minute transition warning",
        "Make them stand every time they interrupt and call them out"
      ],
      answer: 1,
      explainZh: "ADHD 是神经发育差异而非品行问题。避免孤立贴标签或隔空喊话；短指令、视觉提示、转换预告与私下确认是最实操的支持策略。",
      explainEn: "ADHD is neurodevelopmental, not misconduct. Avoid isolation or public shaming; short steps, visual cues, transition warnings, and private check-ins work best."
    }
  ],

  checklist: [
    {
      id: "c1",
      zh: "把求助热线存进手机：Buddy Bear 1800-18-2327、国家心理热线 15555、生命线 03-4265 7995",
      en: "Save helplines in phone: Buddy Bear 1800-18-2327, Talian HEAL 15555, Life Line 03-4265 7995"
    },
    {
      id: "c2",
      zh: "找到本校心理辅导室位置，并自然地向学生介绍它的存在（去病耻化）",
      en: "Locate your school counseling room and normalize its use to students (reduce stigma)"
    },
    {
      id: "c3",
      zh: "本周认真问一次孩子/学生：“最近两周，睡得怎么样？”",
      en: "Ask a student or child sincerely this week: 'How have you been sleeping the past two weeks?'"
    },
    {
      id: "c4",
      zh: "与孩子安排一次“不谈学习与分数”的散步、运动或吃饭",
      en: "Schedule one walk, sport, or meal with no talk about grades or academics"
    },
    {
      id: "c5",
      zh: "把本份心理健康指南转发给一位同样关心孩子的同事或家长",
      en: "Share this mental health guide with a colleague or parent who cares about youth"
    }
  ]
};
