module.exports = {
  siteMetadata: {
    title: `Bad Access Memories`,
    author: `Francisco Amado`,
    description: `A place for technical mumblings.`,
    siteUrl: `https://franciscoamado.me/`,
    social: {
      github: `FranciscoAmado`,
      linkedin: `franciscoamado`,
      twitter: `franciscosamado`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/resume`,
        name: `resume`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-vscode`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-76695221-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bad Access Memories`,
        short_name: `Bad Access`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#323232`,
        display: `minimal-ui`,
        // edit below
        // icon: `static/assets/favicon.png`,
        legacy: false, // this will not add apple-touch-icon links to <head>
        cache_busting_mode: `none`,
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
