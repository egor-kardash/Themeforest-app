import React, { memo, useMemo } from 'react';

import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { v4 as getId } from 'uuid';

import MapMarkerIcon from '@/assets/icons/map-marker.svg';
import { coordinates } from '@/constants';

import { googleMapOptions } from './options';
import { MapContainer, mapStyle } from './styled';

export const MapSection = memo(() => {
  return (
    <MapContainer>
      <GoogleMap
        zoom={6}
        center={coordinates[0]}
        mapContainerStyle={mapStyle}
        options={googleMapOptions}
      >
        {coordinates.map((item) => (
          <MarkerF key={getId()} position={item} icon={MapMarkerIcon} />
        ))}
      </GoogleMap>
    </MapContainer>
  );
});
