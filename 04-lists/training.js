import { getPeople } from "./service.js";

Array.prototype.myMap = function (callback) {
  const finalValue = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    const callbackValue = callback(element, index, this);
    finalValue.push(callbackValue);
  }
  return finalValue;
};

Array.prototype.myFilter = function (callback) {
  const newfilteredArray = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (callback(element, index, this)) {
      newfilteredArray.push(element);
    }
  }
  return newfilteredArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue === undefined ? this[0] : initialValue;

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    finalValue = callback(finalValue, element, index, this);
  }
  return finalValue;
};

const getNames = (peopleArray) => {
  const names = peopleArray.myMap((item, index) => {
    return item.name;
  });
  return names;
};

const getHeights = (peopleArray) => {
  const heights = peopleArray.myMap((people) => {
    return people.height;
  });
  return heights;
};

const getSkywalkers = (names) => {
  return names.myFilter((name, index, list) => {
    return name.toLowerCase().indexOf("skywalker") > -1;
  });
};

const sumHeights = (heights) => {
  const sum = heights.myReduce((acc, current, index, list) => {
    console.log("acc", acc);
    console.log("current", current);
    return acc + parseInt(current);
  }, 0);
  return sum;
};

(async function main() {
  const { results } = await getPeople("a");
  const names = getNames(results);
  const heights = getHeights(results);
  const skywalkers = getSkywalkers(names);
  const heightsSum = sumHeights(heights);
  console.log(heightsSum);
})();
