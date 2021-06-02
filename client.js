const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131", // IP address here,
    port: 50542, }, () => {
    console.log("Successfully Connected to server!");
    conn.on('data', (data) => {
      console.log('message from server', data);
    })
  });
  conn.setEncoding("utf8");
  const name = 'AVI';
  conn.write(`Name: ${name}`);
  setTimeout(function() {
    conn.write("Move: up")}, 2000);
  return conn;
};

module.exports = connect;