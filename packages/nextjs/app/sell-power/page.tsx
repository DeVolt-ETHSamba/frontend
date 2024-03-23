"use client";

import type { NextPage } from "next";
import { useState } from 'react';
import { Step } from "~~/components/Step";
import MapSectionHomepage from "~~/components/MapSectionHomepage";
import Map from "~~/components/Map";

import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
import { useGeolocation } from "@uidotdev/usehooks";


const SellPower: NextPage = () => {


    const [activeStep, setActiveStep] = useState(1);
    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    const stations = [
        {
          x: -23.5571341,
          y: -46.7043563,
          address: "Rua piracanjuba, 240",
          maxVoltage: 45,
          availablePlugs: "Tipo S2, BYD, BMW",
          availableEnergyPercentage: 12,
        },
        {
          x: -23.5561341,
          y: -46.7030563,
          address: "Rua piracanjuba, 242",
          maxVoltage: 45,
          availablePlugs: "Tipo S2, BYD, BMW",
          availableEnergyPercentage: 30,
        },
        {
          x: -23.5591341,
          y: -46.7001563,
          address: "Rua piracanjuba, 243",
          maxVoltage: 45,
          availablePlugs: "Tipo S2, BYD, BMW",
          availableEnergyPercentage: 93,
        },
        {
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
            <h1 className="text-neutral">Sell your power</h1>
            <p className="">Unlock the value of your energy. DeVolt empowers you to set your own prices and trade excess energy directly on our decentralized marketplace. Take the lead in the energy shift by offering your surplus power to a network eager to trade. Simple, direct, and efficient  you&aposre not just selling energy; you&aposre pioneering the democratization of power.</p>
            <div className="md:col-span-5 md:row-span-1 md:col-start-1 md:row-start-3 rounded-3xl mb-6">
            <Map
                stations={stations}
                center={[-23.5571341, -46.7043563]}
                userLocation={[-23.5581341, -46.7043563]}
                showAuctionButton={false}
            />
            </div>
            <div className="bg-[#010101]  w-full h-64 -mt-12 z-0 ">
                <div className="flex gap-x-5 w-full m-8">
                    <div className="w-[30%]">
                        <p className="text-3xl">oii</p>
                    </div>
                    <p>1</p>
                </div>

            </div>
            <div className="flex gap-x-5 rounded-md">
                <Step
                    step="1"
                    phrase="Set your price"
                    isActive={ activeStep == 1 ? true : false}
                >
                    <input type="range" min={0} max={100} value={value} onChange={handleChange} className="range" />
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-3xl text-[#1e1e1e]">{value}</p>
                        <p className="text-[#1e1e1e] text-md -m-3">DVBrl/KWh</p>
                        <p className="text-[#1e1e1e] text-sm">*Competitive pricing attracts buyers, fostering a dynamic and fair exchange.</p>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button className="rounded-full bg-[#1e1e1e] px-8 py-2" onClick={()=>setActiveStep(2)}>
                            Next step
                        </button>
                    </div>

                </Step>
                <Step
                    step="2"
                    phrase="Select the amount of power do you have avaliable to sell"
                    isActive={ activeStep == 2 ? true : false}
                    >
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="number" className="grow bg-[#1e1e1e]" placeholder="Type here" />
                        <p className="font-bold">kWh/day</p>
                    </label>
                    <div className="flex justify-end mt-28">
                        <button className="rounded-full bg-[#1e1e1e] px-8 py-2">
                            Sell energy power
                        </button>
                    </div>
                </Step>
            </div>
        </div>
                    </>
    );
};

export default SellPower;
