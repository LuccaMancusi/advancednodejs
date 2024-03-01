import { getPeople } from "./service.js";

Array.prototype.myFilter = function (callback) {
  const response = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (callback(element, index, this)) {
      response.push(element);
    }
  }
  return response;
};

const main = async () => {
  try {
    const { results } = await getPeople("a");
    // const larsFamily = results.filter((item) => {
    //     return item.name.toLowerCase().indexOf("lars") !== -1;
    //   });
    const larsFamily = results.myFilter((item, index, list) => {
      console.log(`index: ${index}, item: ${item.name}`);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });
    console.log(
      larsFamily.map((item) => {
        return item.name;
      })
    );
  } catch (error) {
    console.error(error);
  }
};

main();
