module.exports = {
  siteMetadata: {
    title: `Weston Music School`,
    description: `Inquiries Welcome, You can learn Music! Children to adults are welcome.`,
    author: `Jonathan Cunanan <cunanan.jonathan1995@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        start_url: `/`,
        // icon: `src/images/gatsby-icon.png`
      },
    },
  ],
}
