import React from 'react'
import './style.css'
import campusData from '../../campusData'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

export default function Map({ setCampus }) {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
    <MapContainer
      center={[-5.139154, -39.399208]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {campusData.map((item, index) => {
        return (
          <Marker
            eventHandlers={{
              click: () => {
                setCampus(item.campusCompleto)
              }
            }}
            key={index}
            position={[item.lat, item.long]}
          >
            <Popup>
              {item.campus}
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
