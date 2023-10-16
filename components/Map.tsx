import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'react-leaflet-fullscreen/styles.css'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

const createEmojiIcon = (emoji: string) => {
  const iconHTML = `<div>${emoji}</div>`
  return L.divIcon({
    html: iconHTML,
    className: 'custom-icon',
  })
}

interface MapProps {
  locations: {
    lat: number
    lng: number
  }[]
}

const Map = ({ locations }: MapProps) => {
  const isDesktop = useMediaQuery('(min-width: 700px)')

  return (
    <MapContainer
      center={[45.49316567534966, 15.318831262429292] as L.LatLngExpression}
      zoom={isDesktop ? 6 : 4}
      scrollWheelZoom={false}
      className='rounded-lg h-[300px] md:h-[500px] relative'
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png' />

      {locations.map(location => (
        <Marker
          position={[location.lat, location.lng]}
          icon={createEmojiIcon('◆')}
        />
      ))}
    </MapContainer>
  )
}

export default Map
