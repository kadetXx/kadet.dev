import React, { useRef, useLayoutEffect } from "react";
import "./Cursor.css";

const Cursor = ({ children }) => {
  const cursor = useRef(null);

  useLayoutEffect(() => {
    console.log("waddup btch");
  }, []);
  return (
    <>
      <div ref={cursor} className="custom-cursor"></div>
      {children}
    </>
  );
};

export default Cursor;
