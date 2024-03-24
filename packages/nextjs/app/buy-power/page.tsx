"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Map from "~~/components/Map";
import { BuyEnergy } from "~~/components/BuyEnergy";
import { StationData } from "~~/components/StationData";

const SellPower: NextPage = () => {
  
  
  const stations = [
    {
      id: 1,
      x: -23.5571341,
      y: -46.7043563,
      address: "Rua piracanjuba, 240",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 12,
      compatibility: "DC CCS2, CHAdeMO",
      averagePrice: 6.40,
      stationName: "AABB"
    },
    {
      id: 2,
      x: -23.5561341,
      y: -46.7030563,
      address: "Rua piracanjuba, 242",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 30,
      compatibility: "CHAdeMO, AC Type 2",
      averagePrice: 7.10,
      stationName: "CCDD"
    },
    {
      id: 3,
      x: -23.5591341,
      y: -46.7001563,
      address: "Rua piracanjuba, 243",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 93,
      compatibility: "CHAdeMO, AC Type 2",
      averagePrice: 6.99,
      stationName: "EEFF"
    },
    {
      id: 4,
      x: -23.5553341,
      y: -46.7091563,
      address: "Rua piracanjuba, 232",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 51,
      compatibility: "AC Type 2",
      averagePrice: 6.50,
      stationName: "GGHH"
    },
  ];

  interface Station {
    id: number;
    x: number;
    y: number;
    address: string;
    maxVoltage: number;
    availablePlugs: string;
    availableEnergyPercentage: number;
    compatibility: string;
    averagePrice: number;
    stationName: string;
  }


  const [selectedStation, setSelectedStation] = useState<Station>({
      id: 0,
      x: 0,
      y: 0,
      address: "",
      maxVoltage: 0,
      availablePlugs: "",
      availableEnergyPercentage: 0,
      compatibility: "",
      averagePrice: 0,
      stationName: ""
  });
  const [value, setValue] = useState(0);
  const [stationName, setStationName] = useState("");
  const [address, setAddress] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [averagePrice, setAveragePrice] = useState(0);
  const [availableEnergyPercentage, setAvailableEnergyPercentage] = useState(0);

  return (
    <>
      <div className="flex flex-col mx-8 my-2">
        <h1 className="text-neutral text-5xl my-8">Choose your charger point</h1>
        <div className="p-4 px-8 rounded-3xl bg-black">
          <p className="text-3xl ml-8 pt-4 font-bold">Charger points:</p>
          <p className="text-xl font-medium pb-2 ml-8">Select the station you want to buy your power</p>
          <div className="md:col-span-5 md:row-span-1 mx-auto md:col-start-1 md:row-start-3 rounded-3xl mb-6">
            <Map
              roundedTopCorners={true}
              roundedBottomCorners={true}
              stations={stations}
              center={[-23.5571341, -46.7043563]}
              userLocation={[-23.5581341, -46.7043563]}
              width={"95%"}
              setSelectedStation={setSelectedStation}
            />
          </div>
          <div className="bg-[#010101] w-full -mt-12 z-0 ml-8 py-8 rounded-lg">          
            <div className="flex gap-x-5 w-full my-4 mx-8 divide-x">
              <div className="w-[30%]">
                <StationData
                  selectedStation={selectedStation}
                  setStationName={setStationName}
                  setAddress={setAddress}
                  setCompatibility={setCompatibility}
                  setAveragePrice={setAveragePrice}
                  setAvailableEnergyPercentage={setAvailableEnergyPercentage}
                  />
              </div>
              <div className="w-[70%] pl-12">
                  <BuyEnergy
                  value = {value}
                  setValue = {setValue}
                  />       
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellPower;
