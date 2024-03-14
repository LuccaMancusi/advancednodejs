const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

//Outra forma de obter os dados no JSON é dar um require no arquivo

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this.NAME_FILE = "heroes.json";
  }
  async getFileData() {
    const file = await readFileAsync(this.NAME_FILE, "utf8");
    return JSON.parse(file.toString());
  }
  async writeFile(data) {
    try {
      const result = await writeFileAsync(this.NAME_FILE, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }
  async register(hero) {
    const data = await this.getFileData();
    const id = hero.id <= 2 ? hero.id : new Date.now();
    const heroWithId = { id, ...hero };
    const finalData = [...data, heroWithId];
    const result = await this.writeFile(finalData);
    return result;
  }
  async list(id) {
    const data = await this.getFileData();
    const filteredData = data.filter((item) => {
      return id ? item.id === id : true;
    });
    return filteredData;
  }
  async removeHero(id) {
    if (!id) {
      return await this.writeFile([]);
    }
    const data = await this.getFileData();
    const index = data.findIndex((item) => item.id === parseInt(id));
    if (index === -1) {
      throw Error("Informed hero does not exist!");
    }
    data.splice(index, 1);
    return this.writeFile(data);
  }
}

module.exports = new Database();
