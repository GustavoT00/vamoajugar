import React from 'react';
import useGoogleMaps from '../Hooks/useGoogleMaps';

const Mapa = () => {
  useGoogleMaps('TU_API_KEY'); // Reemplaza 'TU_API_KEY' con tu propia clave de API

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default Mapa;