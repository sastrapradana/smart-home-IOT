/* eslint-disable react/prop-types */
import { BsFillLightningFill } from "react-icons/bs";

export default function ButtonOn({ func, text }) {
  return (
    <button
      className="w-[45%] h-[100px] rounded-xl shadow-lg bg-white flex flex-col justify-center items-center gap-2 hover:shadow-sm hover:cursor-pointer hover:border-2 hover:border-green-500"
      onClick={() => func()}
    >
      <BsFillLightningFill className="text-[2.5rem] text-green-500" />
      <p className="font-semibold text-gray-500">{text}</p>
    </button>
  );
}
