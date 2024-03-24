import { useEffect, useState } from "react";
import Image from "next/image";
import Map from "~~/components/Map";
import { Bid } from "~~/components/Bid";

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
  {
    id: 5,
    x: -22.979455,
    y: -43.215230,
    address: "Pier da Lagoa Rodrigo de Freitas",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD",
    availableEnergyPercentage: 51,
  },
  {
    id: 6,
    x: -22.980095,
    y: -43.216255,
    address: "Av. Borges de Medeiros, 829 - Lagoa, Rio de Janeiro - RJ, 23430-042",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD",
    availableEnergyPercentage: 51,
  },
  {
    id: 7,
    x: -22.978384,
    y: -43.218378,
    address: "Av. Borges de Medeiros, 997 - Lagoa, Rio de Janeiro - RJ, 22430-041",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD",
    availableEnergyPercentage: 51,
  },
];

interface Props {
  isActive: boolean;
  children: React.ReactNode;
  setSelectedStation: (station: Station) => void;
  selectedStation: Station;
}

const SellFirstStep = ({ isActive, children, setSelectedStation, selectedStation }: Props) => {

  const blur = isActive ? "" : "blur-[6px] pointer-events-none";
  const background = isActive ? "bg-black" : "bg-[#000]";
  const [mapHeight, setMapHeight] = useState("550px");
  let titleCss = "text-3xl ml-20 pt-4 font-bold";
  titleCss += isActive ? "" : " text-black";
  let subtitleCss = "text-xl font-medium pb-2 ml-20 ";
  subtitleCss += isActive ? "" : " hidden";

  useEffect(() => {
    if (isActive) {
      setMapHeight("550px");
    } else {
      setMapHeight("0px");
    }
  }, [isActive]);

  return (
    <div className={`p-4 px-8 rounded-3xl ${background} transition`}>
      <div className={`${blur} `}>
        <p className={titleCss}>#1 Step:</p>
        <p className={subtitleCss}>Select the station you want to sell your power to</p>
        <div className=" mx-auto rounded-3xl mb-6">
          <Map
            roundedTopCorners={true}
            roundedBottomCorners={true}
            stations={stations}
            center={[-23.5571341, -46.7043563]}
            userLocation={[-23.5581341, -46.7043563]}
            width={"95%"}
            height={mapHeight}
            setSelectedStation={setSelectedStation}
            hidden={!isActive}
          />
        </div>
        <div className=" w-full -mt-12 z-0 py-12 rounded-lg">
          <div className="flex gap-x-5 w-full m-8 divide-x">
            <div className="w-[30%] text-lg ">
              <p className="text-3xl text-[#37e231] font-bold">Auction status</p>
              <div className="flex gap-2 items-center my-4">
                <Image src="./wallet.svg" alt="ttt" width={40} height={40} />
                <p className="font-bold">
                  Lowest price bid: <span className="font-normal">{"  ---"}</span>{" "}
                </p>
              </div>
              <div className="flex gap-2 items-center my-4">
                <Image src="./capacity.svg" alt="ttt" width={40} height={40} />
                <p className="font-bold">
                  Energy amount offered: <span className="font-normal">{selectedStation.availableEnergyPercentage || "  ---"}</span>{" "}
                </p>
              </div>
              <div className="flex gap-2 items-center my-4">
                <Image src="./pin.svg" alt="ttt" width={40} height={40} />
                <p className="font-bold">
                  Station address: <span className="font-normal">{selectedStation.address || "  ---"}</span>{" "}
                </p>
              </div>
            </div>
            <div className="w-[70%] px-8">
              <p className="text-3xl text-[#37e231] font-bold backdrop-blur-lg">Last bids</p>
              <div className="grid grid-cols-4 gap-3 w-[95%]">
                <Bid price={0.5} wallet="0x000000000000000000" quantity={10} />
                <Bid price={0.5} wallet="0x000000000000000000" quantity={10} />
                <Bid price={0.5} wallet="0x000000000000000000" quantity={10} />
                <Bid price={0.5} wallet="0x000000000000000000" quantity={10} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-2">{children}</div>
      </div>
    </div>
  );
};

export default SellFirstStep;
