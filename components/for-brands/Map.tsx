'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'react-leaflet-fullscreen/styles.css'
import { useLanguage } from '@/store/useLanguage'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

const createImageIcon = (src: string) => {
  const iconHTML = `<img src=${src} class="w-10 h-10 rounded-lg" />`
  return L.divIcon({
    html: iconHTML,
    className: 'custom-icon',
  })
}

const Map = () => {
  const isDesktop = useMediaQuery('(min-width: 700px)')
  const { language } = useLanguage(store => store)

  return (
    <MapContainer
      center={[42.02713014229293, -24.48832239315049] as L.LatLngExpression}
      zoom={isDesktop ? 5 : 2}
      scrollWheelZoom={false}
      className='h-[280px] md:h-[420px] relative'
      attributionControl={false}
    >
      <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png' />

      <Marker
        position={[47.322869069690405, 7.262877880793217]}
        icon={createImageIcon('/case-studies/heys-luggage/creators/alex.webp')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-xl md:text-2xl font-bold -mb-6'>
            Alexandra Leica
          </h3>
          <p className='md:text-lg font-medium'>
            {language === 'en'
              ? '🇨🇭 Switzerland'
              : language === 'cs'
              ? '🇨🇭 Švýcarsko'
              : language === 'de'
              ? '🇨🇭 Schweiz'
              : ''}
          </p>
          <Link
            href='https://www.instagram.com/alexploringtheworld'
            target='_blank'
          >
            <Instagram className='stroke-black cursor-pointer' />
          </Link>
        </Popup>
      </Marker>
      <Marker
        position={[44.68715462796092, 27.922917905319732]}
        icon={createImageIcon(
          '/case-studies/heys-luggage/creators/amalia.webp'
        )}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-xl md:text-2xl font-bold -mb-6'>Aamalia Roman</h3>
          <p className='md:text-lg font-medium'>
            {language === 'en'
              ? '🇷🇴 Romania'
              : language === 'cs'
              ? '🇷🇴 Rumunsko'
              : language === 'de'
              ? '🇷🇴 Rumänisch'
              : ''}
          </p>
          <Link href='https://www.instagram.com/amaliaaroman' target='_blank'>
            <Instagram className='stroke-black cursor-pointer' />
          </Link>
        </Popup>
      </Marker>
      <Marker
        position={[40.666428189141826, -73.9638822633164]}
        icon={createImageIcon(
          '/case-studies/heys-luggage/creators/carmen.webp'
        )}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-xl md:text-2xl font-bold -mb-6'>Carmen Niscov</h3>
          <p className='md:text-lg font-medium'>
            {language === 'en'
              ? '🇺🇸 USA'
              : language === 'cs'
              ? '🇺🇸 USA'
              : language === 'de'
              ? '🇺🇸 USA'
              : ''}
          </p>
          <Link href='https://www.instagram.com/niscovcarmen' target='_blank'>
            <Instagram className='stroke-black cursor-pointer' />
          </Link>
        </Popup>
      </Marker>
      <Marker
        position={[50.09738517025728, 15.338298975371815]}
        icon={createImageIcon(
          '/case-studies/heys-luggage/creators/dominik.webp'
        )}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-xl md:text-2xl font-bold -mb-6'>
            Dominik Grossl
          </h3>
          <p className='md:text-lg font-medium'>
            {language === 'en'
              ? '🇨🇿 Czech republic'
              : language === 'cs'
              ? '🇨🇿 Česká republika'
              : language === 'de'
              ? '🇨🇿 Tschechische Republik'
              : ''}
          </p>
          <Link href='https://www.instagram.com/dominik_grossl' target='_blank'>
            <Instagram className='stroke-black cursor-pointer' />
          </Link>
        </Popup>
      </Marker>
      <Marker
        position={[39.10052247848915, 16.34183771794621]}
        icon={createImageIcon('/case-studies/heys-luggage/creators/senni.webp')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-xl md:text-2xl font-bold -mb-6'>Senad Dziho</h3>
          <p className='md:text-lg font-medium'>
            {language === 'en'
              ? '🇮🇹 Italy'
              : language === 'cs'
              ? '🇮🇹 Itálie'
              : language === 'de'
              ? '🇮🇹 Italien'
              : ''}
          </p>
          <Link href='https://www.instagram.com/sennivisuals' target='_blank'>
            <Instagram className='stroke-black cursor-pointer' />
          </Link>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
