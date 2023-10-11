import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { FullscreenControl } from 'react-leaflet-fullscreen'
import 'react-leaflet-fullscreen/styles.css'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

const createEmojiIcon = (emoji: string) => {
  const iconHTML = `<div class="emoji-icon text-lg">${emoji}</div>`
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
      center={[49.9171208544799, 14.67178354882282] as L.LatLngExpression}
      zoom={isDesktop ? 6 : 4}
      scrollWheelZoom={false}
      className='rounded-lg h-[300px] md:h-[500px] relative'
    >
      <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png' />
      <div className='absolute inset-0 w-full h-full z-[400] map-overlay' />
      <FullscreenControl />

      {locations.map(location => (
        <Marker
          position={[location.lat, location.lng]}
          icon={createEmojiIcon('📍')}
        />
      ))}
    </MapContainer>
  )
}

export default Map
