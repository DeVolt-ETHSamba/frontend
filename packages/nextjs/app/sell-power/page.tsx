"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import SellFirstStep from "./SellFirstStep";
import { useGeolocation } from "@uidotdev/usehooks";
import type { NextPage } from "next";
import { set } from "nprogress";
import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
import Map from "~~/components/Map";
import MapSectionHomepage from "~~/components/MapSectionHomepage";
import { Step } from "~~/components/Step";

const SellPower: NextPage = () => {
  
    const [activeStep, setActiveStep] = useState(1);
    const [value, setValue] = useState(0);

  const moveToStep1 = () => {
    window.scrollBy({
      behavior: "smooth",
      top: -550,
    });
    setActiveStep(1);
  }
  
  const moveToStep2 = () => {
    window.scrollBy({
      behavior: "smooth",
      top: window.innerHeight,
    });
    setActiveStep(2);
  };

  const moveToStep3 = () => {
    setActiveStep(3);
  };

  const finish = () => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <>
      <div className="flex flex-col mx-8 my-2">
        <h1 className="text-neutral text-6xl mb-4">Sell your power</h1>

        <SellFirstStep isActive={activeStep == 1 ? true : false}>
          <button
            onClick={() => moveToStep2()}
            className="bg-primary text-3xl px-4 py-2 mx-auto rounded-xl text-black font-semibold"
          >
            Continue
          </button>
        </SellFirstStep>

        <div className="flex gap-x-7 mb-40 rounded-md mt-8">
          <Step step="2" phrase="Set your price" isActive={activeStep == 2 ? true : false}>
            <input type="range" min={0} max={100} value={value} onChange={handleChange} className="range" />
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-3xl text-[#1e1e1e]">{value}</p>
              <p className="text-[#1e1e1e] text-md -m-3">DVBrl/KWh</p>
              <p className="text-[#1e1e1e] text-sm">
                *Competitive pricing attracts buyers, fostering a dynamic and fair exchange.
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <button className="rounded-full bg-[#1e1e1e] px-4 py-4" onClick={() => moveToStep1()}>
                <ArrowLeft size={30}/>
              </button>
              <button className="rounded-full bg-[#1e1e1e] px-8 py-2" onClick={() => moveToStep3()}>
                Next step
              </button>
            </div>
          </Step>
          <Step
            step="3"
            phrase="Select the amount of power do you have avaliable to sell"
            isActive={activeStep == 3 ? true : false}
          >
            <label className="input input-bordered flex items-center gap-2">
              <input type="number" className="grow bg-[#1e1e1e]" placeholder="Type here" />
              <p className="font-bold">kWh/day</p>
            </label>
            <div className="flex justify-between mt-28">
              <button className="rounded-full bg-[#1e1e1e] px-4 py-4" onClick={() => setActiveStep(2)}>
                <ArrowLeft size={30}/>
              </button>
              <button className="rounded-full bg-[#1e1e1e] px-8 py-2">Sell energy power</button>
            </div>
          </Step>
        </div>
      </div>
    </>
  );
};

export default SellPower;
