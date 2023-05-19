//TODO: Fix image layout on mobile
//TODO: Create an article card component
import React, { useState, useEffect } from "react";
import Image from "next/image";
import IArticle from "../../models/article";
import Link from "next/link";
import Footer from "@/layouts/footer/footer";

const dummyData: IArticle[] = [
  {
    id: 0,
    title: "Hola Edgar",
    description: "soy un texto de prueba",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
  },
  {
    id: 1,
    title: "Ke pedo",
    description: "soy un texto de prueba dos",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
  },
  {
    id: 2,
    title: "SS",
    description: "soy un texto de prueba 3s",
    createdBy: "IVAN",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
  },
];

const DummyComponent = ({ data }: { data: IArticle[] }) => {
  return (
    <>
      {data.map((article) => (
        <article key={article.id} className="group w-1/5">
          <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <div className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400">
                <Image
                  src={article.image}
                  alt="Avatar"
                  height={36}
                  width={36}
                />
              </div>
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              {article.description}
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                tabIndex={0}
                role="link"
              >
                John Doe
              </a>
            </div>
          </div>
          <div className="p-2">
            <a href="#">
              <h3 className="text-lg font-medium text-white">
                {article.title}
              </h3>
            </a>
            <p className="mt-2 mb-8 text-sm text-ellipsis overflow-hidden ... white-space: nowrap w-auto leading-relaxed text-gray-500 line-clamp-3">
              {article.description}
              <span className="flow-root">{article.createdBy}</span>
            </p>
            <p className="mt-2 mb-8 text-sm text-ellipsis overflow-hidden ... white-space: nowrap w-auto leading-relaxed text-gray-500 line-clamp-3"></p>
          </div>
        </article>
      ))}
    </>
  );
};

export default function LandingPage() {
  return (
    <>
      <div className="bg-gray-900 ">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-screen-xl px-60 py-32 lg:flex lg:h-screen">
            <div className="mx-auto">
              <h1 className="mt-6 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent text-3xl sm:text-5xl ">
                Retro Wiki
              </h1>
              <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  ></img>
                </div>

                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                  Design Tools
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600 dark:text-blue-300"
                    tabIndex={0}
                    role="link"
                  >
                    John Doe
                  </a>
                </div>
              </div>

              <div className="flex justify-center mb-24 py-32 lg:flex lg:h-20 lg:items-center gap-28 ">
                <DummyComponent data={dummyData} />
              </div>
            </div>
          </div>
          {/* Use the DummyComponent to render the dummy data */}
        </div>
      </div>
    </>
  );
}
