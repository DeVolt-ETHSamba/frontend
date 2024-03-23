"use client";

import { useState } from "react";
import Image from "next/image";
import { useGeolocation } from "@uidotdev/usehooks";
import type { NextPage } from "next";
import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
import Map from "~~/components/Map";
import MapSectionHomepage from "~~/components/MapSectionHomepage";
import { Step } from "~~/components/Step";

const SellPower: NextPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const stations = [
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
        <h1 className="text-neutral text-5xl my-8">Choose your charger point</h1>
        <div className="p-4 px-8 rounded-3xl bg-black">
          <p className="text-3xl ml-12 pt-4 font-bold">Charger points:</p>
          <p className="text-xl font-medium pb-2 ml-12">Select the station you want to buy your power to</p>
          <div className="md:col-span-5 md:row-span-1 mx-auto md:col-start-1 md:row-start-3 rounded-3xl mb-6">
            <Map
              roundedTopCorners={true}
              roundedBottomCorners={true}
              stations={stations}
              center={[-23.5571341, -46.7043563]}
              userLocation={[-23.5581341, -46.7043563]}
              width={"95%"}
            />
          </div>
          <div className="bg-[#010101] w-full -mt-12 z-0 py-8 rounded-lg">
          <p className="text-3xl text-[#37e231] font-bold ml-12">Estation AABB</p>
            <div className="flex gap-x-5 w-full m-4 divide-x">
              <div className="w-[30%]">           
                <div className="flex gap-2 items-center my-4">
                  <Image src="./wallet.svg" alt="ttt" width={40} height={40} />
                  <b>Compatibility</b>
                </div>
                <div className="flex gap-2 items-center my-4">
                  <Image src="./wallet.svg" alt="ttt" width={40} height={40} />
                  <b>Average price</b>
                </div>
                <div className="flex gap-2 items-center my-4">
                  <Image src="./capacity.svg" alt="ttt" width={40} height={40} />
                  <b>Capacity</b>
                </div>              
              </div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellPower;
