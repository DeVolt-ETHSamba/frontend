"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import MapSectionHomepage from "~~/components/MapSectionHomepage";

const Home: NextPage = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-24 w-full flex flex-col md:grid-cols-2 gap-4">
      <div className="mx-auto md:w-10/12 w-11/12 grid">
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4">
          <div className="md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-1">
            <div
              className="text-white p-4 rounded-3xl shadow-lg mb-4  flex flex-col flex-1 w-full h-full"
              style={{ backgroundImage: `url('/img1.png')`, backgroundSize: "cover" }}
            >
              <h1 className="h1-white">Average energy price: 0,88/kWh</h1>
            </div>
          </div>

          <div className="md:row-span-1 md:col-start-5 md:row-start-1">
            <div className="bg-[#D9D9D9] text-white p-4 rounded-3xl shadow-lg mb-4  flex flex-col flex-1 w-full h-full">
              <h1>Impactful Phrase Here</h1>
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-1 md:col-start-4 md:row-start-2">
            <div className="bg-green-500 text-white p-4 rounded-3xl shadow-lg flex flex-col flex-1 w-full h-full bg-gradient-to-tr from-black to-[#14591F]">
              <h1 className="h1-white">Sell and Buy DeVolt Energy </h1>
            </div>
          </div>

          <div className="md:row-span-1 md:col-start-3 md:row-start-2">
            <div
              className="bg-green-500 text-white p-4 rounded-lg shadow-lg w-full h-full "
              style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #171313 , #292929)" }}
            >
              <h1 className="h1-white">Recharge With Renewable Energy</h1>
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1">
            <div
              className="text-white p-4 shadow-lg rounded-[2rem] flex flex-col flex-1 w-full h-full  "
              style={{ backgroundImage: "linear-gradient(to right, #13FF2B, #9EFF52)" }}
            >
              <h1>Embracing Decentralized Energy Economy</h1>

              <h2 className="text-sm">Democratizing Power One Watt At A Time</h2>
            </div>
          </div>
        </div>
      </div>
      <MapSectionHomepage />
    </div>
  );
};

export default Home;
