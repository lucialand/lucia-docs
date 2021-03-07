module.exports = {
  title: 'Lucia',
  tagline: '3kb library for tiny web apps',
  url: 'https://lucia.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.ico',
  organizationName: 'lucialand',
  projectName: 'lucia-docs',
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
          to: 'docs/fundementals/installation',
          activeBasePath: 'docs',
          label: 'Installation',
          position: 'right',
        },
        {
          href: 'https://discord.gg/q2pSU39',
          label: 'Discord',
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
      copyright: `
      <small>Sponsored by:</small><br>
      <img
        width="10%"
        src="https://raw.githubusercontent.com/Anomaly-Science/assets/main/SVG/Anomaly%20Science%20Logo%20Full%20Light%20Mode.svg"
        alt="Anomaly Science"
      ></img><br><br>
      <small>Copyright © ${new Date().getFullYear()} The Lucia Authors.</small>`,
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
