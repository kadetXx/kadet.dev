import React, { useRef, useEffect } from "react";
import "./Cursor.css";

const Cursor = ({ children, location }) => {
  const cursorRef = useRef(null);
  const cursorIIRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorII = cursorIIRef.current;

    const path = location.pathname;
    const isBlog = /\/blog\/\S*/gm.test(path)

    // trailing cursor function
    const trail = (ev) => {
      if (isBlog) {
        cursor.setAttribute("style", `display: none`);
        cursorII.setAttribute("style", `display: none`);
      } else {
        cursor.setAttribute(
          "style",
          `transform: translate3d(${ev.pageX - 10}px, ${ev.pageY - 10}px, 0px)`
        );

        cursorII.setAttribute(
          "style",
          `transform: translate3d(${ev.pageX - 3}px, ${ev.pageY - 3}px, 0px)`
        );
      }
    };

    // add event listener to activate trailing function
    document.addEventListener("mousemove", trail);

    return () => document.removeEventListener("mousemove", trail);
  }, [location]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorIIRef} className="custom-cursor-ii"></div>
      {children}
    </>
  );
};

export default Cursor;
