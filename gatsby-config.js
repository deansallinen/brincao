const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Brincao',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `brincaocreche`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brincao',
        short_name: 'Brincao',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#97c12c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
