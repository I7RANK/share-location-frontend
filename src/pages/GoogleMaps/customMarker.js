import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";


function CustomMarker({position={
    lat: 10.9797595,
    lng: -74.7960913
  }, socketInstance}) {
  const [location, setLocation] = useState([position]);

  function getRandomArbitrary(min = -11, max = 11) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <Marker
        position={{lat: location[0].lat, lng: location[0].lng}}
        onClick={() => setLocation([getRandomArbitrary(), getRandomArbitrary()])} />
    </>
  );
}

export default CustomMarker;
