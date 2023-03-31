import Link from "next/link";
import React, { useState, useEffect } from "react";

//TODO: Add theme switch
const NavBar = () => {
  const [isOpenMobileMenu, setMobileMenu] = useState<Boolean>(false);

  useEffect(() => {
    return (window.onscroll = function () {
      const navBar: HTMLElement | null = document.getElementById("navBar");
      const mobileMenu: HTMLElement | null =
        document.querySelector("#mobileMenu");
      if (!navBar) return;
      if (!mobileMenu) return;
      if (window.scrollY > 400) {
        navBar.className = "bg-gray-800";
        mobileMenu.classList.add("bg-gray-800");
        mobileMenu.classList.remove("bg-transparent");
      } else {
        navBar.className = "bg-transparent";
        mobileMenu.classList.remove("bg-gray-800");
        mobileMenu.classList.add("bg-transparent");
      }
    });
  }, []);

  const showMobileMenu = (e: Object) => {
    // console.log(e);
    const menu: HTMLElement | null = document.querySelector("#mobileMenu");
    console.log(menu);
    if (!menu) return;
    if (!isOpenMobileMenu) {
      menu?.classList.add("block");
      menu?.classList.remove("hidden");
    } else {
      menu?.classList.remove("block");
      menu?.classList.add("hidden");
    }
    setMobileMenu(!isOpenMobileMenu);
  };

  return (
    <div className="top-0 left-0 right-0 fixed">
      <div id="navBar" className="bg-transparent">
        <nav className="z-10 shadow-2xl  text-gray-200">
          {/* Title */}
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <form className="mb-0 hidden lg:flex">
              <div className="relative">
                <input
                  className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                  placeholder="Search..."
                  type="text"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 rounded-r-lg p-2 text-gray-600"
                >
                  <span className="sr-only">Submit Search</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex gap-4 font-bold text-center  ">
                <img
                  className="w-auto h-6 sm:h-9 md:i"
                  src="https://cdn-icons-png.flaticon.com/512/2296/2296559.png"
                  alt="Logo Retro Wiki"
                />
                <p className="m-auto text-lg sm:text-xl dark:text-white hover:text-emerald-400 dark:hover:text-blue-400">
                  Retro Wiki
                </p>
              </div>
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={showMobileMenu}
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpenMobileMenu && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                  {isOpenMobileMenu && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* <!-- Mobile Menu open: "block", Mobile Menu closed: "hidden" --> */}
            <div
              id="mobileMenu"
              className="hidden absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
            >
              <div className="flex flex-col md:flex-row md:mx-6 text-lg">
                <Link
                  href="/landingPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Inicio
                </Link>
                <Link
                  href="/articlesPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Articulos
                </Link>
                <a
                  href="/contactoPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Contacto
                </a>
                <Link
                  href="/loginPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Iniciar sesión
                </Link>
                <a
                  href="/aboutPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Acerca de
                </a>
                {/* <div className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer">
                  Inicio
                </div>
                <div className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer">
                  Contacto
                </div>
                <div className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer">
                  Iniciar sesion
                </div>
                <div className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer">
                  Acerca de
                </div> */}
              </div>
              {/* <div className="flex justify-center md:block sm:hidden">
                  <div className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                  </div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
