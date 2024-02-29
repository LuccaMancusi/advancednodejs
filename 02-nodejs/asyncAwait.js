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
    }, 2000);
  });
}

async function main() {
  //Neste tipo de abordagem é muito comum usarmos o try catch
  try {
    //Conseguimos mensurar o tempo de execução com o console.time e console.timeEnd
    console.time("promise");
    const user = await getUser();
    // const phone = await getPhone(user.id);
    // const address = await getAddress(user.id);

    //Neste caso o telefone e o endereço só dependem de usuário
    //Então conseguimos rodar em paralelo sem um ter que esperar o outro
    const result = await Promise.all([getPhone(user.id), getAddress(user.id)]);

    const phone = result[0];
    const address = result[1];

    console.timeEnd("promise");

    console.log(`
        Name: ${user.name},
        Phone: (${phone.ddd}) ${phone.phone},
        Address: ${address.street}, ${address.number}
    `);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}

main();
