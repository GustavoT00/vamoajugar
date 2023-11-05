import { useEffect } from 'react';

const useGoogleMaps = (apiKey) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      // Aquí puedes realizar acciones adicionales cuando el mapa se inicializa
    }

    return () => {
      document.head.removeChild(script);
    }
  }, [apiKey]);
}

export default useGoogleMaps;