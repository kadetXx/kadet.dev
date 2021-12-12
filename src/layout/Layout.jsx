import React from "react";
import "./Layout.css";
import Seo from "../shared/seo/Seo";
import Bio from "../shared/bio/Bio";
import Header from "../shared/header/Header";
import Socials from "../shared/socials/Socials";

const Layout = ({ children, title, active, home, article }) => {
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <Seo title={title ? title : null} />

      <div
        className={`layout ${article && "layout_article"}`}
        id={home ? "layout_full" : ""}
      >
        <div className="mobile_container">
          <Header />
          <div id="mobile">{home ? <Bio /> : children}</div>
          <Socials />
        </div>

        <div className="container">
          <div className="fixed">
            <Bio active={active} />
          </div>

          <div className="main">
            <div className="pages_container">{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
