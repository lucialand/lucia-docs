module.exports = {
  title: 'Lucia',
  tagline: '3kb library for tiny web apps',
  url: 'https://lucia.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.ico',
  organizationName: 'lucialand', // Usually your GitHub org/user name.
  projectName: 'lucia-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'Lucia',
      logo: {
        alt: 'Lucia Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/essentials/installation',
          activeBasePath: 'docs',
          label: 'Installation',
          position: 'right',
        },
        {
          to: 'docs/examples/todo',
          activeBasePath: 'docs',
          label: 'Examples',
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
      copyright: `Copyright © ${new Date().getFullYear()} The Lucia Authors.`,
    },
    algolia: {
      apiKey: '005d225d1319cf1f39881d336adb99e5',
      indexName: 'lucia',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lucialand/lucia-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
