import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import CustomMarker from './customMarker';
import BSModal from '../Modal/modal';

import identifyUserType from '../../utils/identifyUserType';
import startTrackingPosition from '../../utils/startTrackingPosition';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 55px)',
};

const center = {
  lat: 10.9797595,
  lng: -74.7960913,
};

const zoom = 5;

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [mapCenter, setMapCenter] = React.useState([center]);
  const [mapZoom, setMapZoom] = React.useState(zoom);
  // eslint-disable-next-line no-unused-vars
  const [mapInstance, setMapInstance] = React.useState(null);
  const [socketInstance, setSocketInstance] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [userType, setUserType] = React.useState(null);
  const [linkToShare, setLinkToShare] = React.useState(null);

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMapInstance(mapInstance);

    const { socket, userType } = identifyUserType();

    setUserType(userType);
    setSocketInstance(socket);

    socket.on('roomId', (clientObj) => {
      const localUrl = window.location.href;

      const trackingLink = `${localUrl}?roomId=${clientObj.roomId}`;

      setLinkToShare(trackingLink);
      if (navigator.geolocation) {
        // watch for user movement
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          setMapCenter([{ lat, lng }]);
          setMapZoom(18);
        });
      }
      startTrackingPosition(socket, clientObj);
    });
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMapInstance(null);
  }, []);

  return isLoaded ? (
    <>
      user type:{userType}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter[0]}
        zoom={mapZoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {socketInstance ? (
            <CustomMarker socketInstance={socketInstance} />
          ) : (
            <></>
          )}
        </>
      </GoogleMap>
      {linkToShare ? (
        <BSModal
          linkToShare={linkToShare}
          /* showModal={userType === 'sender'} */
        />
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
