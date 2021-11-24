const path = require('path')
const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Baloise Design System',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#009ee7' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/images/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/swot.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/demo.css' }],
    ['script', { src: 'https://unpkg.com/ag-grid-community/dist/ag-grid-community.noStyle.js' }],
  ],

  dest: 'public',
  alias: {
    styles: path.resolve(__dirname, './styles'),
  },

  plugins: ['tabs'],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/baloise/design-system',
    logo: '/assets/images/baloise-dark.svg',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Design',
        link: '/design/',
      },
      {
        text: 'Components',
        link: '/components/',
      },
      {
        text: 'About Us',
        link: '/about-us/',
      },
      {
        text: 'Changelog',
        link: '/resources/changelog',
      },
    ],
    sidebar: {
      '/design/': [
        {
          title: 'Design',
          collapsable: false,
          children: ['colors', 'typography', 'spacing', 'icons'],
        },
        {
          title: 'Figma',
          collapsable: false,
          children: ['figma/getting-started'],
        },
      ],
      '/components/': [
        {
          title: 'Getting Started',
          path: '/components',
          collapsable: true,
          children: [
            {
              title: 'HTML5 / Server-Side-Rendering',
              collapsable: true,
              path: '/components/getting-started/html5/index',
              children: ['getting-started/html5/installation'],
            },
            {
              title: 'Angular',
              collapsable: true,
              path: '/components/getting-started/angular/index',
              children: [
                'getting-started/angular/installation',
                'getting-started/angular/usage',
                'getting-started/angular/ie11',
              ],
            },
            {
              title: 'Vue',
              collapsable: true,
              path: '/components/getting-started/vue/index',
              children: ['getting-started/vue/installation', 'getting-started/vue/usage'],
            },
            {
              title: 'React',
              collapsable: true,
              path: '/components/getting-started/react/index',
              children: ['getting-started/react/installation', 'getting-started/react/usage'],
            },
            {
              title: 'Theming',
              path: '/components/getting-started/theming',
            },
            {
              title: 'Testing',
              path: '/components/getting-started/testing',
            },
          ],
        },
        {
          title: 'Design Tokens',
          collapsable: true,
          children: ['foundation/colors', 'foundation/typography', 'foundation/spacing', 'foundation/breakpoints'],
        },
        {
          title: 'Foundation',
          collapsable: true,
          children: ['foundation/page-layout', 'foundation/grid', 'foundation/form', 'foundation/track-line'],
        },
        {
          title: 'Templates',
          collapsable: true,
          children: ['templates/contact-form', 'templates/portal', 'templates/stepper'],
        },
        {
          title: 'Components',
          collapsable: true,
          children: require('./generated/components.json'),
        },
        {
          title: 'Migration',
          collapsable: true,
          children: ['migration/migration-from-client-libs.md', 'migration/migration-from-1.x.md'],
        },
        {
          title: 'Contributing',
          collapsable: true,
          children: [
            'contributing/overview',
            'contributing/installation',
            'contributing/setup',
            'contributing/commands',
            'contributing/component',
            'contributing/controller',
            'contributing/testing',
            'contributing/release',
          ],
        },
      ],
      '/about-us/': [
        {
          title: 'About Us',
          collapsable: false,
          children: ['', 'architecture'],
        },
      ],
    },
  },
}
