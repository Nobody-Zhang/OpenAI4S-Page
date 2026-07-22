/** Site copy — English + 简体中文. Keys used via data-i18n or dual-lang spans. */

export type Lang = 'en' | 'zh';

export const LANG_STORAGE_KEY = 'o4s-lang';

export const nav = {
  en: {
    paradigm: 'Paradigm',
    demos: 'Demos',
    skills: 'Skills',
    architecture: 'Architecture',
    pricing: 'Pricing',
    quickstart: 'Quickstart',
    docs: 'Docs',
    github: 'GitHub',
  },
  zh: {
    paradigm: '范式',
    demos: '演示',
    skills: '技能',
    architecture: '架构',
    pricing: '定价',
    quickstart: '快速开始',
    docs: '文档',
    github: 'GitHub',
  },
} as const;

export const ui = {
  en: {
    // announcement
    ann_label: 'Open-sourced',
    ann_body: 'Code-as-Action engine · scientific web app · 24 Skills · BYOC compute',
    ann_cta: 'Read the launch »',

    // hero
    hero_sys: 'SYS',
    hero_sys_v: 'ONLINE',
    hero_kernel: 'KERNEL',
    hero_kernel_v: 'PERSISTENT',
    hero_ark: 'ARK',
    hero_ark_v: '¥9.9/MO',
    hero_tagline: 'Open AI for Scientist',
    hero_type: 'code is the action · kernel alive',
    hero_h1_a: 'Code is the action.',
    hero_h1_b: 'The kernel is the environment.',
    hero_lead:
      'An open-source, Code-as-Action scientific research agent. It emits a cell of real Python/R into a persistent Jupyter-style kernel — not a tool_use JSON menu. A Turing-complete action space, driven by a model key that costs ¥9.9/month (≈ US$1.4).',
    hero_cta_star: 'Star on GitHub',
    hero_cta_clone: '$ git clone && ./start.sh',
    hero_status: 'MIT · pure stdlib · 206 tests · open-sourced 2026-07-06',
    hero_chip_1: 'persistent kernel',
    hero_chip_2: 'host RPC',
    hero_chip_3: 'zero core deps',

    // providers
    providers_kicker: 'host.llm',
    providers_title: 'One interface. Every model.',
    providers_sub: 'Switch providers from the UI — no code change.',

    // paradigm
    paradigm_badge: 'PARADIGM',
    paradigm_badge_v: 'CODE-AS-ACTION',
    paradigm_title_a: 'Code-as-Action,',
    paradigm_title_b: 'not ReAct.',
    paradigm_lead:
      'Most “AI agents” are ReAct + tool_use: one JSON tool call per step against a fixed menu. OpenAI4S emits a cell of real Python/R into a persistent kernel — every “tool” is a plain function on host.',

    // highlights
    highlights_badge: 'SPEC',
    highlights_badge_v: '6 AXES',
    highlights_title_a: 'Built different.',
    highlights_title_b: 'Verifiably.',
    highlights_sub: 'Six load-bearing differences — every one verifiable in the repo.',

    h1_t: 'Code-as-Action engine',
    h1_d:
      'A Jupyter-style persistent kernel is the action space. Namespace persists across cells; big objects stay resident, only summaries hit context.',
    h2_t: 'Pure-stdlib core',
    h2_d:
      'The engine and the web server are stdlib-only (http.server + a hand-rolled WebSocket, no framework, no deps). The LLM client speaks OpenAI / Anthropic / Gemini over urllib alone.',
    h3_t: 'One-line multi-provider',
    h3_d:
      'ark (doubao · glm · kimi · deepseek · minimax) plus official chatgpt · claude · gemini, behind a single host.llm; switch from the UI.',
    h4_t: 'Full scientific web app',
    h4_d:
      'Live streaming turns, versioned artifacts (with a built-in 3Dmol viewer for .pdb/.cif), a live Notebook sharing the agent’s kernel, background & resume.',
    h5_t: 'BYOC remote compute',
    h5_d:
      'Dispatch GPU jobs to your own machines via ssh:<alias> or the bundled NVIDIA NIM provider; real host.fold (single-sequence Protenix / AF3-class) under a strict no-fabrication policy.',
    h6_t: '24 bundled Skills',
    h6_d:
      'Skills are recipes of code, not JSON schemas — a SKILL.md the agent imports into the kernel. 14 of them wrap GPU/model science tools.',

    // demos
    demos_badge: 'TELEMETRY',
    demos_badge_v: '6 SESSIONS',
    demos_title_a: 'Watch it do',
    demos_title_b: 'real science.',
    demos_sub: 'Six real sessions — no fabricated UI. Scroll to play · click to expand.',
    demo_1: 'Live API workflow — from UniProt / RCSB to a 3D structure & report',
    demo_2: 'Real-data analysis — human insulin INS (P01308): a reproducible report',
    demo_3: 'Visual artifact editing — “raise the confidence cutoff to 75” in one line',
    demo_4: 'Annotation-driven chart editing — lasso a region & recolor the legend',
    demo_5: 'Plan-mode research — artemisinin & paclitaxel solubility prediction',
    demo_6: 'Protein engineering — from sequence to ranked mutants & structural rationale',

    // architecture
    arch_badge: 'ARCHITECTURE',
    arch_badge_v: 'DUAL LOOP',
    arch_title_a: 'Dual loop.',
    arch_title_b: 'One kernel.',

    // skills
    skills_badge: 'SKILLS',
    skills_badge_v: '24 BUNDLED',
    skills_title_a: 'Skills are',
    skills_title_b: 'recipes of code.',
    skills_sub:
      'Not JSON schemas — a SKILL.md the agent imports into the kernel. 24 bundled, 14 wrapping GPU/model science tools.',
    skills_g1: 'Structure prediction',
    skills_g2: 'Sequence · omics · docking',
    skills_g3: 'Protein design',
    skills_g4: 'Research workflow + platform',

    // stats
    stat_1: 'Bundled Skills',
    stat_2: 'GPU/model Skills',
    stat_3: 'Model providers',
    stat_4: 'Tests passing',
    stat_5: 'Per month to run',
    stat_6: 'Core dependencies',
    stat_7: 'License',

    // pricing
    pricing_badge: 'COST',
    pricing_badge_v: 'TWO PATHS',
    pricing_title_a: 'Two ways.',
    pricing_title_b: 'Both cheap.',
    pricing_sub: 'No frontier-model key required. Self-host free, or drive it for pocket change.',

    // quickstart
    qs_badge: 'BOOT',
    qs_badge_v: '3 COMMANDS',
    qs_title_a: 'Three commands.',
    qs_title_b: 'You’re in.',
    qs_note:
      'No API key needed to boot — set your model in the UI (Customize → Models). One-shot without the UI is also supported.',
    qs_docs: 'Full documentation →',

    // faq
    faq_badge: 'FAQ',
    faq_badge_v: '6 Qs',
    faq_title_a: 'Questions,',
    faq_title_b: 'answered.',
    faq1_t: 'What is Code-as-Action vs ReAct?',
    faq1_d:
      'ReAct emits one tool_use JSON per step against a fixed menu; OpenAI4S emits a full Python/R cell into a persistent kernel — a Turing-complete action space where loops, branches, and library calls happen in one round-trip and big objects stay resident.',
    faq2_t: 'Do I really not need a frontier key?',
    faq2_d:
      'Correct. No API key is needed to boot; set your model in the UI. It runs on Doubao via Volcengine Ark’s “Small” plan at ¥9.9/mo (≈ US$1.4), or bring your own chatgpt / claude / gemini key.',
    faq3_t: 'Which models and providers?',
    faq3_d:
      'ark (doubao · glm · kimi · deepseek · minimax) plus official chatgpt · claude · gemini, all behind one host.llm, switchable from the UI.',
    faq4_t: 'Do I need a GPU? What is BYOC / host.fold?',
    faq4_d:
      'No local GPU required. Dispatch GPU jobs to your own machines via ssh:<alias> or the bundled NVIDIA NIM provider; host.fold runs single-sequence Protenix / AF3-class folding under a strict no-fabrication policy.',
    faq5_t: 'Is the core really dependency-free?',
    faq5_d:
      'Yes — the engine and web server are pure stdlib (http.server + a hand-rolled WebSocket, no framework); the LLM client speaks OpenAI/Anthropic/Gemini over urllib. The optional science extra pins numpy/pandas/matplotlib.',
    faq6_t: 'Is it safe? License?',
    faq6_d:
      'Defense-in-depth: a pre-exec safety classifier screens every cell before it runs in the kernel. See the Security doc. Released under the MIT license — github.com/PKU-YuanGroup/OpenAI4S.',

    // credibility + cta
    cred:
      'Independently reproduces the Code-as-Action paradigm (cf. Claude Science, CodeAct, ReAct). Science Skills stand on ColabFold / AlphaFold, ESM, OpenFold, Boltz, Chai, ProteinMPNN, DiffDock, Evo2, Borzoi, scGPT, scVI-tools and open data (NCBI, UniProt, RCSB PDB, EBI, OpenAlex, Crossref).',
    cta_type: 'code is the action · the kernel is the environment',
    cta_title_a: 'Replicate Claude Science',
    cta_title_b: 'for under two dollars.',
    cta_arch: 'Read the architecture',
    cta_foot: 'openai4s.org · MIT · Open AI for Scientist',

    footer_product: 'Product',
    footer_docs: 'Docs',
    footer_project: 'Project',
    footer_community: 'Community',
    footer_note: 'code is the action · the kernel is the environment · MIT · openai4s.org',
  },

  zh: {
    ann_label: '已开源',
    ann_body: 'Code-as-Action 引擎 · 科研 Web App · 24 Skills · BYOC 算力',
    ann_cta: '阅读发布说明 »',

    hero_sys: '系统',
    hero_sys_v: '在线',
    hero_kernel: '内核',
    hero_kernel_v: '持久化',
    hero_ark: '方舟',
    hero_ark_v: '¥9.9/月',
    hero_tagline: '给科学家的开放 AI',
    hero_type: '代码即行动 · 内核即环境',
    hero_h1_a: '代码即行动。',
    hero_h1_b: '内核即环境。',
    hero_lead:
      '开源的 Code-as-Action 科研智能体。它向持久化 Jupyter 风格内核发出真正的 Python/R 代码单元——而不是 tool_use JSON 菜单。图灵完备的动作空间，用约 ¥9.9/月（≈ US$1.4）的模型密钥即可驱动。',
    hero_cta_star: '在 GitHub 点 Star',
    hero_cta_clone: '$ git clone && ./start.sh',
    hero_status: 'MIT · 纯标准库 · 206 项测试 · 2026-07-06 开源',
    hero_chip_1: '持久化内核',
    hero_chip_2: 'host RPC',
    hero_chip_3: '零核心依赖',

    providers_kicker: 'host.llm',
    providers_title: '一个接口，全部模型。',
    providers_sub: '在 UI 中切换提供商——无需改代码。',

    paradigm_badge: '范式',
    paradigm_badge_v: 'CODE-AS-ACTION',
    paradigm_title_a: 'Code-as-Action，',
    paradigm_title_b: '而非 ReAct。',
    paradigm_lead:
      '多数「AI Agent」是 ReAct + tool_use：每一步一个 JSON 工具调用，动作空间是固定菜单。OpenAI4S 则发出真正的 Python/R 代码单元，在持久化内核中运行——每个「工具」只是 host 上的普通函数。',

    highlights_badge: '规格',
    highlights_badge_v: '6 个轴',
    highlights_title_a: '与众不同。',
    highlights_title_b: '可验证。',
    highlights_sub: '六项承重差异——每一项都能在仓库中核验。',

    h1_t: 'Code-as-Action 引擎',
    h1_d: 'Jupyter 风格的持久化内核本身就是动作空间。命名空间跨单元保持；大对象常驻内存，只有摘要进入上下文。',
    h2_t: '纯标准库核心',
    h2_d: '引擎与 Web 服务器均为纯标准库（http.server + 手写 WebSocket，无框架、无依赖）。LLM 客户端仅用 urllib 对接 OpenAI / Anthropic / Gemini。',
    h3_t: '一行多提供商',
    h3_d: 'ark（doubao · glm · kimi · deepseek · minimax）以及官方 chatgpt · claude · gemini，统一在 host.llm 之后；可在 UI 切换。',
    h4_t: '完整科研 Web App',
    h4_d: '实时流式回合、版本化产物（内置 .pdb/.cif 的 3Dmol 查看器）、与智能体共享内核的 Notebook、后台与恢复。',
    h5_t: 'BYOC 远程算力',
    h5_d: '通过 ssh:<alias> 或捆绑的 NVIDIA NIM 将 GPU 任务派发到你自己的机器；真实的 host.fold（单序列 Protenix / AF3 级），严格禁止伪造结构。',
    h6_t: '24 个内置 Skills',
    h6_d: 'Skills 是代码配方，不是 JSON schema——一份 SKILL.md，由智能体导入内核。其中 14 个封装 GPU/模型科学工具。',

    demos_badge: '遥测',
    demos_badge_v: '6 段会话',
    demos_title_a: '看它做',
    demos_title_b: '真正的科学。',
    demos_sub: '六段真实会话——无编造 UI。滚动播放 · 点击全屏。',
    demo_1: '实时 API 工作流——从 UniProt / RCSB 到三维结构与报告',
    demo_2: '真实数据分析——人胰岛素 INS（P01308）：可复现报告',
    demo_3: '可视化产物编辑——一行话「把置信度阈值调到 75」',
    demo_4: '标注驱动的图表编辑——套索区域并重着色图例',
    demo_5: '计划模式研究——青蒿素与紫杉醇溶解度预测',
    demo_6: '蛋白质工程——从序列到排序突变体与结构依据',

    arch_badge: '架构',
    arch_badge_v: '双环',
    arch_title_a: '双环。',
    arch_title_b: '一个内核。',

    skills_badge: '技能',
    skills_badge_v: '24 内置',
    skills_title_a: 'Skills 是',
    skills_title_b: '代码的配方。',
    skills_sub: '不是 JSON schema——一份 SKILL.md 被导入内核。24 个内置，14 个封装 GPU/模型工具。',
    skills_g1: '结构预测',
    skills_g2: '序列 · 组学 · 对接',
    skills_g3: '蛋白质设计',
    skills_g4: '科研工作流 + 平台',

    stat_1: '内置 Skills',
    stat_2: 'GPU/模型 Skills',
    stat_3: '模型提供商',
    stat_4: '通过测试',
    stat_5: '每月运行成本',
    stat_6: '核心依赖',
    stat_7: '许可证',

    pricing_badge: '成本',
    pricing_badge_v: '两条路',
    pricing_title_a: '两种方式。',
    pricing_title_b: '都很便宜。',
    pricing_sub: '无需前沿模型密钥。自托管免费，或以零用钱成本驱动。',

    qs_badge: '启动',
    qs_badge_v: '三行命令',
    qs_title_a: '三条命令。',
    qs_title_b: '即刻进入。',
    qs_note: '启动无需 API Key——在 UI（Customize → Models）中设置模型。也支持无 UI 的一次性命令。',
    qs_docs: '完整文档 →',

    faq_badge: '问答',
    faq_badge_v: '6 题',
    faq_title_a: '问题，',
    faq_title_b: '有答。',
    faq1_t: 'Code-as-Action 与 ReAct 有何不同？',
    faq1_d:
      'ReAct 每步发出一个 tool_use JSON，动作空间是固定菜单；OpenAI4S 向持久化内核发出完整 Python/R 单元——图灵完备的动作空间，循环、分支与库调用可在一轮完成，大对象常驻。',
    faq2_t: '真的不需要前沿模型密钥吗？',
    faq2_d:
      '是的。启动无需 API Key；在 UI 中设置模型。可通过火山方舟「Small」套餐以 ¥9.9/月（≈ US$1.4）运行豆包，或自带 chatgpt / claude / gemini 密钥。',
    faq3_t: '支持哪些模型与提供商？',
    faq3_d: 'ark（doubao · glm · kimi · deepseek · minimax）以及官方 chatgpt · claude · gemini，统一 host.llm，可在 UI 切换。',
    faq4_t: '需要 GPU 吗？什么是 BYOC / host.fold？',
    faq4_d:
      '本地不必有 GPU。通过 ssh:<alias> 或捆绑的 NVIDIA NIM 派发 GPU 任务；host.fold 运行单序列 Protenix / AF3 级折叠，并严格禁止伪造。',
    faq5_t: '核心真的零依赖吗？',
    faq5_d:
      '是——引擎与 Web 服务器为纯标准库（http.server + 手写 WebSocket）；LLM 客户端仅用 urllib。可选 science extra 固定 numpy/pandas/matplotlib。',
    faq6_t: '安全吗？许可证？',
    faq6_d:
      '纵深防御：每个单元执行前经安全分类器筛查。详见 Security 文档。MIT 许可 — github.com/PKU-YuanGroup/OpenAI4S。',

    cred:
      '独立复现 Code-as-Action 范式（参见 Claude Science、CodeAct、ReAct）。科学 Skills 建立在 ColabFold / AlphaFold、ESM、OpenFold、Boltz、Chai、ProteinMPNN、DiffDock、Evo2、Borzoi、scGPT、scVI-tools 以及开放数据（NCBI、UniProt、RCSB PDB、EBI、OpenAlex、Crossref）之上。',
    cta_type: '代码即行动 · 内核即环境',
    // "two cuts" ≈ under ~US$2 (¥9.9/mo ≈ US$1.4), not "切割"
    cta_title_a: '用少于两美元的价格，',
    cta_title_b: '复刻 Claude Science。',
    cta_arch: '阅读架构',
    cta_foot: 'openai4s.org · MIT · 给科学家的开放 AI',

    footer_product: '产品',
    footer_docs: '文档',
    footer_project: '项目',
    footer_community: '社区',
    footer_note: '代码即行动 · 内核即环境 · MIT · openai4s.org',
  },
} as const;

export type UiKey = keyof typeof ui.en;
