const assert = require("assert");
const { getPeople } = require("./service.js");
const nock = require("nock");

describe("Suite de teste", function () {
  this.beforeAll(() => {
    nock("https://swapi.dev/api/people")
      .get("/?search=Luke&format=json")
      .reply(200, {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
          },
        ],
      });
  });
  it("teste 1", async () => {
    const expected = [
      {
        height: "172",
        name: "Luke Skywalker",
      },
    ];
    const actual = await getPeople("Luke");
    assert.deepEqual(actual, expected);
  });
});
