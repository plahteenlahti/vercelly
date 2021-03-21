module.exports = {
  siteMetadata: {
    title: `Vercelly`,
    description: `Vercelly: Manage your Vercel projects and deployments on the go. An app designed and built for iOS and Android by Perttu Lähteenlahti`,
    author: `@plahteenlahti`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `changelog`,
        path: `${__dirname}/src/changelog`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-well-known`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112021087-8",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vercelly`,
        short_name: `Vercelly`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gradient.png`,
        prefer_related_applications: true,
        related_applications: [
          {
            platform: "play",
            url:
              "https://play.google.com/store/apps/details?id=deploy.nyxo.app",
            id: "deploy.nyxo.app",
          },
        ],
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
  ],
}
