import React from 'react';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapCard from './components/MapCard'

// Δημιουργία ενός custom icon για τον χάρτη
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapPage = () => {
  // Ορισμός των συντεταγμένων για το σημείο που θέλετε να δείξετε
  const position = [37.0388,22.1167]; // π.χ., συντεταγμένες Αθήνας

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
      {/* <Tooltip direction="right" offset={[12, 0]} opacity={1} permanent>
          ΧΟΡΕΥΤΙΚΟΣ ΟΜΙΛΟΣ ΛΕΥΚΙΠΠΟΣ
        </Tooltip> */}
        <Popup>
          <MapCard/>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapPage;
