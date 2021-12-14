export const getMins = (text) => {
  const words = text.split(" ").length
  const count = Number(words) / 200;

  const [mins, secs] = count.toFixed(2).toString().split(".");

  return {
    mins: parseInt(mins),
    secs: parseInt(secs),
  };
};