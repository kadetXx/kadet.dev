import "./src/css/global.css";

import React from "react";
import CustomCursor from "./src/shared/cursor/Cursor";

export const wrapPageElement = ({ element, props }) => {
  return <CustomCursor {...props}>{element}</CustomCursor>;
};
