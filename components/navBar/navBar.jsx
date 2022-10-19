import Link from "next/link";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[3%]  w-full">
      <div>
        <h1 className="">GFMOTORS</h1>
      </div>
      <div className="relative flex items-center justify-center w-full flex-wrap mb-3">
        <div className="flex border-2 rounded bg-white  md:mb-0 md:w-1/2">
          <input
            type={"text"}
            className="px-4 py-2 p-2 rounded-lg shadow-inner w-full"
            onChange={(e) => setFilter(e.target.value)}
          />
          <button className="flex items-center justify-center px-4 border-l">
            <svg
              className="w-6 h-6 text-gray-600 "
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Icon className="lg:hidden block h-6 w-6 cursor-pointer" path={mdiMenu} size={2} color={"white"} onClick={() => setOpen(!open)} />
      </div>
      <div className={`${open ? "block" : "hidden"} lg:max-w-full lg:flex lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex lg:justify-between">
        
          <Link className="lg:px-5 py-2 block" href={"/form"}>
            <button className="">Adicionar Veículo</button>
          </Link>
       
        
          <Link className="lg:px-5 py-2 block" href={"/favorite"}>
            <button>Favoritos</button>
          </Link>
       
        </div>
      </div>
    </nav>
  );
}
