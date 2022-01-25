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

export default startTrackingPosition;
