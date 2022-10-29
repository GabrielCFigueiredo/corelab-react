import Link from "next/link";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

export default function NavBar({ setFilter, children }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-red-500 flex text-white items-center justify-between px-[3%] flex-wrap">
      <div>
        <span>GFMOTORS</span>
      </div>
      <div>
        <Icon
          className="lg:hidden block h-6 w-6 cursor-pointer"
          path={mdiMenu}
          size={2}
          color={"white"}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } lg:flex  lg:max-w-full lg:items-center lg:justify-center w-full`}
      >
        <div className="relative flex items-center justify-center w-full flex-wrap mb-3">
          <div className="flex border-2 rounded bg-white  md:mb-0 md:w-1/2">
            <input
              type={"text"}
              className=" rounded-lg block p-4 w-full text-sm text-gray-900 fs- bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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

        <div className="flex lg:flex-row flex-col relative">
          <Link
            className="block lg:inline-block hover:text-white"
            href={"/"}
          >
            <button>Home</button>
          </Link>
          <Link className="block lg:inline-block " href={"/form"}>
            <button className="">Adicionar Veículo</button>
          </Link>

          <Link
            className="block lg:inline-block hover:text-white"
            href={"/favorite"}
          >
            <button>Favoritos</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}