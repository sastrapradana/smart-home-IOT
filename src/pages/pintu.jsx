import { useEffect, useState } from "react";
import AppShel from "../component/app-shell";

export default function Pintu() {
  const [isDoor, setIsDoor] = useState(() => {
    const savedIsDoor = localStorage.getItem("isDoor");
    return savedIsDoor !== null ? JSON.parse(savedIsDoor) : false;
  });

  const handlePintu = async () => {
    setIsDoor(!isDoor);
  };

  useEffect(() => {
    localStorage.setItem("isDoor", JSON.stringify(isDoor));
  }, [isDoor]);

  return (
    <AppShel
      title={"Pintu"}
      desc={"Pintu ruangan"}
      funcON={handlePintu}
      funcOFF={handlePintu}
    >
      <section className="w-full h-[300px]  flex justify-center items-center">
        <img
          src={`/door-${isDoor ? "open" : "close"}.png`}
          alt="door"
          className="h-[300px]"
        />
      </section>
    </AppShel>
  );
}
