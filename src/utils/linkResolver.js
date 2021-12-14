exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "blog_post": {
      return `/blog/${doc.uid}`;
    }

    default:
      return "/";
  }
};
