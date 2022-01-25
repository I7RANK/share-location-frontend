import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import CustomMarker from './customMarker';
import BSModal from '../Modal/modal';

import identifyUserType from '../../utils/identifyUserType';
import startTrackingPosition from '../../utils/startTrackingPosition';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 55px)'
};

const center = {
  lat: 10.9797595,
  lng: -74.7960913
};

const zoom = 13;

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDePPdWErHwr3klW_CxPvpMuB_OX7vMKtA"
  });

  // eslint-disable-next-line no-unused-vars
  const [mapInstance, setMapInstance] = React.useState(null);
  const [socketInstance, setSocketInstance] = React.useState(null);
  const [linkToShare, setLinkToShare] = React.useState(null);

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMapInstance(mapInstance);

    const socket = identifyUserType();

    setSocketInstance(socket);

    socket.on('roomId', (clientObj) => {
      const localUrl = window.location.href;

      setLinkToShare(`${localUrl}?roomId=${clientObj.roomId}`);
      startTrackingPosition(socket, clientObj);
    });
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMapInstance(null)
  }, [])

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          {socketInstance ? <CustomMarker socketInstance={socketInstance}/>: <></>}
        </>
      </GoogleMap>

      {linkToShare ? <BSModal linkToShare={linkToShare} />: <></>}
    </>
  ) : <></>
}

export default React.memo(MyComponent)
