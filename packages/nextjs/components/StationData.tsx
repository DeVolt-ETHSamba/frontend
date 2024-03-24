import React, { useEffect } from 'react';
import Image from "next/image";

interface buyEnergyProps {
    selectedStation: any;
    setStationName: any;
    setAddress: any;
    setCompatibility: any;
    setAveragePrice: any;
    setAvailableEnergyPercentage: any;
}

export const StationData = ({ selectedStation, setStationName, setAddress, setCompatibility, setAveragePrice, setAvailableEnergyPercentage }: buyEnergyProps) => {
    
    useEffect(() => {
        setStationName(selectedStation["stationName"]);
        setAddress(selectedStation["address"]);
        setCompatibility(selectedStation["compatibility"]);
        setAveragePrice(selectedStation["averagePrice"]);
        setAvailableEnergyPercentage(selectedStation["availableEnergyPercentage"]);    
    }, [selectedStation]);


    return (
        <>
            <p className="text-3xl text-[#37e231] font-bold">Estation {selectedStation["stationName"] || "---"}</p>
            <div className="flex gap-2 items-center my-4">
                <Image src="./pin.svg" alt="ttt" width={40} height={40} />
                <p className="font-bold">Address</p><span>{selectedStation["address"] || "---"}</span>
            </div>
            <div className="flex gap-2 items-center my-4">
                <Image src="./charger.svg" alt="ttt" width={40} height={40} />
                <b>Compatibility</b><span>{selectedStation["compatibility"] || "---"}</span>
            </div>
            <div className="flex gap-2 items-center my-4">
                <Image src="./wallet.svg" alt="ttt" width={40} height={40} />
                <b>Price per DVBrl/KWh</b><span>{selectedStation["averagePrice"] || "---"}</span>
            </div>
            <div className="flex gap-2 items-center my-4">
                <Image src="./capacity.svg" alt="ttt" width={40} height={40} />
                <p className="font-bold">Capacity</p><span>R${selectedStation["availableEnergyPercentage"] || "---"}</span><span>%</span>
            </div>
        </>
    );
};
