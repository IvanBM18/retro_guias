import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import NavBar from "@/layouts/header/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        {/* <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
            
            
          </div>
        </div> */}
        <div className="mx-auto max-w-screen-xl px-60 py-32 lg:flex lg:h-screen ">
          <article>
            <div className="mx-auto max-w-3xl">
              <img
                className="mx-auto h-40 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/2296/2296559.png"
                alt="Logo"
              />
              <div className=" rounded-lg shadow-lg p-6">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Acerca de nosotros
                </h1>
                <h2 className="text-gray-300 bg-clip-text text-3xl font-extrabold sm:text-2xl mt-5">
                  Obejtivo
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Nuestro objetivo es que los usuarios puedan encontrar los
                  mejores trucos y consejos para sus juegos favoritos.
                </p>
                <h2 className="text-gray-300 bg-clip-text text-3xl font-extrabold  sm:text-2xl mt-5">
                  ¿Quienes somos?
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Somos un grupo de estudiantes que buscan ayudar a la comunidad
                  de gamers a encontrar los mejores trucos y consejos para sus
                  juegos favoritos.
                </p>
                <h2 className="text-gray-300 bg-clip-text text-3xl font-extrabold sm:text-2xl mt-5">
                  ¿Que buscamos?
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Lo que buscamos es dar difusion a las noticias de videojuegos
                  que ya no han dado soporte asi dando un lugar para poder
                  recolectar toda la información
                </p>
              </div>
            </div>
          </article>
        </div>{" "}
      </section>
    </>
  );
}
