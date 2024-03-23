import React, { useEffect, useState } from "react";
import { useGeolocation } from "@uidotdev/usehooks";
import { LocateIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/ui/dialog";

interface props {
  setUserLocationProp: (location:number[]) => void;

}

const GetUserGeolocationDialog = ({setUserLocationProp}:props) => {

  const geolocation = useGeolocation();

  const [userLocation, setUserLocation]  = useState([0,0])
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if ((geolocation.latitude && geolocation.longitude)) {
      console.log("okay");
      setDialogOpen(false);
      setUserLocationProp([geolocation.latitude, geolocation.longitude])
    } else if (userLocation[0] && userLocation[1]){
      setDialogOpen(false);
      setUserLocationProp(userLocation)
    } else {
      setDialogOpen(true);
    }
  }, [geolocation, userLocation]);

  const ignoreGeolocation = () => {
    setUserLocation([-23.5571341,-46.7043563])
  }

  return (
    <>
      <Dialog open={isDialogOpen}>
        <DialogContent className="bg-[#1a1a1a] border-none shadow-lg">
            <DialogTitle className="text-3xl flex text-white pb-2 gap-3"><LocateIcon color="#0f0" size={37}></LocateIcon> Allow access to your location</DialogTitle>
            <DialogDescription>
              Don't worry, we won't store your location data. We only need to know your location to show you the nearest chargers.
            </DialogDescription>
            <button onClick={ignoreGeolocation} className="bg-[#333] text-[#999] font-semibold px-4 py-2 rounded-lg hover:scale-105 transition">
              I don't care, use a sample location
            </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetUserGeolocationDialog;
