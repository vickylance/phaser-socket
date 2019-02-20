var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.broadcast.emit('hi new user');
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("chat message", function(msg) {
    console.log("message: " + JSON.stringify(msg));
    io.emit('chat message', JSON.stringify(msg));
  });
  socket.on("init", function(msg) {
    console.log("Init: " + JSON.stringify(msg));
  });
  socket.on("player", function(msg) {
    console.log("Player: " + JSON.stringify(msg));
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
