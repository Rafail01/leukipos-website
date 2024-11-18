import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapCard from './components/MapCard';
import mapImageKalamta from '../images/leukipos_map.jpg';
import mapImageMani from '../images/leukipos_map_mani.jfif';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  {
    position: [37.0388, 22.1167],
    description: "Kalamata location"
  },
  {
    position: [36.8427, 22.2605],
    description: "Mani location"
  }
];

// Component για την προσαρμογή του χάρτη στα bounds των τοποθεσιών
const FitBoundsComponent = ({ bounds }) => {
  const map = useMap();
  map.fitBounds(bounds);
  return null;
};

const MapPage = () => {
  // Ορισμός των bounds χρησιμοποιώντας τις θέσεις
  const bounds = locations.map(loc => loc.position);

  return (
    <MapContainer bounds={bounds} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* FitBoundsComponent για την προσαρμογή του zoom και κεντραρίσματος */}
      <FitBoundsComponent bounds={bounds} />

      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position} icon={customIcon}>
          <Popup>
            {index === 0 ? (
              <MapCard
                title="ΧΟΡΕΥΤΙΚΟΣ ΟΜΙΛΟΣ ΛΕΥΚΙΠΠΟΣ (ΚΑΛΑΜΑΤΑ)"
                image={mapImageKalamta}
                address="Ι. Παλαιολόγου 42, Καλαμάτα 241 00"
                phone1='6944982331'
                phone2='6947144443'
              />
            ) : (
              <MapCard
                title="ΧΟΡΕΥΤΙΚΟΣ ΟΜΙΛΟΣ ΛΕΥΚΙΠΠΟΣ (ΜΑΝΗ)"
                image={mapImageMani}
                address="έναντι Ιερού Ναού Αγίας Τριάδας, Στούπα Δυτικής Μάνης"
                phone1='6944982331'
                phone2='6947144443'
              />
            )}
            <p>{loc.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPage;
