"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import MapSectionHomepage from "~~/components/MapSectionHomepage";
import { LocationProvider, useLocation } from "~~/contexts/LocationContext";
import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
type ChartData = {
  date: string;
  value: number;
};

const Home: NextPage = () => {

  const [progress, setProgress] = useState<number>(0);
  const data: ChartData[] = [
    { date: "15 Nov", value: 0.8 },
    { date: "16 Nov", value: 0.2 },
    { date: "17 Nov", value: 0.62 },
    { date: "18 Nov", value: 0.91 },
    { date: "19 Nov", value: 0.5 },
  ];

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
    <LocationProvider>
      <GetUserGeolocationDialog
      />
      <div className="mt-24 w-full flex flex-col md:grid-cols-2 gap-4">
        <div className="mx-auto md:w-10/12 w-11/12 grid">
          <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4">
            <div className="md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-1">
              <div
                className="relative text-white p-4 rounded-3xl shadow-lg mb-4 flex flex-col w-full h-full"
                style={{ backgroundImage: `url('/img1.png')`, backgroundSize: "cover" }}
              >
                {/* Texto com um z-index mais alto */}
                <h1 className="h1-white-big z-10 relative">Average energy price: 0,88/kWh</h1>
                {/* Gráfico com z-index mais baixo para ficar atrás do texto */}
                <div className="absolute left-0 right-0 bottom-0  h-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <XAxis
                        dataKey="date"
                        stroke="transparent"
                        tick={{ fill: "white" }}
                        textAnchor="start"
                        height={30}
                        interval="preserveStartEnd"
                        tickMargin={10}
                      />
                      {/* make typescript ignore the line under */}
                      {/* @ts-ignore */}
                      <Tooltip />
                      {/* @ts-ignore */}
                      <Line type="monotone" dataKey="value" stroke="#13FF2B" strokeWidth={4} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="md:row-span-1 md:col-start-5 md:row-start-1">
              <div className="bg-[#D9D9D9] text-white p-4 rounded-3xl shadow-lg mb-4  flex flex-col flex-1 w-full h-full">
                <h1>Decentralize Power: Energize with Blockchain.</h1>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 md:col-start-4 md:row-start-2">
              <div className="bg-green-500 text-white p-4 rounded-3xl shadow-lg flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-black to-[#14591F]">
                <h1 className="h1-white-big mb-4">Sell and Buy DeVolt Energy</h1>
                <div className="flex space-x-4">
                  <button className="font-semibold text-xl bg-primary rounded-lg text-black px-6 py-2 transition hover:scale-105">
                    Buy Energy
                  </button>
                  <button className="font-medium text-xl bg-[#161616] rounded-lg text-white px-8 py-3 transition hover:scale-105  border-gray-100  border-2">
                    Sell Energy
                  </button>
                </div>
              </div>
            </div>

            <div className="md:row-span-1 md:col-start-3 md:row-start-2">
              <div
                className="bg-green-500 text-white p-4 rounded-lg shadow-lg w-full h-full "
                style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #171313 , #292929)" }}
              >
                <h1 className="h1-white">Recharge With Renewable Energy</h1>
                <img src="/lightning.png" className="float-left" alt="" />
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 ">
              <div
                className="text-white p-4 shadow-lg rounded-[2rem] flex flex-col flex-1 w-full h-full  "
                style={{ backgroundImage: "linear-gradient(to right, #13FF2B, #9EFF52)" }}
              >
                <h1 className="h1-big p-5">Embracing Decentralized Energy Economy</h1>

                <h2 className="text-sm mt-7">
                  At DeVolt, our core mission is to dismantle the centralized paradigms of energy trade. We enable every
                  household and business to take control of their energy destiny by offering a platform where they can
                  trade energy assets directly. Join us to be part of a revolution that powers homes, supports
                  communities, and sustains the planet with clean, peer-to-peer energy transactions.
                </h2>
              </div>
            </div>
            <div className="md:col-span-5 md:row-span-1 md:col-start-1 md:row-start-3 rounded-3xl mb-6">
              <MapSectionHomepage />
            </div>
          </div>
        </div>
      </div>
    </LocationProvider>
  );
};

export default Home;
