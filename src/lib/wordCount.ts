/* Ported verbatim from v2's src/utils/wordCount.js -- 200 words per minute. */
export const getMins = (text: string) => {
  const words = text.split(" ").length;
  const count = Number(words) / 200;

  const [mins, secs] = count.toFixed(2).toString().split(".");

  return {
    mins: parseInt(mins, 10),
    secs: parseInt(secs, 10),
  };
};

export const readingTime = (text: string) => {
  const { mins } = getMins(text);
  return mins === 0 ? "1 min read" : `${mins} mins read`;
};
