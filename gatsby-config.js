module.exports = {
  siteMetadata: {
    title: "Kadet - Collins Enebeli",
    description: `Frontend Software Developer/Engineer`,
    author: `@kadetXx`,
    keywords: `frontend developer, frontend engineer, tech, nigeria, software, software developer, portfolio, frontend developer portfolio`,
    siteUrl: 'https://kadet.dev'
  },
  plugins: [
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
        display: "fullscreen",
        background_color: "#000000",
        theme_color: "#000000",
        icon: "src/assets/images/kadet_shaped.png",
        icons: [ // manually, so they go to static folder:
          {
            src: `/static/icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-310x310.png`,
            sizes: `310x310`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ]
      },
    },
    "gatsby-plugin-offline",
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
