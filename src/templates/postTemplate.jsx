import React from "react";
import "./postTemplate.css";
import { graphql, Link } from "gatsby";

import Layout from "../layout/Layout";
import Seo from "../shared/seo/Seo";

import { getMins } from '../utils/wordCount'

const PostTemplate = ({ data: postData }) => {
  const { date, tags, url, data } = postData.current.nodes[0];
  const { title, description, content } =  data;
  const { mins } = getMins(content.text);

  // previous and next posts
  const { url: prevUrl, data: prevData } = postData.previous.nodes[0] || {};
  const { url: nextUrl, data: nextData } = postData.next.nodes[0] || {};

  return (
    <Layout active="blog" title={title} article>
      <Seo
        title={title.text}
        description={description.text}
        isArticle
        url={`http://kadet.dev${url}`}
      />

      <Link to="/blog" className="back-button">
        <svg
          width="35"
          height="22"
          viewBox="0 0 72 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#b3b3b3"
            stroke-width="2"
            stroke-miterlimit="0"
            d="M72.807 11.199H2.093M11.933 1.399l-9.8 9.8 9.8 9.8"
          ></path>
        </svg>
      </Link>
      
      <div className="post-meta">
        <small className="post-timing">
          <i className="far fa-calendar-alt"></i> {date}
        </small>
        <small className="post-timing">
          <i className="far fa-clock"></i>{" "}
          {mins === 0 ? `1 min` : `${mins} mins`} read
        </small>
        <h1 className="post-title">{title.text}</h1>
        <small className="post-tags">
          {tags.map((tag, index) =>
            index === tags.length - 1 ? tag : `${tag}, `
          )}
        </small>
      </div>

      <section
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content.html }}
        itemProp="articleBody"
      />

      <div className="post-footer">
        {prevData && (
          <Link to={prevUrl} className="posts-nav post-pre">
            <small>
              {" "}
              <i className="fas fa-long-arrow-alt-left"></i> PREV POST
            </small>

            <p>{prevData.title.text}</p>
          </Link>
        )}

        {nextData && (
          <Link to={nextUrl} className="posts-nav post-next">
            <small>
              NEXT POST <i className="fas fa-long-arrow-alt-right"></i>
            </small>

            <p>{nextData.title.text}</p>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    current: allPrismicBlogPost(filter: { id: { eq: $id } }) {
      nodes {
        tags
        url
        date: first_publication_date(formatString: "MMMM DD, YYYY")
        data {
          title {
            text
          }
          description {
            text
          }
          content {
            html
            text
          }
        }
      }
    }
    previous: allPrismicBlogPost(filter: { id: { eq: $previousPostId } }) {
      nodes {
        url
        data {
          title {
            text
          }
        }
      }
    }
    next: allPrismicBlogPost(filter: { id: { eq: $nextPostId } }) {
      nodes {
        url
        data {
          title {
            text
          }
        }
      }
    }
  }
`;

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