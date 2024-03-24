import { useMemo } from "react";
import dynamic from "next/dynamic";
import { Progress } from "./ui/progress";
import { useLocation } from "~~/contexts/LocationContext";
import Station from "~~/types/station";
import findClosestStation from "~~/utils/calculateNearestStation";

const stations: Station[] = [
  {
    x: -23.5571341,
    y: -46.7043563,
    address: "Rua piracanjuba, 240",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 12,
    id: 1,
  },
  {
    x: -23.5561341,
    y: -46.7030563,
    address: "Rua piracanjuba, 242",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 30,
    id: 2,
  },
  {
    x: -23.5591341,
    y: -46.7001563,
    address: "Rua piracanjuba, 243",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 93,
    id: 3,
  },
  {
    x: -23.5553341,
    y: -46.7091563,
    address: "Rua piracanjuba, 232",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 51,
    id: 4,
  },
  {
    x: -22.979455,
    y: -43.21523,
    address: "Pier da Lagoa Rodrigo de Freitas",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD",
    availableEnergyPercentage: 51,
    id: 5,
  },
  {
    x: -22.980095,
    y: -43.216255,
    address: "Av. Borges de Medeiros, 829 - Lagoa, Rio de Janeiro - RJ, 23430-042",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD",
    availableEnergyPercentage: 51,
    id: 6,
  },
  {
    x: -22.978384,
    y: -43.218378,
    address: "Av. Borges de Medeiros, 997 - Lagoa, Rio de Janeiro - RJ, 22430-041",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD",
    availableEnergyPercentage: 51,
    id: 7,
  },
];

const MapSectionHomepage = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("~~/components/Map"), {
        loading: () => <p>map is loading</p>,
        ssr: false,
      }),
    [],
  );

  const { location, updateLocation } = useLocation();

  const { station: closestStation, distance: closestStationDistance } = findClosestStation(stations, {
    x: location[0] || 0,
    y: location[1] || 0,
  });

  return (
    <div className="w-full">
      <div
        className="bg-green-500 text-white rounded-t-3xl shadow-lg pb-8 w-full flex justify-around items-center"
        style={{ backgroundImage: "linear-gradient(to right, #000000 , #14591F)" }}
      >
        <h1 className="text-5xl text-white">Charging points near you:</h1>
        <div className="leading-[0]">
          <p className="text-2xl font-bold">
            {closestStation?.address || "---"} <span className="font-normal text-xl">{closestStationDistance}Km</span>
          </p>
          <p className="text-lg font-semibold">Energy available:</p>
          <Progress value={21} className="bg-gray-100 " />
          <p className="text-xl">21% (12 A/h)</p>
          <div className="flex gap-4">
            <button className="font-semibold text-xl bg-primary rounded-lg text-black px-6 py-2 transition hover:scale-105">
              Navigate
            </button>
            <button className="font-medium text-xl bg-gray-200 rounded-lg text-black px-6 py-2 transition hover:scale-105">
              More Information
            </button>
          </div>
        </div>
      </div>
      <Map
        roundedTopCorners={false}
        roundedBottomCorners={true}
        stations={stations}
        center={location}
        userLocation={location}
        showAuctionButton={false}
      />
    </div>
  );
};

export default MapSectionHomepage;
