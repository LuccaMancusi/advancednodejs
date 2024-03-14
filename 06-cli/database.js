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
    await writeFileAsync(this.NAME_FILE, JSON.stringify(data));
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
}

module.exports = new Database();
