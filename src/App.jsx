/* eslint-disable react/prop-types */
import "./App.css";
import { GiGate } from "react-icons/gi";
import { PiGarage } from "react-icons/pi";
import { PiFanFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { GiEntryDoor } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { IoMdPower } from "react-icons/io";

function App() {
  const ipAddress = import.meta.env.VITE_IP_ADDRESS;
  // const CardToolsMain = ({ icons, text, link }) => {
  //   return (
  //     <div className="w-[43%] h-[130px] border-2 border-violet-400 rounded-xl shadow-lg bg-zinc-100 flex flex-col justify-center items-center gap-3 hover:cursor-pointer hover:border-pink-500">
  //       <Link to={link}>
  //         {icons}
  //         <p className="text-[.9rem] font-bold uppercase text-gray-500">
  //           {text}
  //         </p>
  //       </Link>
  //     </div>
  //   );
  // };

  const CardTools = ({ icons, text, link }) => {
    return (
      <div className="w-[43%] h-[85px] border-2 gap-1  rounded-xl shadow-lg bg-zinc-100 flex flex-col justify-center items-center  hover:cursor-pointer hover:border-teal-400">
        <Link to={link}>
          {icons}
          <p className="text-[.8rem] font-bold uppercase text-gray-500">
            {text}
          </p>
        </Link>
      </div>
    );
  };

  const handleAllControls = async (status) => {
    console.log("All controls", status);

    try {
      const res = await fetch(`${ipAddress}/${status}`);
      const text = await res.text();
      console.log(text);

      localStorage.setItem(
        "isDoor",
        JSON.stringify(status === "on" ? true : false)
      );
      localStorage.setItem(
        "isLamp",
        JSON.stringify({
          lr1: status === "on" ? true : false,
          lr2: status === "on" ? true : false,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-[100vh] max-h-max w-full  py-5 px-5">
      <div className="w-full">
        <h1 className="text-[1.2rem] tracking-[1px] font-bold uppercase ">
          smarthome
        </h1>
        <p className="text-[.9rem] ">
          Satu sentuhan untuk kehidupan{" "}
          <span className="font-bold text-orange-500">Modern</span>
        </p>
      </div>
      <div className="w-full h-max  mt-12">
        {/* <div className="w-full flex justify-between items-center ">
          <CardToolsMain
            icons={<GiGate className="text-[4rem] text-violet-500" />}
            text={"Gerbang"}
            link={"/gerbang"}
          />
          <CardToolsMain
            icons={<PiGarage className="text-[4rem] text-violet-500" />}
            text={"Garasi"}
          />
        </div> */}
        <div className="w-full mt-10 h-max flex justify-between items-center flex-wrap gap-3">
          <CardTools
            icons={<FaLightbulb className="text-[2.5rem] text-teal-500" />}
            text={"Lampu"}
            link={"/lampu"}
          />
          <CardTools
            icons={<GiEntryDoor className="text-[2.5rem] text-teal-500" />}
            text={"Pintu"}
            link={"/pintu"}
          />
        </div>
        <div className="w-full mt-10 flex justify-between items-center ">
          <button
            className="w-[45%] h-[100px] rounded-xl shadow-lg bg-white flex flex-col justify-center items-center gap-2 hover:shadow-sm hover:cursor-pointer hover:border-2 hover:border-green-500"
            onClick={() => handleAllControls("on")}
          >
            <BsFillLightningFill className="text-[2.5rem] text-green-500" />
            <p className="font-semibold text-gray-500">Power ON</p>
          </button>
          <button
            className="w-[45%] h-[100px] rounded-xl shadow-lg bg-white flex flex-col justify-center items-center gap-2 hover:shadow-sm hover:cursor-pointer hover:border-2 hover:border-red-500"
            onClick={() => handleAllControls("off")}
          >
            <IoMdPower className="text-[2.5rem] text-red-500" />
            <p className="font-semibold text-gray-500">Power OFF</p>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
