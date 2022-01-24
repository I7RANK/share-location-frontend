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

    socket.on('roomId', (clientObj) => {
      console.log(`http://localhost:3000/map/?roomId=${clientObj.roomId}`);
      startTrackingPosition(socket, clientObj);
    });
  });

  return socket;
}

function startTrackingPosition(socket, clientObj) {
  if (navigator.geolocation) {
    // watch for user movement
    navigator.geolocation.watchPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      const obj = {...clientObj};

      obj['lat'] = lat;
      obj['lng'] = lng;

      socket.emit('toRoadsAPI', obj);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

export default socketConnection;
