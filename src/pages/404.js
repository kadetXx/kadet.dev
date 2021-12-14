import * as React from "react";

import Error from "../components/error404/Error";
import Seo from '../shared/seo/Seo'

import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

// markup
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Seo title="404" />
      <Error />
    </React.Fragment>
  );
};

export default withPrismicUnpublishedPreview(NotFoundPage)
