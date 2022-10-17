import Link from "next/link";

export default function NavBar() {
  return (
    <nav className=" md:flex md:items-center md:justify-between shadow-lg md:pb-4 ">
      <div className="flex items-center justify-center mb-4">
        <h1 className="leading-none text-2xl text-grey-darkest font-extrabold font px-3">
            GFMOTORS
        </h1>
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
      <div className=" font-extrabold flex items-center justify-center mb-4">
        <Link href={"/form"}>
          <button className="w-40">Adicionar Veículo</button>
        </Link>
      </div>
      <div className="font-extrabold flex items-center justify-center mb-4">
        <Link href={"/favorite"}>
          <button>Favoritos</button>
        </Link>
      </div>
    </nav>
  );
}
