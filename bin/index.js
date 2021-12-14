// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   const createSlug = () => {
//     const slug = node.data.title[0].text
//       .toLowerCase()
//       .replace(/ /g, "-")
//       .replace(/[^\w-]+/g, "");

//     return slug;
//   };

//   if (node.internal.type === `PrismicBlogPost`) {
//     const value = createSlug();
//     console.log(">>>>>>>>>>>>>>>>>>>>>>createslug for post", value);

//     createNodeField({
//       node,
//       name: `slug`,
//       value: `/blog/${value}/`,
//     });
//   }
// };

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }
//     type Author {
//       name: String
//       summary: String
//     }
//     type Social {
//       twitter: String
//     }
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }
//     type PrismicBlogPost implements Node {
//       fields: Fields
//     }
//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }
//     type Fields {
//       slug: String
//     }
//   `);
// };

// allMarkdownRemark(
//   sort: { fields: [frontmatter___date], order: ASC }
//   limit: 1000
// ) {
//   nodes {
//     id
//     fields {
//       slug
//     }
//   }
// }



// {
//   site {
//     siteMetadata {
//       title
//     }
//   }
//   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//     nodes {
//       excerpt
//       wordCount {
//         words
//       }
//       fields {
//         slug
//       }
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// }

// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       wordCount {
//         words
//       }
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//         tags
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

    // // funtion to highlight item
    // const highlight = () => {
    //   cursor.classList.add("hover-mode");
    //   cursorII.classList.add("hover-mode");
    // };

    // const removeHighlight = () => {
    //   cursor.classList.remove("hover-mode");
    //   cursorII.classList.remove("hover-mode");
    // };

    // // add event listener for hover effects
    // allHoverLinks.forEach((item) => {
    //   item.addEventListener("mouseenter", highlight);
    //   item.addEventListener("mouseleave", removeHighlight);
    // });