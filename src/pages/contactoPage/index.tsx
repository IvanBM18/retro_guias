import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import NavBar from "@/layouts/header/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <>
      <section className="bg-gray-900 text-gray-600">
        <div className="mx-auto max-w-screen-xl px-60 py-32 lg:flex lg:h-screen ">
          <article>
            <div className="mx-auto max-w-3xl">
              <div className=" rounded-lg shadow-lg p-6">
                <h1 className="mt-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Contactanos.
                </h1>
                <p className="text-white mt-6">
                  Si tienes alguna duda o sugerencia, puedes contactarnos a
                  través de nuestro correo electrónico.
                </p>
                <div className="mt-4">
                  <label className="block  text-white">Nombre</label>
                  <input
                    type="text"
                    className="w-full mt-4 rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-white">Correo electrónico</label>
                  <input
                    type="email"
                    className="w-full mt-2 rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-white">Mensaje</label>
                  <textarea className="w-full mt-2 rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
                </div>
                <div className="mt-4">
                  <button className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  text-white font-bold py-2 px-4 rounded-lg">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>{" "}
      </section>

    </>
  );
}
