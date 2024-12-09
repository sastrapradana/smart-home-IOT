import Nav from "../component/nav";
import { useEffect, useState } from "react";
import { BsFan } from "react-icons/bs";
import ButtonOff from "../component/button-off";
import ButtonOn from "../component/button-on";

export default function Kipas() {
  const [isFan, setIsFan] = useState(() => {
    const savedIsFan = localStorage.getItem("isFan");
    return savedIsFan !== null ? JSON.parse(savedIsFan) : false;
  });

  const toogleFan = async () => {
    setIsFan(!isFan);
  };

  useEffect(() => {
    localStorage.setItem("isFan", JSON.stringify(isFan));
  }, [isFan]);

  return (
    <main className="w-full min-h-[100vh] max-h-max p-4">
      <Nav title={"Kipas"} desc={"Kipas ruangan"} />
      <section className="w-full p-2 mt-10">
        <div
          className={`w-[230px] h-[230px] m-auto rounded-full mt-5 border-4   p-1 flex justify-center items-center ${
            isFan ? "border-green-500" : "border-red-500"
          }`}
        >
          <BsFan
            className={`text-[20rem] ${
              isFan ? "text-green-500 animate-spin" : "text-red-500"
            }`}
          />
        </div>

        <div className="w-full mt-10 flex justify-between items-center ">
          <ButtonOn func={toogleFan} text={"Power OFF"} />
          <ButtonOff func={toogleFan} text={"Power OFF"} />
        </div>
      </section>
    </main>
  );
}
