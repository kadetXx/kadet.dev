"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/common";
import { detectLanguage } from "@/lib/detectLanguage";
import "highlight.js/styles/base16/vulcan.css";

/* Replicates v2's postTemplate useEffect: strip the //lang marker off each
   code block, highlight it, and prepend a copy button. Two differences from
   the original -- it scopes the query to this article instead of the whole
   document, and it falls back to plaintext for languages highlight.js does
   not know (the old code passed `vue` straight through, which throws). */

const PostBody = ({ html }: { html: string }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    root.querySelectorAll("pre").forEach((el) => {
      if (el.dataset.enhanced === "true") return;
      el.dataset.enhanced = "true";

      const { language, string } = detectLanguage(el.innerText);
      const safe = hljs.getLanguage(language) ? language : "plaintext";

      el.innerHTML = `<code>${
        hljs.highlight(string, { language: safe }).value
      }</code>`;

      const button = document.createElement("button");
      button.type = "button";
      button.innerText = "Copy";
      button.classList.add("copy-code");
      button.addEventListener("click", () => {
        navigator.clipboard.writeText(string);
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      });

      el.prepend(button);
    });
  }, [html]);

  return (
    <section
      ref={ref}
      className="post-content"
      itemProp="articleBody"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default PostBody;
