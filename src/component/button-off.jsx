/* eslint-disable react/prop-types */
import { IoMdPower } from "react-icons/io";

export default function ButtonOff({ func, text }) {
  return (
    <button
      className="w-[45%] h-[100px] rounded-xl shadow-lg bg-white flex flex-col justify-center items-center gap-2 hover:shadow-sm hover:cursor-pointer hover:border-2 hover:border-green-500"
      onClick={() => func()}
    >
      <IoMdPower className="text-[2.5rem] text-red-500" />
      <p className="font-semibold text-gray-500">{text}</p>
    </button>
  );
}
