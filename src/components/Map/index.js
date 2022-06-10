import './style.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import React from 'react'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

export default function Map({ setCampus, campusList }) {
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
      {campusList.map((item, index) => {
        return (
          <Marker
            eventHandlers={{
              click: () => {
                setCampus(item.id)
              }
            }}
            key={index}
            position={[item.lat, item.lng]}
          >
            <Popup>
              {item.nome}
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
