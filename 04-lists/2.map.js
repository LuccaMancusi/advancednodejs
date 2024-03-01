import { getPeople } from "./service.js";

//Criando meu próprio map
Array.prototype.myMap = function (callback) {
  const newMapedArray = [];
  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index);
    newMapedArray.push(result);
  }
  return newMapedArray;
};

const main = async () => {
  try {
    const result = await getPeople("a");
    // map default
    // const names = result.results.map((item) => {
    //   return item.name;
    // });

    const names = result.results.myMap((people, index) => {
      return `[${index}] ${people.name}`;
    });
    console.log(names);
  } catch (error) {
    console.log("Error", error);
  }
};

main();
