import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";


function CustomMarker({ position = {
  lat: 10.9797595,
  lng: -74.7960913
}, socketInstance }) {
  const [location, setLocation] = useState([position]);

  function getRandomArbitrary(min = -11, max = 11) {
    return Math.random() * (max - min) + min;
  }

  function onLoad() {
    socketInstance.on('fromRoadsAPI', (roadsPath) => {
      console.log('new roadsAPI location working');
      changeMarkerPosition(roadsPath);
    });
  }

  function changeMarkerPosition(roadsPath) {
    const snappedPoints = roadsPath['snappedPoints'];
    const l = snappedPoints.length;
    const interval = l > 1 ? parseInt(3000 / l) : 0;
    console.log(roadsPath);

    for (let i = 0; i < l; i++) {
      setTimeout(() => {
        const element = snappedPoints[i];

        setLocation([{
          lat: element.location.latitude,
          lng: element.location.longitude
        }]);

        console.log('interval;', interval + (interval * i), element.location);
      }, interval + (interval * i));
    }
  }

  return (
    <>
      <Marker
        position={{ lat: location[0].lat, lng: location[0].lng }}
        onLoad={onLoad}
        onClick={() => setLocation([getRandomArbitrary(), getRandomArbitrary()])} />
    </>
  );
}

export default CustomMarker;
