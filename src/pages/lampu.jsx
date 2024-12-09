/* eslint-disable react/prop-types */

// import { FaLightbulb } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

import { useEffect, useState } from "react";
import AppShel from "../component/app-shell";

export default function Lampu() {
  // const [isLamp, setIsLamp] = useState({
  //   lr1: false,
  //   lr2: true,
  //   lr3: true,
  //   lr4: true,
  // });

  const [isLamp, setIsLamp] = useState(() => {
    const storedLamp = localStorage.getItem("isLamp");
    return storedLamp !== null
      ? JSON.parse(storedLamp)
      : {
          lr1: false,
          lr2: true,
          lr3: true,
          lr4: true,
        };
  });

  const areAllLampsOn = () => {
    return Object.values(isLamp).every((status) => status === true);
  };

  const toggleLampLr = (lr) => {
    setIsLamp((prevLamp) => ({
      ...prevLamp,
      [lr]: !prevLamp[lr],
    }));
  };

  const toggleLamp = (status) => {
    setIsLamp({
      lr1: status,
      lr2: status,
      lr3: status,
      lr4: status,
    });
  };

  useEffect(() => {
    localStorage.setItem("isLamp", JSON.stringify(isLamp));
  }, [isLamp]);

  const Lamp = ({ ruang, status }) => {
    return (
      <div className="w-max flex flex-col items-center gap-2">
        <button
          className="w-max h-max p-1 rounded-full shadow-lg bg-white hover:cursor-pointer hover:shadow-sm"
          onClick={() => toggleLampLr("lr" + ruang)}
        >
          <div
            className={`w-[50px] h-[50px] rounded-full  flex justify-center items-center ${
              status ? "bg-yellow-500 " : "bg-white"
            }`}
          >
            <HiOutlineLightBulb
              className={`text-[2rem] ${
                status ? "text-white" : "text-gray-500"
              }`}
            />
          </div>
        </button>
        <p className={`text-gray-500 font-semibold text-[.9rem]`}>LR {ruang}</p>
      </div>
    );
  };

  return (
    <AppShel
      title={"Lampu"}
      desc={"Kontrol Lampu"}
      funcON={() => toggleLamp(true)}
      funcOFF={() => toggleLamp(false)}
    >
      <section className="-mt-7">
        <div
          className={`w-[230px] h-[230px] m-auto rounded-full  border-4   p-1 flex justify-center items-center ${
            areAllLampsOn() ? "border-green-500" : "border-red-500"
          }`}
        >
          <div
            className={`w-[200px] h-[200px] m-auto rounded-full  shadow-lg flex justify-center items-center hover:shadow-sm ${
              areAllLampsOn() ? "bg-yellow-500" : "bg-white"
            }`}
          >
            <img
              src="/lamp-off.png"
              alt="lamp"
              className="w-[50%] object-fill"
            />
          </div>
        </div>
        <div className="w-full mt-7 flex justify-between items-center">
          <Lamp ruang="1" status={isLamp.lr1} />
          <Lamp ruang="2" status={isLamp.lr2} />
          <Lamp ruang="3" status={isLamp.lr3} />
          <Lamp ruang="4" status={isLamp.lr4} />
        </div>
      </section>
    </AppShel>
  );
}
