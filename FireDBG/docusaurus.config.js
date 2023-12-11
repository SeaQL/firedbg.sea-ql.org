// const versions = require('./versions.json');

// function getNextMinorVersionName() {
//   const minorVersion = parseInt(versions[0].split('.')[1], 10);
//   return `0.${minorVersion + 1}.x`;
// }

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FireDBG - 🔥 Time Travel Visual Debugger for Rust',
  tagline: '🔥 Time Travel Visual Debugger for Rust',
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
        src: 'img/FireDBG.png',
      },
      items: [
        {
          to: '/install',
          label: 'Install',
          position: 'left',
        },
        // {
        //   type: 'doc',
        //   docId: 'index',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://marketplace.visualstudio.com/items?itemName=SeaQL.firedbg-rust',
          label: 'VS Code',
          position: 'right',
        },
        {
          href: 'https://github.com/SeaQL/FireDBG.for.Rust',
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
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Getting Started',
        //       to: '/docs/index',
        //     },
        //     {
        //       label: 'API Reference',
        //       to: 'https://docs.rs/firedbg/latest/firedbg/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SeaQL/FireDBG.for.Rust/discussions',
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
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'EULA',
              to: '/eula',
            },
            {
              label: 'Privacy',
              to: '/privacy',
            },
          ],
        },
      ],
      copyright: [
        `Copyright © ${new Date().getFullYear()} SeaQL.org`,
      ].join(''),
    },
    prism: {
      // Themes: https://github.com/FormidableLabs/prism-react-renderer/tree/master/packages/prism-react-renderer/src/themes
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
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
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      options: {
        margin: 12,
        scrollOffset: 80,
        background: '#AABBCC00',
      },
    },
    // announcementBar: {
    //   id: 'firedbg-bar',
    //   content: 'This not announced yet 🥷🏻',
    //   isCloseable: false,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SeaQL/firedbg.sea-ql.org/edit/main/FireDBG/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // versions: {
          //   current: {
          //     label: `${getNextMinorVersionName()} 🚧`,
          //   },
          // },
        },
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
          editUrl: 'https://github.com/SeaQL/firedbg.sea-ql.org/edit/main/FireDBG/blog',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
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
  plugins: [
    'plugin-image-zoom',
  ],
  scripts: [
    '/firedbg.js',
  ],
};
