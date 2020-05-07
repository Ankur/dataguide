const config = {
  gatsby: {
    pathPrefix: '',
    siteUrl: '', // replace with correct site
  },
  header: {
    logoLink: '', // replace with correct site
    title: 'How To Data',
    // check all links
    links: [
      // { name: 'Docs', link: 'https://www.nexusjs.org/docs' },
      // { name: 'Quickstart', link: 'https://www.prisma.io/docs/getting-started/quickstart' },
      // {
      //   name: 'Reference',
      //   link: 'https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/api',
      // },
      // { name: 'Blog', link: 'https://www.prisma.io/blog/' },
      // { name: 'Community', link: 'https://www.prisma.io/community/' },
      // { name: 'FAQ', link: 'https://www.prisma.io/docs/more/faq' },
    ],
    search: {
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
    },
  },
  siteMetadata: {
    title: 'How To Data - title',
    description: 'How To Data - desc',
    keywords: 'Docs, How To Data, 1.0',
    docsLocation: 'https://github.com/prisma/how-to-data-docs/tree/master/content',
    twitter: {
      site: '@howtodata',
      creator: '@howtodata',
      image: '/social/docs-social.png',
    },
    og: {
      site_name: 'How To Data',
      type: 'website',
      image: {
        alt: 'How To Data',
        height: '630',
        type: 'image/png',
        url: '/social/docs-social.png', //replace social image
        width: '1200',
      },
    },
  },
  feedback: {
    function_name: '*/.netlify/functions/index', // Replace with correct one
  },
  footer: {
    logoLink: '/',
    title: 'Prisma',
    products: [
      {
        name: 'Prisma Client',
        link: 'https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud',
      },
      { name: 'Prisma 1 Cloud', link: 'https://app.prisma.io/login' },
      // { name: 'Nexus', link: 'https://www.nexusjs.org/' },
      // { name: 'Prisma Admin', link: '/' },
      // { name: 'Prisma Enterprise', link: '/' },
    ],
    community: [
      { name: 'Meet the community', link: 'https://www.prisma.io/community' },
      { name: 'Slack', link: 'https://slack.prisma.io/' },
      { name: 'Github', link: 'https://github.com/prisma' },
      { name: 'Discussions', link: 'https://github.com/prisma/prisma/discussions' },
      { name: 'GraphQL Meetup', link: 'https://www.meetup.com/graphql-berlin/' },
      { name: 'TypeScript Meetup', link: 'https://www.meetup.com/TypeScript-Berlin/' },
    ],
    resources: [
      { name: 'Docs', link: '/' },

      { name: 'Get started', link: 'https://www.prisma.io/docs/getting-started/quickstart' },

      {
        name: 'API Reference',
        link:
          'https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client',
      },
      { name: 'Examples', link: 'https://github.com/prisma/prisma-examples' },
      { name: 'How to GraphQL', link: 'https://www.howtographql.com/' },
      { name: 'PostgreSQL Tutorial', link: 'https://www.prisma.io/tutorials/?tag=postgresql' },
    ],
    company: [
      { name: 'About', link: 'https://www.prisma.io/about' },
      { name: 'Jobs', link: 'https://www.prisma.io/jobs' },
      { name: 'Blog', link: 'https://www.prisma.io/blog/' },
      {
        name: 'Terms & Privacy',
        link: 'https://gist.github.com/nikolasburk/c0f34b0cc50d3403e2e0d40c0e6510aa',
      },
    ],
    newsletter: {
      text: 'Stay up to date with the latest features and changes to Prisma',
    },
    findus: {
      twitterLink: 'https://twitter.com/prisma',
      youtubeLink: 'https://www.youtube.com/channel/UCptAHlN1gdwD89tFM3ENb6w',
      fbLink: 'https://www.facebook.com/prisma.io',
      slackLink: 'https://slack.prisma.io/',
      gitLink: 'https://github.com/prisma',
    },
  },
}

module.exports = config