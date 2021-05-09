module.exports = {
  siteMetadata: {
    title: "Kadet - Collins Enebeli",
    description: `Frontend Software Developer/Engineer`,
    author: `@kadetXx`,
    keywords: `frontend developer, frontend engineer, tech, nigeria, software, software developer, portfolio, frontend developer portfolio`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-132828013-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kadet",
        short_name: "kadet",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        icon: "src/assets/images/kadet_shaped.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
