import React, { useState } from "react";
import "./Layout.css";
import Seo from "../shared/seo/Seo";
import Bio from "../shared/bio/Bio";
import Header from "../shared/header/Header";
import Posts from "../components/blog/Blog";

const Layout = ({ children, title, active, home, article, posts }) => {
  const [activeTab, setActiveTab] = useState("work");

  const currentActive = home ? activeTab : active;

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

      {!article && <Seo title={title ? title : null} />}

      <div
        className={`layout ${article && "layout_article"}`}
        id={home ? "layout_full" : ""}
      >
        <div className="container">
          <div className="mobile_header_wrap">
            <Header />
          </div>

          <div className="fixed">
            <Bio active={currentActive} onTabChange={home ? setActiveTab : null} />
          </div>

          <div className="main">
            <div className="pages_container">
              {home && posts ? (
                <>
                  {/* both stay mounted and just toggle visibility -- switching
                      used to fully unmount one side and mount the other,
                      rebuilding the whole post/project list from scratch on
                      every tap, which is what made repeated switching get
                      progressively laggier */}
                  <div hidden={activeTab !== "work"}>{children}</div>
                  <div hidden={activeTab === "work"}>
                    <Posts posts={posts} />
                  </div>
                </>
              ) : (
                children
              )}
              <div className="mobile_footer_links">
                <a href="https://github.com/kadetXx" target="_blank" rel="noopener noreferrer">
                  Github <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/collinsenebeli/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="mailto:hello@kadet.dev" target="_blank" rel="noopener noreferrer">
                  Email <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
