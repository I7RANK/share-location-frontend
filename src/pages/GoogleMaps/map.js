import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import CustomMarker from './customMarker';

import identifyUserType from '../../utils/identifyUserType';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 55px)'
};

const center = {
  lat: 10.931408980305731,
  lng: -74.82416437847748
};

const zoom = 18;

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDePPdWErHwr3klW_CxPvpMuB_OX7vMKtA"
  })

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);

    identifyUserType();
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          <CustomMarker />
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
