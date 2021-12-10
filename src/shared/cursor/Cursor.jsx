import React, { useRef, useEffect } from "react";
import "./Cursor.css";

const Cursor = ({ children }) => {
  const cursorRef = useRef(null);
  const cursorIIRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorII = cursorIIRef.current;

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

    document.addEventListener("mousemove", trail);
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
