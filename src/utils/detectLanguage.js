export const detectLanguage = (string) => {
  const isJavascript = string.includes("//javascript");
  const isTypescript = string.includes("//typescript");
  const isHtml = string.includes("//html");
  const isCss = string.includes("//css");
  const isScss = string.includes("//scss");
  const isVue = string.includes("//vue");
  const isJson = string.includes("//json");

  if (isJavascript) {
    return {
      language: "javascript",
      string: string.replace("//javascript ", ""),
    };
  } else if (isTypescript) {
    return {
      language: "typescript",
      string: string.replace("//typescript ", ""),
    };
  } else if (isHtml) {
    return {
      language: "html",
      string: string.replace("//html ", ""),
    };
  } else if (isCss) {
    return {
      language: "css",
      string: string.replace("//css ", ""),
    };
  } else if (isScss) {
    return {
      language: "scss",
      string: string.replace("//scss ", ""),
    };
  } else if (isVue) {
    return {
      language: "vue",
      string: string.replace("//vue ", ""),
    };
  } else if (isJson) {
    return {
      language: "json",
      string: string.replace("//json ", ""),
    };
  }
};
