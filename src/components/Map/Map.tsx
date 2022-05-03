import L, { LatLngExpression } from "leaflet";
import { FC, useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import locationIcon from "../../assets/images/icon-location.svg";
import "./Map.css";

interface MapProps {
  lat: number;
  lng: number;
}

const Map: FC<MapProps> = (props) => {
  const [map, setMap] = useState<any>();
  const position = [props.lat, props.lng] as LatLngExpression;

  function ChangeView({ center, zoom }: any) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const displayMap = useMemo(() => {
    console.log("render map");
    const markerIcon = L.icon({
      iconUrl: locationIcon,
      iconRetinaUrl: locationIcon,
      iconSize: [30, 40],
    });

    return (
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        ref={setMap}
        style={{ height: "70vh", width: "100%", zIndex: -1 }}
      >
        <ChangeView center={position} zoom={17} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}></Marker>
      </MapContainer>
    );
  }, [position]);

  return <>{displayMap}</>;
};
export default Map;
