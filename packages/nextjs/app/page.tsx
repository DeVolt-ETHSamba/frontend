"use client";


import MapSectionHomepage from "~~/components/MapSectionHomepage";
import { useEffect, useState } from "react";
import type { NextPage } from "next";

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
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-2 col-start-3 row-start-1">
            <div
              className="text-white p-4 rounded-3xl shadow-lg mb-4  flex flex-col flex-1 w-full h-full"
              style={{ backgroundImage: `url('/img1.png')`, backgroundSize: "cover" }}
            >
              <h1 className="h1-white">Average energy price: 0,88/kWh</h1>
            </div>
          </div>

          <div className="row-span-2 col-start-5 row-start-1">
            <div className="bg-[#D9D9D9] text-white p-4 rounded-3xl shadow-lg mb-4  flex flex-col flex-1 w-full h-full">
              <h1>Impactful Phrase Here</h1>
            </div>
          </div>

          <div className="col-span-2 row-span-2 col-start-4 row-start-3">
            <div
              className="bg-green-500 text-white p-4 rounded-3xl shadow-lg flex flex-col flex-1 w-full h-full bg-gradient-to-tr from-black to-[#14591F]"
              //   style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #000000 , #14591F)" }}
            >
              <h1 className="h1-white">Sell and Buy DeVolt Energy </h1>
            </div>
          </div>

          <div className="row-span-2 col-start-3 row-start-3">
            <div
              className="bg-green-500 text-white p-4 rounded-lg shadow-lg w-full h-full "
              style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #171313 , #292929)" }}
            >
              <h1 className="h1-white">Recharge With Renewable Energy</h1>
              {/* <img src="/devolt.svg" /> */}
            </div>
          </div>

          <div className="col-span-2 row-span-4 col-start-1 row-start-1">
            <div
              className="text-white p-4 shadow-lg rounded-[2rem] flex flex-col flex-1 w-full h-full  "
              style={{ backgroundImage: "linear-gradient(to right, #13FF2B, #9EFF52)" }}
            >
              <h1>Embracing Decentralized Energy Economy</h1>

              <h2 className="text-sm">Democratizing Power One Watt At A Time</h2>
            </div>
          </div>

          <div
            className="col-span-5 row-span-2 col-start-1 row-start-5 rounded-3xl p-6 pb-12"
            style={{
              backgroundImage: "linear-gradient(to right, #000000 , #14591F)",
            }}
          >
            <h1 className="h1-white mb-3">Nearest Charging Point</h1>
            <h3 className="h1-white mt-2 mb-2">Avenida rebouças, 3004</h3>
            <h3 className="h1-white mt-2 mb-2">Price 0,88/kWh</h3>
            <div className="relative bg-[#161616] rounded-full h-7  border-spacing-3 border-white">
              <div className="bg-[#13FF2B] h-7 rounded-full" style={{ width: `${progress}%` }}></div>
              <div className="absolute w-full flex justify-center items-center h-full">
                <span className="text-white mt-4">{progress}% </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapSectionHomepage/>
    </div>
  );
};

export default Home;
