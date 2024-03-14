const { deepEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_REGISTER = { name: "Flash", power: "Speed", id: 1 };

describe("Suite de manipulação de herois", () => {
  it("Should search a hero by id", async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const [result] = await database.list(expected.id);
    deepEqual(result, expected);
  });

  it("Deve cadastrar herói usando arquivos", async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const result = await database.register(DEFAULT_ITEM_REGISTER);
    const [actual] = await database.list(DEFAULT_ITEM_REGISTER.id);
    ok(actual, expected);
  });
});
