import Map from "./Map";
import { Progress } from "./ui/progress";
const stations = [
  {
    x: -23.5571341,
    y: -46.7043563,
    address: "Rua piracanjuba, 240",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 12,
  },
  {
    x: -23.5561341,
    y: -46.7030563,
    address: "Rua piracanjuba, 242",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 30,
  },
  {
    x: -23.5591341,
    y: -46.7001563,
    address: "Rua piracanjuba, 243",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 93,
  },
  {
    x: -23.5553341,
    y: -46.7091563,
    address: "Rua piracanjuba, 232",
    maxVoltage: 45,
    availablePlugs: "Tipo S2, BYD, BMW",
    availableEnergyPercentage: 51,
  },
];

const MapSectionHomepage = () => {
  return (
    <div className="mx-auto text-center">
      <p className="mx-auto font-bold text-5xl mt-10 mb-10">Stations</p>
      <Map
        stations={stations}
        center={[-23.5571341, -46.7043563]}
        userLocation={[-23.5581341, -46.7043563]}
        showAuctionButton={false}
      />
      <div
        className="bg-green-500 text-white p-4 rounded-lg shadow-lg mt-4 w-full flex justify-around items-center"
        style={{ borderRadius: "25px", backgroundImage: "linear-gradient(to right, #000000 , #14591F)" }}
      >

        <h1 className="text-5xl text-white">Nearest to you:</h1>
        <div className="leading-[0]">
            <p className="text-2xl font-bold">Piracanjuba st., 240 <span className="font-normal text-xl">2.4km</span></p>
            <p className="text-lg font-semibold">Energy available:</p>
            <Progress value={21} className="bg-gray-100 "/>
            <p className="text-xl">21% (12 A/h)</p>
            <div className="flex gap-4">
                <button className="font-semibold text-xl bg-primary rounded-lg text-black px-6 py-2 transition hover:scale-105">
                    Navigate
                </button>
                                <button className="font-medium text-xl bg-gray-200 rounded-lg text-black px-6 py-2 transition hover:scale-105">
                    More Information
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MapSectionHomepage;
