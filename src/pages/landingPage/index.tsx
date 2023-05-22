//TODO: Fix image layout on mobile
//TODO: Create an article card component
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IArticle from "../../models/article";
import ArticleCarrousel from "@/components/articleCarrousel";
import { GetStaticProps } from "next";
import ArticleService from "@/services/database/articleService";

const dummyData: IArticle[] = [
  {
    id: 0,
    title: "1",
    description: "soy un texto de prueba",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 1,
    title: "2",
    description: "soy un texto de prueba dos",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 2,
    title: "3",
    description: "soy un texto de prueba 3s",
    createdBy: "IVAN",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 3,
    title: "4",
    description: "soy un texto de prueba dos",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 4,
    title: "5",
    description: "soy un texto de prueba 3s",
    createdBy: "IVAN",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 5,
    title: "6",
    description: "soy un texto de prueba dos",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 6,
    title: "7",
    description: "soy un texto de prueba 3s",
    createdBy: "IVAN",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 7,
    title: "8",
    description: "soy un texto de prueba dos",
    createdBy: "Edgar",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 8,
    title: "9",
    description: "soy un texto de prueba 3s",
    createdBy: "IVAN",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 9,
    title: "10",
    description: "soy un texto de prueba dos",
    createdBy: "Edgar",
    image:
    "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
  {
    id: 10,
    title: "11",
    description: "soy un texto de prueba 3s",
    createdBy: "IVAN",
    image:
      "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    isDeleted: false,
    createdAt:'5/21/2023',
  },
];

interface props{
  articles:IArticle[],
}

export default function LandingPage() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dataFetchedRef = useRef(false);
  
  const fetchArticles = () =>{
    ArticleService.fetchAll().then((res) => {
      setArticles(res);
    }).catch(error => {console.error(`[ERROR] in dashboard fetching: ${error}`)});
    setIsLoading(false);
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    setIsLoading(true);
    dataFetchedRef.current = true;
    fetchArticles();
    
  },[]);
  return (
    <>
      <div className="bg-gray-900 ">
        <div className="mx-auto max-w-screen px-4 py-24 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="pb-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Retro Wiki
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white">
              Retro Wiki es una enciclopedia virtual que contiene información sobre videojuegos retro, consolas, accesorios y mucho más. 
            </p>
            <p className="text-red-600 tect-center">
              [AVISO] debido a fallas en el servidor de retro wiki en firebase, no es posible crear, leer o editar articulos durante el 22/05/2021.<br/>
              Disculpe las molestias.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-screen px-4 py-24 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center">
            <h1 className="pb-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Conoce nuestras ultimas noticias
            </h1>
            {isLoading &&
              <p className="flex justify-center items-center text-center text-xl text-white">
                Cargando articulos...
              </p>
            }
            <ArticleCarrousel data={articles ?? dummyData} />
          </div>
        </div>
      </div>
    </>
  );
}

// //Staticaly generates the page with the articles created during testing, this will be generate new data every 60 seconds
// export const getStaticProps : GetStaticProps = async () => {
//   const articles = await ArticleService.fetchAll();

//   return{
//     props: { articles },
//     revalidate: 60  // 24 hours
//   }
// };
