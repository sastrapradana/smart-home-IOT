/* eslint-disable react/prop-types */
import Nav from "../component/nav";
import ButtonOff from "../component/button-off";
import ButtonOn from "../component/button-on";

export default function AppShel({ title, desc, children, funcON, funcOFF }) {
  return (
    <main className="w-full min-h-[100vh] max-h-max p-4">
      <Nav title={title} desc={desc} />
      <section className="w-full p-2 mt-10">
        {children}
        <div className="w-full mt-10 flex justify-between items-center ">
          <ButtonOn
            func={funcON}
            text={title === "Pintu" ? "Open" : "Power ON"}
          />
          <ButtonOff
            func={funcOFF}
            text={title === "Pintu" ? "Close" : "Power OFF"}
          />
        </div>
      </section>
    </main>
  );
}
