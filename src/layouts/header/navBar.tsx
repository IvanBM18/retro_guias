import useUser from "@/lib/useUser";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpenMobileMenu, setMobileMenu] = useState<boolean>(false);
  const {user} = useUser({redirectTo: '/dashboardPage', redirectIfFound: false})

  useEffect(() => {
    return (window.onscroll = function () {
      const navBar: HTMLElement | null = document.getElementById("navBar");
      const mobileMenu: HTMLElement | null =document.querySelector("#mobileMenu");
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

  const showMobileMenu = () => {
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
                <Link href="/landingPage">
                  <Image
                    height={36}
                    width={36}
                    className="w-auto h-9 sm:h-9 "
                    src="https://cdn-icons-png.flaticon.com/512/2296/2296559.png"
                    alt="Logo Retro Wiki"
                  />
                </Link>

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
                {/* <Link
                  href="/articlesPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Articulos
                </Link> */}
                <Link
                  href="/contactoPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Contacto
                </Link>
                <button
                onClick={() =>{
                  if(!user || !user.isLoggedIn) return;
                  fetch('/api/logout')
                }}>
                  <Link
                    href="/loginPage"
                    className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                  >
                    {(user && user.isLoggedIn) ? 'Cerrar Sesion' : 'Iniciar sesión'}
                  </Link>
                </button>
                
                
                <Link
                  href="/aboutPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  Acerca de
                </Link>
                {(user && user.isLoggedIn) && <Link
                  href="/dashboardPage"
                  className="my-2 transition-colors duration-300 transform  hover:text-emerald-400 dark:hover:text-sky-500 md:mx-4 md:my-0 cursor-pointer"
                >
                  DashBoard
                </Link>}

                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
