const net = require("net");
const {host,port} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: host, // IP address here,
    port: port, }, () => {
    console.log("Successfully Connected to server!");
    conn.on('data', (data) => {
      console.log('message from server', data);
    })
  });
  conn.setEncoding("utf8");
  const name = 'AVI';
  conn.write(`Name: ${name}`);
  //setInterval(function() {
   // conn.write("Move: up");
   // conn.write("Move: left");
   // conn.write("Move: right");
  //  conn.write("Move: down")}, 300);
  return conn;
};

module.exports = {connect};