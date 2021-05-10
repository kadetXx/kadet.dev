import * as React from "react";

import Error from "../components/error404/Error";
import Seo from '../shared/seo/Seo'

// markup
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Seo title="404" />
      <Error />
    </React.Fragment>
  );
};

export default NotFoundPage;
