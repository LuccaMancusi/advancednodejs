const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const eventName = "user:click";

//Aqui temos um observador
//Toda vez que acontecer alguma alteração com esse evento ele vai dar o console.log
myEmitter.on(eventName, (click) => {
  console.log("Um usuário clicou", click);
});

// myEmitter.emit(eventName, "na barra de rolagem");
// myEmitter.emit(eventName, "no OK");

// let count = 0;

// setInterval(() => {
//   myEmitter.emit(eventName, "no OK" + count++);
// }, 1000);

const stdin = process.openStdin();

stdin.addListener("data", (value) => {
  console.log(`Você digitou: ${value.toString().trim()}`);
});
