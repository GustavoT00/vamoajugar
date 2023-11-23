import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapContainer() {
  useEffect(() => {

    const map = L.map("map").setView([7.067, -73.867], 13);


    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const newCharacterIcon = L.icon({
      iconUrl:
        "https://pngimg.com/d/gps_PNG18.png", 
      iconSize: [60, 40], 
      iconAnchor: [25, 50], 
    });

    // agrega el nuevo marcador del personaje al mapa
    L.marker([7.067, -73.867], { icon: newCharacterIcon }).addTo(map);
  }, []);

  return <div id='map' style={{ width: "100%", height: "100vh" }}></div>;
}

export default MapContainer;