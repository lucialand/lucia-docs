module.exports = {
  title: 'Lucia',
  tagline: 'A tiny library for tiny web apps',
  url: 'https://lucia.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.ico',
  organizationName: 'lucialand', // Usually your GitHub org/user name.
  projectName: 'lucia-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      title: 'Lucia',
      logo: {
        alt: 'Lucia Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/essentials/introduction',
          activeBasePath: 'docs',
          label: 'Getting Started',
          position: 'right',
        },
        {
          to: 'docs/essentials/installation',
          activeBasePath: 'docs',
          label: 'Installation',
          position: 'right',
        },
        {
          href: 'https://github.com/aidenybai/lucia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Essentials',
              to: 'docs/essentials/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/q2pSU39',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aidenybai/lucia',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Lucia Authors.`,
    },
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'lucia',
    //   algoliaOptions: {}
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lucialand/lucia-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
