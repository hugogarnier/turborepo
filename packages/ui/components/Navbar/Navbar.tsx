import { Button } from "ui";

const Menu = ({ title, href }) => {
  return (
    <a
      className="text-gray-500 hover:text-amber-600 transition-all duration-100"
      href={href}
    >
      {title}
    </a>
  );
};

export const Navbar = ({ menuList }) => {
  return (
    <header
      className="shadow-sm sticky top-2 w-full backdrop-filter
        backdrop-blur bg-opacity-50 z-50"
    >
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            {menuList.map((menu) => {
              return (
                <Menu key={menu.title} title={menu.title} href={menu.href} />
              );
            })}
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <Button variant="primary">test</Button>
            <Button variant="secondary">tessdqsdqsdt</Button>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
