const GITHUB = 'https://github.com/PKU-YuanGroup/OpenAI4S';
const DOCS = 'https://github.com/PKU-YuanGroup/OpenAI4S/tree/main/docs';

export const headerData = {
  links: [
    { text: 'Paradigm', href: '#paradigm' },
    { text: 'Demos', href: '#demos' },
    { text: 'Skills', href: '#skills' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'Quickstart', href: '#quickstart' },
    { text: 'Docs', href: DOCS },
  ],
  actions: [{ text: 'Star', href: GITHUB, target: '_blank', variant: 'primary' as const, icon: 'tabler:star' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Paradigm', href: '#paradigm' },
        { text: 'Demos', href: '#demos' },
        { text: 'Skills', href: '#skills' },
        { text: 'Pricing', href: '#pricing' },
        { text: 'Quickstart', href: '#quickstart' },
      ],
    },
    {
      title: 'Docs',
      links: [
        { text: 'Architecture', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/architecture.md' },
        { text: 'Web app', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/webapp.md' },
        { text: 'Skills', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/skills.md' },
        { text: 'Remote compute', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/compute.md' },
        { text: 'Configuration', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/configuration.md' },
        { text: 'Security', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/security.md' },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'GitHub', href: GITHUB },
        { text: 'Contributing', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/CONTRIBUTING.md' },
        { text: 'License (MIT)', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/LICENSE' },
        { text: '简体中文', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/README_zh.md' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Star history', href: 'https://www.star-history.com/#PKU-YuanGroup/OpenAI4S&Date' },
        { text: 'Contributors', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/graphs/contributors' },
        { text: 'Issues', href: 'https://github.com/PKU-YuanGroup/OpenAI4S/issues' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: GITHUB }],
  footNote: `
    <span class="font-mono text-muted">OpenAI4S</span> · code is the action, the kernel is the environment · MIT · openai4s.org
  `,
};
