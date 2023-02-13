const io = require("socket.io")(3000);

io.on("connection", socket => {
  console.log("Un nouveau joueur est connecté : " + socket.id);

  socket.on("play", data => {
    socket.broadcast.emit("play", data);
  });
});