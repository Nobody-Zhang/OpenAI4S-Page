const GITHUB = 'https://github.com/PKU-YuanGroup/OpenAI4S';
const DOCS = 'https://github.com/PKU-YuanGroup/OpenAI4S/tree/main/docs';

export const headerData = {
  links: [
    { text: 'Paradigm', textZh: '范式', href: '#paradigm' },
    { text: 'Demos', textZh: '演示', href: '#demos' },
    { text: 'Architecture', textZh: '架构', href: '#architecture' },
    { text: 'Skills', textZh: '技能', href: '#skills' },
    { text: 'Pricing', textZh: '定价', href: '#pricing' },
    { text: 'Quickstart', textZh: '启动', href: '#quickstart' },
    { text: 'Docs', textZh: '文档', href: DOCS },
  ],
  actions: [{ text: 'GitHub', href: GITHUB, target: '_blank', variant: 'primary' as const, icon: 'tabler:brand-github' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      titleZh: '产品',
      links: [
        { text: 'Paradigm', textZh: '范式', href: '#paradigm' },
        { text: 'Demos', textZh: '演示', href: '#demos' },
        { text: 'Skills', textZh: '技能', href: '#skills' },
        { text: 'Pricing', textZh: '定价', href: '#pricing' },
        { text: 'Quickstart', textZh: '启动', href: '#quickstart' },
      ],
    },
    {
      title: 'Docs',
      titleZh: '文档',
      links: [
        { text: 'Architecture', textZh: '架构', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/architecture.md' },
        { text: 'Web app', textZh: 'Web 应用', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/webapp.md' },
        { text: 'Skills', textZh: '技能', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/skills.md' },
        { text: 'Remote compute', textZh: '远程算力', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/compute.md' },
        { text: 'Configuration', textZh: '配置', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/configuration.md' },
        { text: 'Security', textZh: '安全', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/security.md' },
      ],
    },
    {
      title: 'Project',
      titleZh: '项目',
      links: [
        { text: 'GitHub', href: GITHUB },
        { text: 'Contributing', textZh: '贡献指南', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/CONTRIBUTING.md' },
        { text: 'License (MIT)', textZh: '许可证 (MIT)', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/LICENSE' },
        { text: '简体中文 README', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/README_zh.md' },
      ],
    },
    {
      title: 'Community',
      titleZh: '社区',
      links: [
        { text: 'Star history', textZh: 'Star 历史', href: 'https://www.star-history.com/#PKU-YuanGroup/OpenAI4S&Date' },
        { text: 'Contributors', textZh: '贡献者', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/graphs/contributors' },
        { text: 'Issues', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/issues' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: GITHUB }],
  footNote: `
    <span class="font-mono" style="color: var(--o4s-amber)">OpenAI4S</span>
    <span class="o4s-i18n-en text-muted"> · code is the action · the kernel is the environment · MIT · openai4s.org</span>
    <span class="o4s-i18n-zh text-muted"> · 代码即行动 · 内核即环境 · MIT · openai4s.org</span>
  `,
};
