import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import NavBar from "@/layouts/header/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-60 py-32 lg:flex lg:h-screen ">
          <article>
            <div className="mx-auto max-w-3xl">
              <div className=" rounded-lg shadow-lg p-6">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Equipo
                </h1>
                <h2 className="text-gray-300 bg-clip-text text-3xl font-extrabold sm:text-2xl mt-5">
                  Ivan Barba Macias
                </h2>

                <p className="mt-4 text-lg text-gray-300">
                  Soy Ivan Barba Macias, soy estudiante de la universidad de
                  Guadalajara, me gusta mucho los retos en programación,, me
                  gusta mucho jugar videojuegos.
                </p>
                <h2 className="text-gray-300 bg-clip-text text-3xl font-extrabold  sm:text-2xl mt-5">
                  Edgar Faustino Zepeda Urzúa
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Soy Edgar Faustino Zepeda Urzúa, soy estudiante de la
                  Universidad de Guadalajara, me gusta mucho lel diseño de
                  páginas, soy fan de los animales y me gusta mucho jugar
                  videojuegos.
                </p>
              </div>
            </div>
          </article>
        </div>{" "}
      </section>
    </>
  );
}
