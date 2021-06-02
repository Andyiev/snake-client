//const net = require("net");
const connect = require("./client")
const conn = connect();
// setup interface to handle user input from stdin
const handleUserInput = function(key) {
  if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 'd') {
      conn.write("Move: right");
  } else if (key === '\u0003') {
    process.exit(); // your code here
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
console.log("Connecting ...");
setupInput();
