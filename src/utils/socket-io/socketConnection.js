import { io } from "socket.io-client";

// type = sender || receiver
function socketConnection(type = 'sender', roomId, url = 'http://localhost:3001') {
  const socket = io(url);

  socket.on("connect", () => {
    console.log("I'm connected:", socket.id);

    const obj = {
      socketId: socket.id,
      type,
      roomId
    }

    socket.emit('lobby', obj);

    socket.on('private message', (messageObj) => {
      console.log('new private message');
      console.log(messageObj);
    });

    startTrackingPosition(socket);
  });

  return socket;
}

function startTrackingPosition(socket) {
  if (navigator.geolocation) {
    // watch for user movement
    navigator.geolocation.watchPosition(function (position) {
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
}

export default socketConnection;
