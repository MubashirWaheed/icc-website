"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import Link from "next/link";
import dynamic from "next/dynamic";

const GoogleMap = () => {
  const apikey = "b3534f2d7amsha159d5b473cb2dbp1e9736jsna83af3cb47a1";
  const customIcon = new Icon({
    iconUrl: "/images/location.png",
    iconSize: [30, 30],
  });
  const markerPosition = [25.122419, 55.220905];

  const handleMarkerClick = () => {
    const [lat, lng] = markerPosition;
    const googleMapsUrl = `https://www.google.com/maps/place/ICC+-+Intensive+Car+Care/@25.1223388,55.219816,19z/data=!4m12!1m5!3m4!2zMjXCsDA3JzIwLjciTiA1NcKwMTMnMTUuMyJF!8m2!3d25.122419!4d55.220905!3m5!1s0x3e5f6bdb00000001:0xe5da10f8148c0701!8m2!3d25.1223887!4d55.2208276!16s%2Fg%2F11bccj809j?entry=ttu`;

    // Open Google Maps in a new tab or window
    window.open(googleMapsUrl, "_blank");
  };
  return (
    <div className="sm:w-[170px]  md:w-[200px] md:h-[140px] lg:w-[230px] h-[150px] xl:w-[260px]">
      <MapContainer
        attributionControl={false}
        center={[25.1224147279196, 55.22079971931257]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=${apikey}`}
        />
        <Link href="#">
          <Marker
            eventHandlers={{ click: handleMarkerClick }}
            position={[25.122419, 55.220905]}
            icon={customIcon}
          >
            <Popup>Intensive Car Care</Popup>
          </Marker>
        </Link>
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
