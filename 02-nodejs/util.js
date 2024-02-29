const util = require("util");

//Com este módulo interno posso transformar funções escritas com callbacks em promises

const getUser = (callback) => {
  setTimeout(() => {
    return callback(null, {
      name: "Lucca",
      age: 25,
    });
  }, 3000);
};

const sayHello = (error, user) => {
  console.log(`Seja bem vindo, ${user.name}`);
};

const getUserPromisefyed = util.promisify(getUser);

getUserPromisefyed().then((result) => {
  console.log(`Seja bem vindo ${result.name}`);
});
