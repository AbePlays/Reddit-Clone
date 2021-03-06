export const kFormatter = (num) => {
  if (typeof num === "number") {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  } else {
    return "-";
  }
};

export { default as Wrapper } from "./Wrapper";
