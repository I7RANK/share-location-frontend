import { io } from "socket.io-client";


function socketConnection(url = 'http://localhost:3001') {
  const socket = io(url);

  socket.on("connect", () => {
    console.log("I'm connected");
    console.log(socket.id);
  });

  if (navigator.geolocation) {
    // watch for user movement
    navigator.geolocation.watchPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      const obj = {
        socketId: socket.id,
        lat,
        lng
      };

      socket.emit('test-location', obj);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  return socket;
}

export default socketConnection;
