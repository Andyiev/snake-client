const connect = require("./client");
const conn = connect();

// setup interface to handle user input from stdin
const handleUserInput = function(key) {
  if (key === 'w') {
    console.log("W - move up");
    conn.write("Move: up");
  } else if (key === 's') {
    console.log("S - move down");
    conn.write("Move: down");
  } else if (key === 'a') {
    console.log("A - move left");
    conn.write("Move: left");
  } else if (key === 'd') {
    console.log("D - move right");
      conn.write("Move: right");
  } else if (key === 'm') {
      console.log("m = is message to all - Hi!");
        conn.write("Say: Hi!");
  } else if (key === '\u0003') {
    console.log("Exit");
    process.exit();
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

module.exports = setupInput;