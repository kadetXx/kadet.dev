import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, title, isArticle, url, thumbnail }) {
  const thumb =
    thumbnail?.url ||
    `https://sites.google.com/site/kadnavcdn/home/IMG_20201108_005324%20%281%29.jpg?attredirects=0&d=1`;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  );

  const keywords = site.siteMetadata.keywords;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={
        title
          ? `%s | ${!isArticle ? defaultTitle : "Kadet Blog"}`
          : defaultTitle
      }
      meta={[
        {
          name: `description`,
          content: description || metaDescription,
        },
        {
          name: `theme-color`,
          content: `#000000`,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1 maximum-scale=1`,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: description || metaDescription,
        },
        {
          property: `og:type`,
          content: isArticle ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: url || `http://kadet.dev`,
        },
        {
          property: `og:image`,
          content: thumb,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author?.name || ``,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: description || metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Seo;
