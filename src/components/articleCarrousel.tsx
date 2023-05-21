import { useState, useEffect } from "react";
import IArticle from "../models/article";
import Image from "next/image";

const ArticleCarrousel = ({ data }: { data: IArticle[] }) => {
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
      <div className="max-w-full">
        <div className="flex space-x-4 justify-center flex-col lg:flex-row">
          {visibleData.map((article) => (
            <article
              key={article.id.toString()}
              className="flex-grow relative block overflow-hidden rounded-lg border border-gray-100 p-6 lg:p-8 my-2 lg:my-0 space-x-0 lg:space-x-4 "
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
                      alt="Article Author"
                      src={article.image ?? "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>
  
                <div className="mt-4">
                  <span className="max-w-[40ch] text-sm text-gray-500 overflow-auto">
                    {article.description}
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="flex justify-around mt-8 text-lg">
          <button
            onClick={prevSlide}
            className="rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-3  font-medium text-white transition hover:bg-blue-700"
          >
            Prev
          </button>
  
          <button
            onClick={nextSlide}
            className="rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-3  font-medium text-white transition hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

export default ArticleCarrousel;