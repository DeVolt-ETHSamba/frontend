import React, { useState } from 'react';
import Map from "~~/components/Map";
import { useLocation } from "~~/contexts/LocationContext";

interface mapSectionBuypageProps {
    roundedTopCorners: boolean;
    roundedBottomCorners: boolean;
    stations: any;
    width: string;
    setSelectedStation: any;
  }

export const MapSectionBuypage = ({roundedTopCorners, roundedBottomCorners, stations, width, setSelectedStation}: mapSectionBuypageProps) => {
    const { location, updateLocation } = useLocation();

  return (
    <>
        <p className="text-3xl ml-8 pt-4 font-bold">Charger points:</p>
        <p className="text-xl font-medium pb-2 ml-8">Select the station you want to buy your power</p>
        <div className="md:col-span-5 md:row-span-1 mx-auto md:col-start-1 md:row-start-3 rounded-3xl mb-6">
            <Map
            userLocation={location}
            roundedTopCorners={roundedTopCorners}
            roundedBottomCorners={roundedBottomCorners}
            stations={stations}
            center={location}
            width={width}
            setSelectedStation={setSelectedStation}
            />
        </div>
    </>
  ); 
};
