module.exports = {
  pathPrefix: `/gatsby-demo`,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`
        ]
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet'
  ]
}
