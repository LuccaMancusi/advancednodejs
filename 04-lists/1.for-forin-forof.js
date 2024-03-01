import { getPeople } from "./service.js";

const main = async () => {
  try {
    const result = await getPeople("a");
    const people = [];
    console.time("for");
    //for normal
    for (let index = 0; index < result.results.length; index++) {
      const element = result.results[index];
      people.push(element.name);
    }
    console.timeEnd("for");
    //for in - Pega o indice do array
    console.time("forin");

    for (let index in result.results) {
      people.push(result.results[index].name);
    }
    console.timeEnd("forin");
    console.time("forof");

    for (const item of result.results) {
      people.push(item.name);
    }
    console.timeEnd("forof");
  } catch (error) {
    console.error(error);
  }
};

//Com esse código percebemos que o for in e for of é mais performatico do que o for

main();
