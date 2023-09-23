const order = (arr, str) => {
  if (str === "A") {
    return arr.sort();
  }
  if (str === "D") {
    return arr.sort().reverse();
  }
};

export default { order };
