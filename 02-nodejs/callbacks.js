function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: "Lucca",
      birthDate: new Date(),
    });
  }, 3000);
}
// Por padrão o callback é sempre o último parâmetro
function getPhone(userId, callback) {
  setTimeout(function () {
    return callback(null, {
      phone: "912912",
      ddd: 11,
    });
  }, 2000);
}

function getAddress(userId, callback) {
  setTimeout(function () {
    return callback(null, {
      street: "Vitorino carmilo",
      number: 533,
    });
  }, 3000);
}
//Resolução com callback

//Por padrão o erro é o primeiro parâmetro do callback
getUser(function (error, user) {
  console.log("User", user);
  if (error) {
    console.error("Falha em buscar usuário", error);
    return;
  }

  getPhone(user.id, function (error1, phone) {
    console.log("Phone", phone);
    if (error1) {
      console.error("Falha em buscar telefone", error1);
      return;
    }
    getAddress(user.id, function (error2, address) {
      console.log("Address", address);
      if (error2) {
        console.error("Falha em buscar endereço", error2);
        return;
      }
    });
  });
});
