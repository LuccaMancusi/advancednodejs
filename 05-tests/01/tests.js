const assert = require("assert");
const { getPeople } = require("./service.js");
const nock = require("nock");

//describe declara a suite de teste e o it declara o teste propriamente dito

describe("Star wars tests", function () {
  //O before all vai rodar antes de todos os testes
  this.beforeAll(() => {
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "R2-D2",
          height: "96",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, blue",
          eye_color: "red",
          birth_year: "33BBY",
          gender: "n/a",
          homeworld: "https://swapi.co/api/planets/8/",
          vehicles: [],
          starships: [],
          created: "2014-12-10T15:11:50.376000Z",
          edited: "2014-12-20T21:17:50.311000Z",
          url: "https://swapi.co/api/people/3/",
        },
      ],
    };
    //Nock serve para criar mocks de api
    //Sempre que eu chamar esse endpoint nos testes vou receber essa resposta que setei
    nock("https://swapi.dev/api/people")
      .get("/?search=r2-d2&format=json")
      .reply(200, response);
  });
  it("Must search r2d2 with the right format", async () => {
    const expected = [{ name: "R2-D2", height: 96 }];
    const baseName = "r2-d2";
    const result = await getPeople(baseName);
    assert.deepEqual(expected, result);
  });
});
