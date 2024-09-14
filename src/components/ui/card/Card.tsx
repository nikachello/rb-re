import { Bed } from "react-ionicons";

export function Card() {
  return (
    <div className="font-firago border rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/20 hover:cursor-pointer">
      <div className="relative max-w-[384px] max-h-[455px]">
        <img
          src="estates/home.png"
          alt="Estate Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-7 left-7 px-6 py-2 bg-white bg-opacity-75 bg-[#02152680] rounded-3xl px-3 py-2">
          <p className="text-white">იყიდება</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-2xl font-bold">80 000 ₾</p>
        <div className="flex items-center mt-2">
          <img
            className="w-4 h-4 mr-2 object-contain"
            src="icons/mapPin.png"
            alt="Location Icon"
          />
          <p>თბილისი, ი. ჭავჭავაძის 53</p>
        </div>
        <div className="flex space-x-4 mt-2">
          <div className="flex items-center">
            <Bed color={"#02152680"} />
            <span className="ml-2">2</span>
          </div>
          <div className="flex items-center">
            <img
              className="w-4 h-4 mr-2"
              src="icons/area.png"
              alt="Area Icon"
            />
            <span>2</span>
          </div>
          <div className="flex items-center">
            <img className="w-4 h-4 mr-2" src="icons/zip.png" alt="Zip Icon" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
