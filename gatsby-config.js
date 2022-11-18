module.exports = {
  siteMetadata: {
    title: "Nabeel Asghar",
    description: "This my personal website showcasing me.",
    author: "Nabeel Asghar",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-breakpoints",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Nabeel Asghar",
        short_name: "Nabeel",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
