"use client";

import MapSectionHomepage from "~~/components/MapSectionHomepage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  //   const { address: connectedAddress } = useAccount();

  return (
    <div className="mt-24 w-full flex flex-col md:grid-cols-2 gap-4">
      <div className="mx-auto md:w-8/12 w-11/12 grid">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-2 col-start-3 row-start-1">
            <div
              className="text-white p-4 rounded-lg shadow-lg mb-4 h-[93%]"
              style={{ backgroundImage: `url('/img1.png')`, backgroundSize: "cover" }}
            >
              <h1 className="h1-white">Average energy price: 0,88/kWh</h1>
            </div>
          </div>

          <div className="row-span-2 col-start-5 row-start-1">
            <div className="bg-[#D9D9D9] text-white p-4 rounded-lg shadow-lg mb-4 h-[93%] ">
              <h1>Buy DeVolt Energy</h1>
            </div>
          </div>

          <div className="col-span-2 row-span-2 col-start-4 row-start-3">
            <div
              className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 h-[93%]"
              style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #000000 , #14591F)" }}
            >
              <h1 className="h1-white">Sell Your Power</h1>
            </div>
          </div>

          <div className="row-span-2 col-start-3 row-start-3">
            <div
              className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 h-[93%]"
              style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #171313 , #292929)" }}
            >
              <h1 className="h1-white">Charging Points:</h1>
              <img src="/devolt.svg" />
            </div>
          </div>

          <div className="col-span-2 row-span-4 col-start-1 row-start-1">
            <div
              className="text-white p-4 rounded-lg shadow-lg mb-4  h-[430px]"
              style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #13FF2B, #9EFF52)" }}
            >
              <h1>Embracing Decentralized Energy Economy</h1>

              <h2 className="text-sm">Democratizing Power One Watt At A Time</h2>
            </div>
          </div>
        </div>

        <div
          className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 w-full"
          style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #000000 , #14591F)" }}
        >
          <h1 className="h1-white">Sell Your Power</h1>
        </div>
      </div>
      <MapSectionHomepage/>
    </div>
  );
};

export default Home;
