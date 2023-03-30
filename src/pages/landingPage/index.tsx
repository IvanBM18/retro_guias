import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Retro Wiki</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-20 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mt-6">
              Retro Wiki
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4"></div>
          </div>
        </div>

        <div className=" px-4 py-32 lg:flex lg:h-20 lg:items-center">
          <article className="w-1/3 flex flex-wrap overflow-auto">
            <a href="#">
              <img
                alt="toy story 2"
                src="https://i0.wp.com/www.senpai.com.mx/wp-content/uploads/2020/08/Retro-Resena-Toy-Story-2-Buzz-Lightyear-to-the-Rescue-1.jpg?w=1280&ssl=1"
                className="ml-2 h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            </a>

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-white">Toy Story 2</h3>
              </a>

              <p className=" mt-2 mb-8  text-sm text-ellipsis overflow-hidden ... white-space: nowrap  w-auto leading-relaxed text-gray-500 line-clamp-3">
                Juego de playstation 1 basado en la pelicula de Toy Story 2 de
                1999 Juego de playstation 1 basado en la pelicula de Toy Story 2
              </p>
            </div>
          </article>
          <article className="group w-1/3 flex flex-wrap overflow-auto">
            <a href="#">
              <img
                alt="toy story 2"
                src="https://i0.wp.com/www.senpai.com.mx/wp-content/uploads/2020/08/Retro-Resena-Toy-Story-2-Buzz-Lightyear-to-the-Rescue-1.jpg?w=1280&ssl=1"
                className="ml-2 h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            </a>

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-white">Toy Story 2</h3>
              </a>

              <p className="mt-2 mb-8  text-sm  white-space: nowrap overflow-hidden ...  w-auto leading-relaxed text-gray-500 line-clamp-3">
                Juego de playstation 1 basado en la pelicula de Toy Story 2 de
                1999 Juego de playstation 1 basado en la pelicula de Toy Story 2
              </p>
            </div>
          </article>
          <article className="group w-1/3 flex flex-wrap overflow-auto">
            <a href="#">
              <img
                alt="toy story 2"
                src="https://i0.wp.com/www.senpai.com.mx/wp-content/uploads/2020/08/Retro-Resena-Toy-Story-2-Buzz-Lightyear-to-the-Rescue-1.jpg?w=1280&ssl=1"
                className="ml-2 h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            </a>
            

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-white">Toy Story 2</h3>
              </a>

              <p className="mt-2 mb-8  text-sm  white-space: nowrap overflow-hidden ...  w-auto leading-relaxed text-gray-500 line-clamp-3">
                Juego de playstation 1 basado en la pelicula de Toy Story 2 de
                1999 Juego de playstation 1 basado en la pelicula de Toy Story 2
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* footer */}
      <footer aria-label="Site Footer" className="bg-gray-700">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-white sm:text-3xl">
              ¿Quieres recibir notificaciones de los mejores trucos?
            </strong>

            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="edgar@retrowiki.com"
                />

                <button className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  Subscribirme
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
                Retrowiki es un sitio web dedicado a la nostalgia de los
                videojuegos que han marcado historia en nuestros corazones.
                Buscamos que los usuarios puedan encontrar información de los
                juegos y a la vez se puedan compartir los trucos que tanto nos
                han ayudado a pasar esos niveles difíciles.
              </p>

              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                <a
                  className="text-white transition hover:text-white/75"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-white/75"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-white/75"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-white/75"
                  href="https://github.com/IvanBM18/retro_wiki"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="font-medium text-white"> Acerca de </strong>

                <nav
                  aria-label="Footer About Nav"
                  className="mt-6 flex flex-col space-y-1"
                >
                  <a
                    className="text-white transition hover:text-white/75"
                    // href="/"
                  >
                    Nosotros
                  </a>
                  <a
                    className="text-white transition hover:text-white/75"
                    // href="/"
                  >
                    Mision
                  </a>
                  <a
                    className="text-white transition hover:text-white/75"
                    // href="/"
                  >
                    Equipo
                  </a>
                </nav>
              </div>

              <div>
                <strong className="font-medium text-white"> Ayuda </strong>

                <nav
                  aria-label="Footer Support Nav"
                  className="mt-6 flex flex-col space-y-1"
                >
                  <a
                    className="text-white transition hover:text-white/75"
                    // href="/"
                  >
                    Contacto
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs leading-relaxed text-white">
              © Retrowiki 2023. All rights reserved.
              <br />
              Created with
              <a
                href="https://react.dev/"
                className="text-white underline transition hover:text-white/75"
              >
                React
              </a>
              and
              <a
                href="https://console.firebase.google.com/"
                className="text-white underline transition hover:text-white/75"
              >
                FireBase
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}