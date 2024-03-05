const { get } = require("axios");

const URL = "https://swapi.dev/api/people";

const getPeople = async (name) => {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await get(url);
  return response.data.results.map(mapPeople);
};

const mapPeople = (item) => {
  return { name: item.name, height: item.height };
};

module.exports = { getPeople };
