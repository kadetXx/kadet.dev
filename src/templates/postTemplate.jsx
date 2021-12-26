import React, { useEffect } from "react";
import "./postTemplate.css";
import { graphql, Link } from "gatsby";

import Layout from "../layout/Layout";
import Seo from "../shared/seo/Seo";

import { getMins } from "../utils/wordCount";
import { detectLanguage } from "../utils/detectLanguage";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import hljs from "highlight.js";
import "highlight.js/styles/base16/vulcan.css";

const PostTemplate = ({ data: postData }) => {
  const { date, tags, url, data } = postData.current;
  const { title, description, content, thumbnail } = data;
  const { mins } = getMins(content.text);

  // previous and next posts
  const { url: prevUrl, data: prevData } = postData.previous || {};
  const { url: nextUrl, data: nextData } = postData.next || {};

  useEffect(() => {
    document.querySelectorAll("pre").forEach((el) => {
      const { language, string } = detectLanguage(el.innerText);

      // create copy button
      const button = document.createElement("button");
      button.innerText = "Copy";
      button.classList.add("copy-code");
      button.onclick = () => {
        navigator.clipboard.writeText(string);
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      };

      // then highlight each
      el.innerHTML = `<code>${
        hljs.highlight(string, {
          language,
        }).value
      }</code>`;

      el.prepend(button);
    });
  }, [data]);

  return (
    <Layout active="blog" title={title} article>
      <Seo
        title={title.text}
        description={description.text}
        isArticle
        url={`http://kadet.dev${url}`}
        thumbnail={thumbnail?.fixed}
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
            strokeWidth="2"
            strokeMiterlimit="0"
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

export default withPrismicPreview(PostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    current: prismicBlogPost(id: { eq: $id }) {
      _previewable
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
        thumbnail {
          fixed(quality: 100) {
            src
          }
        }
        content {
          html
          text
        }
      }
    }
    previous: prismicBlogPost(id: { eq: $previousPostId }) {
      url
      data {
        title {
          text
        }
      }
    }
    next: prismicBlogPost(id: { eq: $nextPostId }) {
      url
      data {
        title {
          text
        }
      }
    }
  }
`;
