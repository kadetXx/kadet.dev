import React from "react";

const Socials = () => {
  return (
    <div className="social_buttons">
      <a
        href="https://github.com/kadetXx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://twitter.com/kadetXx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      {/* <a
        href="https://www.linkedin.com/in/collins-enebeli-online/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a> */}
      <a
        href="mailto:hello@kadet.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-at"></i>
      </a>

      <div className="credits">
        <p>
          Inspired by
          <a
            href="https://sarahdayan.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sarah Dayan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Socials;
