import { Button } from "ui";

export const Navbar = () => {
  return (
    <header
      className="font-serif uppercase shadow-sm sticky top-0 w-full backdrop-filter
        backdrop-blur bg-opacity-50 z-50"
    >
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a className="p-2 bg-gray-200 rounded-lg text-gray-500 hover:text-gray-700 text-xl" href="">H.G</a>
          </div>

          <nav className="hidden space-x-8 text-xl font-medium md:flex">
            <a
              className="text-gray-500 hover:text-amber-600 transition-all duration-100"
              href=""
            >
              Projects
            </a>
            <a
              className="text-gray-500 hover:text-amber-600 transition-all duration-100"
              href=""
            >
              About
            </a>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">

            <a
              className="inline-block px-4 py-2 text-xl font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
              href="">
              Stay in touch
            </a>
          </div>

          <details className="md:hidden group">
            <summary
              className="flex items-center p-2 text-gray-600 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </summary>

            <nav className="absolute top-20 left-0 m-auto flex flex-col justify-start items-center
        bg-white h-screen w-screen my-8">
              <a
                href=""
                className="flex items-center my-4 text-gray-500 hover:text-gray-700"
              >
                <span className="ml-3 text-5xl font-medium">Projects</span>
              </a>
              <a
                href=""
                className="flex items-center my-4 text-gray-500 hover:text-gray-700"
              >
                <span className="ml-3 text-5xl font-medium">About</span>
              </a>
              <a
                className="inline-block my-4 px-4 py-2 text-5xl font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
                href="">
                Stay in touch
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
};
