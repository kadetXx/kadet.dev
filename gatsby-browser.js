import "./src/css/global.css";

import React from "react";
import CustomCursor from "./src/shared/cursor/Cursor";

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { repositoryConfig } from "./src/utils/previewConfig";

export const onClientEntry = () => {
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  window.Cal("init", {origin:"https://app.cal.com"});
  window.Cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#1b1b1d"}},"hideEventTypeDetails":false,"layout":"month_view"});
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <PrismicPreviewProvider repositoryConfigs={repositoryConfig}>
      <CustomCursor {...props}>{element}</CustomCursor>
    </PrismicPreviewProvider>
  );
};
