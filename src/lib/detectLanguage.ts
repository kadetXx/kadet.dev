/* Ported from v2's src/utils/detectLanguage.js. Prismic has no per-block
   language field, so posts mark code fences with a leading `//lang` comment
   that gets stripped before highlighting. */

const MARKERS = [
  "javascript",
  "typescript",
  "html",
  "css",
  "scss",
  "vue",
  "json",
] as const;

export const detectLanguage = (string: string) => {
  const marker = MARKERS.find((lang) => string.includes(`//${lang}`));

  if (!marker) {
    return { language: "javascript", string };
  }

  return {
    language: marker,
    string: string.replace(`//${marker} `, ""),
  };
};
