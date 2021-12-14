import React, { useRef, useEffect } from "react";
import "./Cursor.css";

const Cursor = ({ children }) => {
  // const cursorRef = useRef(null);
  const cursorIIRef = useRef(null);

  useEffect(() => {
    // const cursor = cursorRef.current;
    // const path = location.pathname;
    // const isBlog = /\/blog\/\S*/gm.test(path)
    const cursorII = cursorIIRef.current;

    const removeMouse = () => {
      cursorII.setAttribute("style", `display: none`);
    };

    // trailing cursor function
    const trail = (ev) => {
      // if (isBlog) {
      //   // cursor.setAttribute("style", `display: none`);
      //   cursorII.setAttribute("style", `display: none`);
      // } else {
      // cursor.setAttribute(
      //   "style",
      //   `transform: translate3d(${ev.pageX - 10}px, ${ev.pageY - 10}px, 0px)`
      // );

      cursorII.setAttribute(
        "style",
        `transform: translate3d(${ev.pageX - 3}px, ${ev.pageY - 3}px, 0px)`
      );
      // }
    };

    // add event listener to activate trailing function

    document.addEventListener("mousemove", trail);
    // remove mouse when cursor leaves
    document.addEventListener("mouseleave", removeMouse);

    return () => {
      document.removeEventListener("mousemove", trail);
      document.removeEventListener("mouseleave", removeMouse);
    }
  }, []);

  return (
    <>
      {/* <div ref={cursorRef} className="custom-cursor"></div> */}
      <div ref={cursorIIRef} className="custom-cursor-ii"></div>
      {children}
    </>
  );
};

export default Cursor;
