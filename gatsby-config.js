module.exports = {
  siteMetadata: {
    siteUrl: `https://codebase.studio`,
    title: "Codebase - Flutter Cross-Development Studio",
    titleTemplate: "%s · Codebase Studio",
    author: "Codebase",
    image: "../assets/images/codebase_logo_black.png",
    defaultImage: "../assets/images/codebase_logo_black.png",
    url: "https://codebase.studio",
    description: "We can build your app on all major platforms with one codebase in record time. Get a free quote."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141693263-1",
        head: true,
      },
      
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/codebase_logo_black.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
      },
    },
  ],
}
