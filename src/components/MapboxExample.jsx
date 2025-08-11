import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // lng, lat
      zoom: 9
    });

    return () => mapRef.current?.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-screen"
    />
  );
};

export default MapboxExample;
