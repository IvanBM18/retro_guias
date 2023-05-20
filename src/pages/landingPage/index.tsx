//TODO: Fix image layout on mobile
//TODO: Create an article card component
import React, { useState, useEffect } from "react";
import Image from "next/image";
import IArticle from "../../models/article";
import Link from "next/link";
import Footer from "@/layouts/footer/footer";

const DummyComponent = ({ data }: { data: IArticle[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0); // Reset current slide on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust the data to show only 3 flashcards
  const visibleData = data.slice(currentSlide, currentSlide + 3);

  return (
    <div className="carousel">
      <div className="carousel-inner flex space-x-4">
        {visibleData.map((article) => (
          <article
            key={article.id}
            className="space-x-4 d-block w-100 grid-flow-row pt-6 relative block overflow-hidden rounded-lg border border-gray-100 sm:p-6 lg:p-8"
          >
            <a href="#">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {article.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {article.createdBy}
                  </p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                  <Image
                    alt="Paul Clapton"
                    src={article.image}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  {article.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          onClick={prevSlide}
          className="carousel-control-prev space-x-4 text-white"
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="carousel-control-next space-x-4 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default function LandingPage() {
  const dummyData: IArticle[] = [
    {
      id: 0,
      title: "1",
      description: "soy un texto de prueba",
      createdBy: "Edgar",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 1,
      title: "2",
      description: "soy un texto de prueba dos",
      createdBy: "Edgar",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 2,
      title: "3",
      description: "soy un texto de prueba 3s",
      createdBy: "IVAN",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 3,
      title: "4",
      description: "soy un texto de prueba dos",
      createdBy: "Edgar",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 4,
      title: "5",
      description: "soy un texto de prueba 3s",
      createdBy: "IVAN",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 5,
      title: "6",
      description: "soy un texto de prueba dos",
      createdBy: "Edgar",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 6,
      title: "7",
      description: "soy un texto de prueba 3s",
      createdBy: "IVAN",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 7,
      title: "8",
      description: "soy un texto de prueba dos",
      createdBy: "Edgar",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 8,
      title: "9",
      description: "soy un texto de prueba 3s",
      createdBy: "IVAN",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 9,
      title: "10",
      description: "soy un texto de prueba dos",
      createdBy: "Edgar",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 10,
      title: "11",
      description: "soy un texto de prueba 3s",
      createdBy: "IVAN",
      image:
        "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 ">
        <div className="mx-auto max-w-screen px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto">
              <h1 className="pb-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Retro Wiki
              </h1>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white">
                Retro Wiki es una enciclopedia virtual que contiene información sobre videojuegos retro, consolas, accesorios y mucho más. 
    
              </p>
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-screen px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="pb-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Conoce nuestras ultimas noticias
            </h1>
            <DummyComponent data={dummyData} />
          </div>
        </div>
      </div>
    </>
  );
}
