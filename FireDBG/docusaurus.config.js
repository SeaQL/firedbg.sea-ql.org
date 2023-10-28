// const versions = require('./versions.json');

// function getNextMinorVersionName() {
//   const minorVersion = parseInt(versions[0].split('.')[1], 10);
//   return `0.${minorVersion + 1}.x`;
// }

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FireDBG - 🌊 The time-travel visual debugger for Rust',
  tagline: '🌊 The time-travel visual debugger for Rust',
  url: 'https://firedbg.sea-ql.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicon.ico',
  organizationName: 'SeaQL',
  projectName: 'firedbg',
  trailingSlash: true,
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FireDBG',
      logo: {
        alt: 'FireDBG Logo',
        src: 'img/SeaQL.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        {
          href: 'https://crates.io/crates/firedbg',
          label: 'Crate',
          position: 'right',
        },
        {
          href: 'https://github.com/SeaQL/firedbg',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownActiveClassDisabled: true,
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/index',
            },
            {
              label: 'API Reference',
              to: 'https://docs.rs/firedbg/latest/firedbg/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SeaQL/firedbg/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/uCPdDXzbdv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sea_ql',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Us',
              to: '/about-us',
            },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
          ],
        },
      ],
      copyright: [
        `Copyright © ${new Date().getFullYear()} SeaQL.org`,
      ].join(''),
    },
    prism: {
      additionalLanguages: [
        'toml',
        'rust',
      ],
    },
    // algolia: {
    //   appId: 'F60BRNGE7P',
    //   apiKey: 'cb0fff4f36dcd0f3d6a97e12e494dec7',
    //   indexName: 'seaorm',
    //   contextualSearch: true,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SeaQL/firedbg.sea-ql.org/edit/master/FireDBG/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // versions: {
          //   current: {
          //     label: `${getNextMinorVersionName()} 🚧`,
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/SeaQL/firedbg.sea-ql.org/edit/master/FireDBG/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.8,
        },
      },
    ],
  ],
  scripts: [
    '/sea-ql.js',
  ],
};
