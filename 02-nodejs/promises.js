function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve({
        id: 1,
        name: "Lucca",
        birthDate: new Date(),
      });
    }, 3000);
  });
}
// Por padrão o callback é sempre o último parâmetro
function getPhone(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve({
        phone: "912912",
        ddd: 11,
      });
    }, 2000);
  });
}

function getAddress(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve({
        street: "Vitorino carmilo",
        number: 533,
      });
    }, 3000);
  });
}

getUser().then((user) => {
  console.log("User", user);
  getPhone(user.id)
    .then((phone) => {
      console.log("Phone", phone);
      return user.id;
    })
    .then((id) => {
      getAddress(id).then((address) => {
        console.log("Address", address);
      });
    });
});
