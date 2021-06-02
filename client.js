const net = require("net");
const stdin = process.stdin;
stdin.setEncoding('utf8');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131", // IP address here,
    port: 50542, }, () => {
    console.log("Connection established!");
    conn.on('data', (data) => {
      console.log('message from server', data);
    })
  });
  conn.setEncoding("utf8");
  const name = 'AVI';
  conn.write(`Name: ${name}`);
  return conn;
};

module.exports = connect;