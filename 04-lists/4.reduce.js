import { getPeople } from "./service.js";

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    finalValue = callback(finalValue, element, this);
  }
  return finalValue;
};

const main = async () => {
  try {
    const { results } = await getPeople("a");
    const heights = results.map((item) => {
      return parseInt(item.height);
    });
    // const sum = heights.reduce((prev, current, index) => {
    //   console.log("Prev", prev);
    //   console.log("current", current);
    //   console.log("______________________");
    //   return prev + current;
    // }, 0);

    const sum = heights.myReduce((prev, current) => {
      return prev + current;
    }, 0);
    console.log(sum);
  } catch (error) {
    console.error("Deu ruim", error);
  }
};

main();
