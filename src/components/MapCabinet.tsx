"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Correction du bug icône Leaflet avec Webpack/Next.js
const customIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 36px;
      height: 36px;
      background: #b8954f;
      border: 2px solid #f5f0eb;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 12px rgba(184,149,79,0.5);
    "></div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -38],
});

const POSITION: [number, number] = [43.408875, 5.056345]; // 1 Bd du Président Allende, L'Espace Vénitien

export default function MapCabinet() {
  useEffect(() => {
    // Fix leaflet CSS icons path
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    });
  }, []);

  return (
    <div style={{ height: "280px", width: "100%" }} className="relative">
      {/* Overlay filtre sombre pour matcher le thème */}
      <style>{`
        .leaflet-tile-pane { filter: grayscale(1) brightness(0.45) contrast(1.1) sepia(0.2); }
        .leaflet-container { background: #0a0a0a; }
        .leaflet-popup-content-wrapper {
          background: #1a1a1a;
          color: #f5f0eb;
          border: 1px solid rgba(184,149,79,0.3);
          border-radius: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.6);
          font-family: 'Libre Franklin', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
        }
        .leaflet-popup-tip { background: #1a1a1a; }
        .leaflet-popup-close-button { color: #b8954f !important; }
        .leaflet-control-zoom a {
          background: #1a1a1a !important;
          color: #b8954f !important;
          border-color: #2a2a2a !important;
        }
        .leaflet-control-zoom a:hover { background: #2a2a2a !important; }
        .leaflet-control-attribution {
          background: rgba(10,10,10,0.8) !important;
          color: #6b6b6b !important;
          font-size: 0.55rem !important;
        }
        .leaflet-control-attribution a { color: #b8954f !important; }
      `}</style>

      <MapContainer
        center={POSITION}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={POSITION} icon={customIcon}>
          <Popup>
            <div style={{ lineHeight: "1.7" }}>
              <strong style={{ color: "#b8954f", fontSize: "0.85rem", fontFamily: "Cormorant Garamond, serif" }}>
                Cabinet Maître Joseph Czub
              </strong>
              <br />
              1 Bd du Président Allende
              <br />
              L&apos;Espace Vénitien
              <br />
              13500 Martigues
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
