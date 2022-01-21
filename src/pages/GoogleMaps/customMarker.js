import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";


function CustomMarker() {
  const [location, setLocation] = useState([10, -11]);

  function getRandomArbitrary(min = -11, max = 11) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <Marker
        position={{lat: location[0], lng: location[1]}}
        onClick={() => setLocation([getRandomArbitrary(), getRandomArbitrary()])} />
    </>
  );
}

export default CustomMarker;
