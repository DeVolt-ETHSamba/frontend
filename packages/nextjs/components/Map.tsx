// src/components/Map.tsx
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, MapContainerProps, Marker, Popup, TileLayer, Tooltip, useMap } from "react-leaflet";
import { Progress } from "~~/components/ui/progress";

const iAmHereIcon = L.icon({
  iconUrl: "/mapIcon.svg",
  iconRetinaUrl: "/mapIcon.svg",
  iconSize: [32, 32],
  popupAnchor: [-1, -16],
});
const stationIcon = L.icon({
  iconUrl: "/mapIcon2.svg",
  iconRetinaUrl: "/mapIcon2.svg",
  shadowUrl: "/shadow.svg",
  shadowRetinaUrl: "/shadow.svg",
  shadowSize: [80, 80],
  shadowAnchor: [30, 45],
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [-1, -58],
});

const MapUpdater = ({ mapCenter }: any) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(mapCenter, 16, {
      animate: true,
      duration: 5.0, // Duração da animação em segundos
    });
  }, [mapCenter, map]);

  return null;
};

interface mapProps {
  stations: any;
  width?: string;
  height?: string;
  center: [number, number];
  userLocation: [number, number];
  buttonText?: string;
  roundedTopCorners: boolean;
  roundedBottomCorners: boolean;
  setSelectedStation?: (station: any) => void;
}

const Map = ({

  stations,
  width,
  height,
  center,
  userLocation,
  buttonText,
  roundedTopCorners,
  roundedBottomCorners,
  setSelectedStation,

}: mapProps) => {
  let ContainerStyle = {
    width: width || "100%",
    height: height || "550px",
    borderTopLeftRadius: roundedTopCorners ? "20px" : "0",
    borderTopRightRadius: roundedTopCorners ? "20px" : "0",
    borderBottomLeftRadius: roundedBottomCorners ? "20px" : "0",
    borderBottomRightRadius: roundedBottomCorners ? "20px" : "0",
    margin: "auto",
  };

  return (
    <>
      <style>
        {`
        .leaflet-popup-content-wrapper, .leaflet-popup-tip {
          background-color: #222;
          border-radius: 10px;
          text-color: white;
        }
        `}
      </style>
      <MapContainer center={center} zoom={1} scrollWheelZoom={true} style={ContainerStyle}>
        <MapUpdater mapCenter={center} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={iAmHereIcon} position={userLocation}>
          <Popup>Você está aqui!</Popup>
        </Marker>

        {/* map the stations prop */}

        {stations.map((station: any, index: number) => {
          return (
            <Marker key={station.id} position={[station.x, station.y]} icon={stationIcon}>
              <Popup>
                <div className="leading-[1px] text-white">
                  <p>{station.address}</p>
                  <a href={`https://www.google.com/maps/search/${station.x},+${station.y}?entry=tts`}>
                    ver no Google Maps
                  </a>
                  <p className="font-bold pt-4 ">
                    Voltagem máxima: <span className="font-normal">{station.maxVoltage}V</span>
                  </p>
                  <p className="font-bold pb-4">
                    Plugues disponíveis: <span className="font-normal">{station.availablePlugs}</span>
                  </p>
                  <p className="font-bold ">Carga disponível:</p>
                  <Progress className="bg-slate-300" value={station.availableEnergyPercentage}></Progress>
                  <p className="">{station.availableEnergyPercentage}% (12 A/h)</p>
                  <button
                    onClick={() => {
                      if (setSelectedStation) {
                      setSelectedStation(station)
                      }
                    }
                    }
                    className="bg-primary p-4 px-6 rounded font-bold hover:bg-green-400 transition"
                  >
                    {buttonText || "Selecionar"}
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
