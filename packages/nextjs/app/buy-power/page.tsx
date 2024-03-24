"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { BuyEnergy } from "~~/components/BuyEnergy";
import Map from "~~/components/Map";
import { StationData } from "~~/components/StationData";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "~~/components/ui/dialog";
import { LocationProvider } from "~~/contexts/LocationContext";
import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
import { MapSectionBuypage } from "~~/components/MapSectionBuypage";

const SellPower: NextPage = () => {


  const stations = [
    {
      id: 1,
      x: -23.5571341,
      y: -46.7043563,
      address: "Rua piracanjuba, 240",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 12,
      compatibility: "DC CCS2, CHAdeMO",
      averagePrice: 6.4,
      stationName: "AABB",
    },
    {
      id: 2,
      x: -23.5561341,
      y: -46.7030563,
      address: "Rua piracanjuba, 242",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 30,
      compatibility: "CHAdeMO, AC Type 2",
      averagePrice: 7.1,
      stationName: "CCDD",
    },
    {
      id: 3,
      x: -23.5591341,
      y: -46.7001563,
      address: "Rua piracanjuba, 243",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 93,
      compatibility: "CHAdeMO, AC Type 2",
      averagePrice: 6.99,
      stationName: "EEFF",
    },
    {
      id: 4,
      x: -23.5553341,
      y: -46.7091563,
      address: "Rua piracanjuba, 232",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD, BMW",
      availableEnergyPercentage: 51,
      compatibility: "AC Type 2",
      averagePrice: 6.5,
      stationName: "GGHH",
    },
    {
      id: 5,
      x: -22.979455,
      y: -43.21523,
      address: "Pier da Lagoa Rodrigo de Freitas",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD",
      availableEnergyPercentage: 51,
      compatibility: "AC Type 2",
      averagePrice: 1.2,
      stationName: "IIJJ",
    },
    {
      id: 6,
      x: -22.980095,
      y: -43.216255,
      address: "Av. Borges de Medeiros, 829 - Lagoa, Rio de Janeiro - RJ, 23430-042",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD",
      availableEnergyPercentage: 51,
      compatibility: "CHAdeMO, AC Type 2",
      averagePrice: 1.3,
      stationName: "KKLL",
    },
    {
      id: 7,
      x: -22.978384,
      y: -43.218378,
      address: "Av. Borges de Medeiros, 997 - Lagoa, Rio de Janeiro - RJ, 22430-041",
      maxVoltage: 45,
      availablePlugs: "Tipo S2, BYD",
      availableEnergyPercentage: 51,
      compatibility: "DC CCS2, CHAdeMO",
      averagePrice: 1.22,
      stationName: "MMNN",
    },
  ];

  interface Station {
    id: number;
    x: number;
    y: number;
    address: string;
    maxVoltage: number;
    availablePlugs: string;
    availableEnergyPercentage: number;
    compatibility: string;
    averagePrice: number;
    stationName: string;
  }

  const [selectedStation, setSelectedStation] = useState<Station>({
    id: 0,
    x: 0,
    y: 0,
    address: "",
    maxVoltage: 0,
    availablePlugs: "",
    availableEnergyPercentage: 0,
    compatibility: "",
    averagePrice: 0,
    stationName: ""
  });
  const [value, setValue] = useState(0);
  const [stationName, setStationName] = useState("");
  const [address, setAddress] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [averagePrice, setAveragePrice] = useState(0);
  const [availableEnergyPercentage, setAvailableEnergyPercentage] = useState(0);
  const [openPopUp, setOpenPopUp] = useState(false);

  const [disableButton, setDisableButton] = useState("disabled bg-[#7c7c7c] pointer-events-none");

  useEffect(() => {
    if (selectedStation.id == 0) return;
    window.scrollBy({
      behavior: "smooth",
      top: 450,
    });

    if(value > 0 && stationName !== "" && address !== "" && compatibility !== "" && averagePrice > 0 && availableEnergyPercentage > 0) {
       setDisableButton("bg-[#37e231]");
    }

  }, [selectedStation, value, stationName, compatibility, averagePrice, availableEnergyPercentage, address])

  return (
      <LocationProvider>
        <GetUserGeolocationDialog />
        <div className="flex flex-col mx-8 my-2">
          <h1 className="text-neutral text-5xl my-8">Choose your charger point</h1>
          <div className="p-4 px-8 rounded-3xl bg-black">
          < MapSectionBuypage
            roundedTopCorners={true}
            roundedBottomCorners={true}
            stations={stations}
            width={"95%"}
            setSelectedStation={setSelectedStation}
            />
            <div className="bg-[#010101] w-full -mt-12 z-0 ml-8 py-8 rounded-lg">
              <div className="flex gap-x-5 w-full my-4 mx-8 divide-x">
                <div className="w-[30%]">
                  <StationData
                    selectedStation={selectedStation}
                    setStationName={setStationName}
                    setAddress={setAddress}
                    setCompatibility={setCompatibility}
                    setAveragePrice={setAveragePrice}
                    setAvailableEnergyPercentage={setAvailableEnergyPercentage}
                  />
                </div>
                <div className="w-[70%] pl-12">
                  <BuyEnergy
                    value={value}
                    setValue={setValue}
                    averagePrice={averagePrice}
                  >
                    <button
                      onClick={() => setOpenPopUp(true)} 
                      className={`rounded-full px-8 py-2 text-[#1e1e1e] font-bold hover:scale-95 duration-100 ${disableButton}`}>
                      Buy energy
                    </button>
                  </BuyEnergy>
                </div>
              </div>
            </div>
            <Dialog open={openPopUp} >
              <DialogContent className="bg-[#1a1a1a] border-none shadow-lg">
                <DialogTitle className="text-3xl flex text-white pb-2 gap-3"> Review you purchase:</DialogTitle>
                <DialogDescription className="leading-[1px] text-center">
                  <p className="text-xl font-semibold">Selected Station:</p>
                  <p>{stationName}</p>
                  <p className="text-xl font-semibold">Address:</p>
                  <p>{address}</p>
                  <p className="pt-6 text-xl font-semibold">Price for each Kw:</p>
                  <p>{averagePrice} Voltz/Kw</p>
                  <p className="pt-6 text-xl font-semibold">Amount of Kw you are buying:</p>
                  <p>{value} Kws</p>
                  <p className="pt-6 text-xl font-semibold">Total to be paid:</p>
                  <p>{value * averagePrice} Kws</p>
                </DialogDescription>
                <button className="bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition">
                  Place Bid
                </button>
                <button
                  onClick={() => setOpenPopUp(false)}
                  className="bg-[#444] text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Go back
                </button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </LocationProvider>
  );
};

export default SellPower;
