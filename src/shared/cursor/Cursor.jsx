import React, { useRef, useEffect } from "react";
import "./Cursor.css";

const Cursor = ({ children }) => {
  const cursorRef = useRef(null);
  const cursorIIRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorII = cursorIIRef.current;
    // const allHoverLinks = document.querySelectorAll(".hover-effect");

    // trailing cursor function
    const trail = (ev) => {
      cursor.setAttribute(
        "style",
        `transform: translate3d(${ev.pageX - 10}px, ${ev.pageY - 10}px, 0px)`
      );

      cursorII.setAttribute(
        "style",
        `transform: translate3d(${ev.pageX - 3}px, ${ev.pageY - 3}px, 0px)`
      );
    };

    // add event listener to activate trailing function
    document.addEventListener("mousemove", trail);

    // // funtion to highlight item
    // const highlight = () => {
    //   cursor.classList.add("hover-mode");
    //   cursorII.classList.add("hover-mode");
    // };

    // const removeHighlight = () => {
    //   cursor.classList.remove("hover-mode");
    //   cursorII.classList.remove("hover-mode");
    // };

    // // add event listener for hover effects
    // allHoverLinks.forEach((item) => {
    //   item.addEventListener("mouseenter", highlight);
    //   item.addEventListener("mouseleave", removeHighlight);
    // });

    return () => document.removeEventListener("mousemove", trail);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorIIRef} className="custom-cursor-ii"></div>
      {children}
    </>
  );
};

export default Cursor;
