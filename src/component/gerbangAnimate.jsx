/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { GiGate } from "react-icons/gi";
import { PiGarage } from "react-icons/pi";
import { PiFanFill } from "react-icons/pi";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { GiOpenGate } from "react-icons/gi";

function App() {
  const [isFan, setIsFan] = useState(false);
  const [isDoor, setIsDoor] = useState(false);

  const [isLampu, setIsLampu] = useState(false);
  const [isGerbang, setIsGerbang] = useState(false);

  const [isLampuKamar, setIsLampuKamar] = useState({
    kamar1: false,
    kamar2: false,
  });

  const endpoint = "http://192.168.100.140";

  const handlePintu = async () => {
    console.log("ss");
    setIsDoor(!isDoor);
  };

  const handleFan = async () => {
    console.log(`${endpoint}/test`);
    setIsFan(!isFan);
  };

  const handleLampu = async (kamar) => {
    console.log(kamar);

    if (kamar == "on" || kamar == "off") {
      const res = await fetch(
        kamar == "on" ? `${endpoint}/lampu` : `${endpoint}/lampu-mati`
      );

      const text = await res.text();
      setIsLampu(text == "ON" ? true : false);

      setIsLampuKamar({
        kamar1: text == "ON" ? true : false,
        kamar2: text == "ON" ? true : false,
      });
      return;
    }

    const res = await fetch(`${endpoint}/lampu/${kamar}`);
    const text = await res.text();
    setIsLampuKamar({
      ...isLampuKamar,
      [`kamar${kamar}`]: text == "ON" ? true : false,
    });
  };

  const handleGerbang = async () => {
    const res = await fetch(`${endpoint}/gerbang`);

    const text = await res.text();

    setIsGerbang(text == "OPEN" ? true : false);
  };

  const CardTools = ({ icons, teks, status, func }) => {
    return (
      <div
        className={`w-[45%] h-[200px] rounded-2xl ${
          !status ? "border-2 border-purple-500" : "border-4 border-green-500"
        }  bg-slate-100 shadow-xl flex flex-col justify-center items-center relative cursor-pointer hover:border-2 hover:border-orange-500`}
      >
        <div
          className={`absolute top-2 right-3 w-2 h-2 rounded-full ${
            !status ? "bg-red-500" : "bg-green-500 animate-pulse"
          } `}
        ></div>
        {icons}
        <button
          onClick={func}
          className={`px-3 py-1 rounded-lg ${
            !status ? "bg-red-500" : "bg-green-500"
          } text-white text-[.8rem]`}
        >
          {status && teks === "kipas"
            ? "On"
            : !status && teks === "kipas"
            ? "Off"
            : !status
            ? `Buka ${teks}`
            : `Tutup ${teks}`}
        </button>

        {/* <p className="uppercase absolute bottom-3">{teks}</p> */}
      </div>
    );
  };

  return (
    <main className="min-h-[100vh] max-h-max w-full  py-5 px-3">
      <div className="w-full">
        <h1 className="text-[1.2rem] tracking-[1px] font-bold uppercase ">
          smarthome
        </h1>
        <p className="text-[.9rem] ">
          Satu sentuhan untuk kehidupan{" "}
          <span className="font-bold text-orange-500">Modern</span>
        </p>
      </div>
      <div className="w-full h-max mt-6 flex justify-center gap-8 items-center flex-col   flex-wrap lg:flex-row">
        {/* Lampu */}
        <div
          className={`lg:w-[45%] w-[90%] h-[200px] rounded-2xl ${
            !status ? "border-2 border-purple-500" : "border-4 border-green-500"
          }  bg-slate-100 shadow-xl flex flex-col justify-center items-center relative cursor-pointer hover:border-2 hover:border-orange-500`}
        >
          <div
            className={`absolute top-2 right-3 w-2 h-2 rounded-full ${
              !isLampu ? "bg-red-500" : "bg-green-500 animate-pulse"
            } `}
          ></div>
          {isLampu ? (
            <FaLightbulb
              size={60}
              className="text-yellow-400 mb-4 animate-pulse"
            />
          ) : (
            <FaRegLightbulb
              size={60}
              className="text-purple-500 mb-4 hover:fill-yellow-500 hover:animate-pulse"
            />
          )}
          <div className="w-full h-max  mb-2 flex items-center justify-center gap-2">
            <button
              onClick={() => handleLampu(1)}
              className={`px-3 py-1 rounded-lg ${
                !isLampuKamar.kamar1 ? "bg-red-500" : "bg-green-500"
              } text-white text-[.8rem] hover:bg-yellow-500`}
            >
              1
            </button>
            <button
              onClick={() => handleLampu(2)}
              className={`px-3 py-1 rounded-lg ${
                !isLampuKamar.kamar2 ? "bg-red-500" : "bg-green-500"
              } text-white text-[.8rem] hover:bg-yellow-500`}
            >
              2
            </button>
          </div>
          <div className="w-full flex items-center justify-center gap-2">
            <button
              onClick={() => handleLampu("on")}
              className={`px-3 py-1 rounded-lg  text-white text-[.8rem] ${
                !isLampu ? "bg-green-500" : "bg-green-400"
              }`}
            >
              Nyalakan semua
            </button>
            <button
              onClick={() => handleLampu("off")}
              className={`px-3 py-1 rounded-lg  text-white text-[.8rem] ${
                isLampu ? "bg-red-500" : "bg-red-400"
              }`}
            >
              Matikan semua
            </button>
          </div>
          {/* <p className="uppercase absolute top-0">Lampu</p> */}
        </div>

        {/*        pintu */}
        <div
          className={`lg:w-[45%] w-[90%] h-[200px] rounded-2xl ${
            !status ? "border-2 border-purple-500" : "border-4 border-green-500"
          }  bg-slate-100 shadow-xl flex flex-col justify-center items-center relative cursor-pointer hover:border-2 hover:border-orange-500`}
        >
          <div
            className={`absolute top-2 right-3 w-2 h-2 rounded-full ${
              !isLampu ? "bg-red-500" : "bg-green-500 animate-pulse"
            } `}
          ></div>
          <img
            src={isDoor ? "/open-door2.png" : "/door2.png"}
            alt="s"
            className="w-[120px] object-fill"
          />
          <button
            className="absolute top-0 left-0 bottom-0 right-0"
            onClick={handlePintu}
          ></button>
          {/* <div className="w-full h-max  mb-2 flex items-center justify-center gap-2">
            <button
              onClick={() => handleLampu(1)}
              className={`px-3 py-1 rounded-lg ${
                !isLampuKamar.kamar1 ? "bg-red-500" : "bg-green-500"
              } text-white text-[.8rem] hover:bg-yellow-500`}
            >
              1
            </button>
            <button
              onClick={() => handleLampu(2)}
              className={`px-3 py-1 rounded-lg ${
                !isLampuKamar.kamar2 ? "bg-red-500" : "bg-green-500"
              } text-white text-[.8rem] hover:bg-yellow-500`}
            >
              2
            </button>
          </div>
          <div className="w-full flex items-center justify-center gap-2">
            <button
              onClick={() => handleLampu("on")}
              className={`px-3 py-1 rounded-lg  text-white text-[.8rem] ${
                !isLampu ? "bg-green-500" : "bg-green-400"
              }`}
            >
              Nyalakan semua
            </button>
            <button
              onClick={() => handleLampu("off")}
              className={`px-3 py-1 rounded-lg  text-white text-[.8rem] ${
                isLampu ? "bg-red-500" : "bg-red-400"
              }`}
            >
              Matikan semua
            </button>
          </div> */}
          {/* <p className="uppercase absolute top-0">Lampu</p> */}
        </div>

        <CardTools
          icons={
            <PiFanFill
              size={60}
              className={`text-purple-500 mb-4 ${
                isFan && "fill-yellow-500 animate-spin"
              } `}
            />
          }
          teks="Kipas"
          status={isFan}
          func={handleFan}
        />
        <CardTools
          icons={
            isGerbang ? (
              <GiOpenGate size={80} className="text-purple-500 mb-4" />
            ) : (
              <GiGate size={80} className="text-purple-500 mb-4" />
            )
          }
          teks="Gerbang"
          status={isGerbang}
          func={handleGerbang}
        />
        <CardTools
          icons={<PiGarage size={60} className="text-purple-500 mb-4" />}
          teks="Garasi"
        />
      </div>
    </main>
  );
}

export default App;
