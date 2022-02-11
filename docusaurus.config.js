// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reservoir',
  tagline: 'NFT aggregator',
  url: 'https://reservoirprotocol.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/reservoir.png',
  organizationName: 'UnevenLabs', // Usually your GitHub org/user name.
  projectName: 'reservoir-docs', // Usually your repo name.

  plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'using-spec-url',
            specUrl: 'https://reservoir-metadata.vercel.app/api/yaml',
            routePath: '/api-reference/',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'reservoir',
        logo: {
          alt: 'Reservoir Logo',
          src: 'img/reservoir.svg',
        },
        items: [
          {
            to: '/docs/protocol/intro',
            label: 'Docs',
            position: 'left',
            className: 'persistent',
          },
          {
            to: '/docs/api/overview',
            label: 'API',
            position: 'left',
            className: 'persistent',
          },
          {
            href: 'https://github.com/reservoirprotocol',
            label: 'GitHub',
            position: 'left',
            className: 'persistent',
          },
          {
            to: 'https://reservoir.mirror.xyz/',
            label: 'Blog',
            position: 'left',
            className: 'persistent',
          },
          {
            to: 'https://discord.gg/j5K9fESNwh',
            label: 'Discord',
            position: 'left',
            className: 'persistent',
          },
          {
            to: 'https://docs.google.com/forms/d/e/1FAIpQLSdetWgU3dK_NWfIVvN0UpZjj85ifjQVUkRGOcssHwPAgzSzkw/viewform?usp=sf_link',
            label: 'Jobs',
            position: 'left',
            className: 'persistent',
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Docs',
                href: '/docs/protcol/intro',
              },
              {
                label: 'Github',
                href: 'https://github.com/reservoirprotocol/reservoir-docs',
              },
            ],
          },
          {
            title: 'Built on Reservoir',
            items: [
              {
                label: 'Levee',
                href: 'https://levee.bid/',
              },
              {
                label: 'Loot Exchange',
                href: 'https://www.loot.exchange/',
              },
              {
                label: 'Floor Finder',
                href: 'https://www.floorfinder.xyz/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/j5K9fESNwh',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/reservoir0x',
              },
              {
                label: 'Blog',
                href: 'https://reservoir.mirror.xyz/',
              },
            ],
          },
        ],
        // copyright: `unlicensed`,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,

        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: '\u{263D}',

          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '\u{263C}',
        },
      },
      prism: {
        additionalLanguages: ['solidity'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
