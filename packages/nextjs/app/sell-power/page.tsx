"use client";

import type { NextPage } from "next";
import { useState } from 'react';
import { Step } from "~~/components/Step";


const SellPower: NextPage = () => {

    //const [step1, setStep1] = useState(true);
    //const [step2, setStep2] = useState(false);

    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className="flex flex-col mx-8 my-2">
            <h1 className="text-neutral">Sell your power</h1>
            <p className="">Unlock the value of your energy. DeVolt empowers you to set your own prices and trade excess energy directly on our decentralized marketplace. Take the lead in the energy shift by offering your surplus power to a network eager to trade. Simple, direct, and efficient  you&aposre not just selling energy; you&aposre pioneering the democratization of power.</p>
            <div className="grid grid-cols-2 gap-x-5 rounded-md">
                <Step
                    step="1"
                    phrase="Set your price"
                    //activate={step1}
                >
                    <input type="range" min={0} max={100} value={value} onChange={handleChange} className="range" />
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-3xl text-[#1e1e1e]">{value}</p>
                        <p className="text-[#1e1e1e] text-md -m-3">DVBrl/KWh</p>
                        <p className="text-[#1e1e1e] text-sm">*Competitive pricing attracts buyers, fostering a dynamic and fair exchange.</p>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button className="rounded-full bg-[#1e1e1e] px-8 py-2">
                            Next step
                        </button>
                    </div>

                </Step>
                <Step
                    step="2"
                    phrase="Select the amount of power do you have avaliable to sell"
                    //activate={step2}
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
    );
};

export default SellPower;
