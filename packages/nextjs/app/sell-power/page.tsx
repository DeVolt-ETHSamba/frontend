"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useGeolocation } from "@uidotdev/usehooks";
import type { NextPage } from "next";
import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
import Map from "~~/components/Map";
import MapSectionHomepage from "~~/components/MapSectionHomepage";
import { Step } from "~~/components/Step";

const SellPower: NextPage = () => {
  const [selectedStation, setSelectedStation] = useState<Station>({

    id: 0,
    x: 0,
    y: 0,
    address: "",
    maxVoltage: 0,
    availablePlugs: "",
    availableEnergyPercentage: 0,
  });

  const [activeStep, setActiveStep] = useState(1);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  interface Station {
    id: number;
    x: number;
    y: number;
    address: string;
    maxVoltage: number;
    availablePlugs: string;
    availableEnergyPercentage: number;
  }

  const stations: Station[] = [
    { 
      id: 1,
      x: -23.5571341,
      y: -46.7043563,
      address: "Rua piracanjuba, 240",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 12,
    },
    {
      id: 2,
      x: -23.5561341,
      y: -46.7030563,
      address: "Rua piracanjuba, 242",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 30,
    },
    {
      id: 3,
      x: -23.5591341,
      y: -46.7001563,
      address: "Rua piracanjuba, 243",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 93,
    },
    {
      id: 4,
      x: -23.5553341,
      y: -46.7091563,
      address: "Rua piracanjuba, 232",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 51,
    },
  ];

  return (
    <>
      <div className="flex flex-col mx-8 my-2">
        <h1 className="text-neutral text-6xl mb-4">Sell your power</h1>
        <div className="p-4 px-8 rounded-3xl bg-black">
          <p className="text-6xl ml-20 pt-4 font-bold">#1 Step:</p>
          <p className="text-3xl font-medium pb-2 ml-20">Select the station you want to sell your power to</p>
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
          <div className="bg-[#010101] w-full -mt-12 z-0 py-12 rounded-lg">
            <div className="flex gap-x-5 w-full m-8 divide-x">
              <div className="w-[30%]">
                <p className="text-3xl text-[#37e231] font-bold">Auction status</p>
                <div className="flex gap-2 items-center my-4">
                  <Image src="./wallet.svg" alt="ttt" width={40} height={40} />
                  <p>Average price <span>{"---"}</span> </p>
                </div>
                <div className="flex gap-2 items-center my-4">
                  <Image src="./capacity.svg" alt="ttt" width={40} height={40} />
                  <p>Capacity <span>{selectedStation["availableEnergyPercentage"] || "---"}</span> </p>
                </div>
                <div className="flex gap-2 items-center my-4">
                  <Image src="./pin.svg" alt="ttt" width={40} height={40} />
                  <p>Address <span>{selectedStation["address"]||"---"}</span> </p>
                </div>
              </div>
              <div className="w-[70%] px-8">
                <p className="text-3xl text-[#37e231] font-bold backdrop-blur-lg">Last bids</p>
                <div className="grid grid-cols-4 gap-3 w-[95%]">
                  <div className="bg-[#37e231] h-32 rounded-lg"></div>
                  <div className="bg-[#37e231] h-32 rounded-lg"></div>
                  <div className="bg-[#37e231] h-32 rounded-lg"></div>
                  <div className="bg-[#37e231] h-32 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-5 rounded-md mt-8">
          <Step step="2" phrase="Set your price" isActive={activeStep == 1 ? true : false}>
            <input type="range" min={0} max={100} value={value} onChange={handleChange} className="range" />
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-3xl text-[#1e1e1e]">{value}</p>
              <p className="text-[#1e1e1e] text-md -m-3">DVBrl/KWh</p>
              <p className="text-[#1e1e1e] text-sm">
                *Competitive pricing attracts buyers, fostering a dynamic and fair exchange.
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="rounded-full bg-[#1e1e1e] px-8 py-2" onClick={() => setActiveStep(2)}>
                Next step
              </button>
            </div>
          </Step>
          <Step
            step="3"
            phrase="Select the amount of power do you have avaliable to sell"
            isActive={activeStep == 2 ? true : false}
          >
            <label className="input input-bordered flex items-center gap-2">
              <input type="number" className="grow bg-[#1e1e1e]" placeholder="Type here" />
              <p className="font-bold">kWh/day</p>
            </label>
            <div className="flex justify-end mt-28">
              <button className="rounded-full bg-[#1e1e1e] px-8 py-2">Sell energy power</button>
            </div>
          </Step>
        </div>
      </div>
    </>
  );
};

export default SellPower;
