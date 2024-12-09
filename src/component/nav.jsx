/* eslint-disable react/prop-types */
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Nav({ title, desc }) {
  return (
    <div className="w-full ">
      <Link to={"/"}>
        <TiHome className="text-[1.4rem] cursor-pointer text-teal-500" />
      </Link>
      <div className="w-full mt-2">
        <h1 className="text-[1.2rem]  font-bold uppercase ">{desc}</h1>
        <p className="text-[.9rem] ">
          Kontrol <span className="font-bold text-orange-500">{title}</span>
        </p>
      </div>
    </div>
  );
}
