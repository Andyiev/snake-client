const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131", // IP address here,
    port: 50542, }, () => {
    console.log("Connection established!");
    conn.on('data', (data) => {
      console.log('message from server', data);
    })
  });// PORT number here,


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
