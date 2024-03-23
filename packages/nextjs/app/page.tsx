"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  //   const { address: connectedAddress } = useAccount();

  return (
    <div className="m-24 ml-72 mr-72 flex flex-col md:grid-cols-2 gap-4">
      <div className="w-11/12 mx-auto grid">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-2 col-start-3 row-start-1">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 h-[93%] ">
              <h1 className="text-xl font-bold">1</h1>
            </div>
          </div>

          <div className="row-span-2 col-start-5 row-start-1">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 h-[93%] ">
              <h1 className="text-xl font-bold">2</h1>
            </div>
          </div>

          <div className="col-span-2 row-span-2 col-start-4 row-start-3">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 h-[93%]">
              <h1 className="text-xl font-bold">3</h1>
            </div>
          </div>

          <div className="row-span-2 col-start-3 row-start-3">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 h-[93%] ">
              <h1 className="text-xl font-bold">4</h1>
            </div>
          </div>

          <div className="col-span-2 row-span-4 col-start-1 row-start-1">
            <div
              className="text-white p-4 rounded-lg shadow-lg mb-4  h-[400px]"
              style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #13FF2B, #9EFF52)" }}
            >
              <h1>Embracing Decentralized Energy Economy</h1>

              <h2 className="text-sm">Democratizing Power One Watt At A Time</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
