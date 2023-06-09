import { useEffect, useRef, useState } from "react";
import ArticleModal from "@/components/articleModal";

import EditButton from "./component/editButton";
import DeleteButton from "./component/deleteButton";
import SeeRowButton from "./component/seeRowButton";
import ArticleService from "@/services/database/articleService";
import IArticle from "../../models/article";
import useUser from "@/lib/useUser";
import { randomInt } from "crypto";

const dummyData : IArticle[] = [
  {
    id: 0,
    title: "No hay articulos",
    description: "Crea Articulos para que aparezcan aqui",
    createdAt: "2021-08-01",
    isDeleted: false,
  }
];

export default function DasboardEntries() {
  const { user } = useUser({ redirectTo: "", redirectIfFound: false });
  const [showArticleModal, setShowArticleModal] = useState<boolean>(false);
  const [editArticleModal, setEditArticleModal] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  //array of articles
  const [articles, setArticles] = useState<IArticle[]>([]);
  const dataFetchedRef = useRef(false);
  
  //article to edit
  const [article, setArticle] = useState<IArticle>({
    id: -1,
    title: "",
    description: "",
    createdAt: "",
    isDeleted: false,
  });

  const onOpenArticleModal = (id: any) => {
    setEditArticleModal(true);
    setArticle(articles[articles.findIndex((art) => art.id === id)]);
    setShowArticleModal(true);
  };

  const onCloseArticleModal = () => {
    setShowArticleModal(false);
  };

  const fetchArticles = () =>{
    ArticleService.fectchByUser(user!.id).then((articles)=>{
      setArticles([...articles.filter((art)=>!art.isDeleted )]); 
      if(articles.length === 0) setArticles([...dummyData])
    })
    .catch(error => {console.error(`[ERROR] in dashboard fetching: ${error}`)});
    setIsLoading(false);
  }

  useEffect(()=>{
    if (dataFetchedRef.current) return;
    setIsLoading(true);
    dataFetchedRef.current = true;
    fetchArticles();
    // console.log([...ArticleService.articleList]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      {showArticleModal && (
        <ArticleModal
          onClose={onCloseArticleModal}
          article={ editArticleModal
              ? article
              : {
                  id: Math.floor(Math.random()*1000),
                  title: "",
                  description: "",
                  createdAt: new Date().toLocaleDateString(),
                  isDeleted: false,
                }
          }
          setNewArticle={ editArticleModal
              ? (article) => {
                  ArticleService.updateArticle(article);
                  setArticles(
                    articles.map((art) =>
                      art.id === article.id ? article : art
                    )
                  );
                }
              : (article) => {
                  ArticleService.postArticle({...article,userid:user!.id,createdBy:user!.name});
                  setArticles([...articles, article]);
                }
          }
        />
      )}
      {/* Entries Panel*/}
      <div className="max-w-7xl mx-auto pt-8">
        <div className="mb-4 flex justify-between">
          <h1 className="font-serif text-4xl font-bold text-white decoration-gray-400 pl-4">
            Articulos
          </h1>
          <div className="flex justify-end pr-4">
            <button
              className="px-4 py-2 rounded-md bg-blue-800 text-sky-100 hover:bg-sky-600"
              onClick={() => {
                setArticle({
                  id: -1,
                  title: "",
                  description: "",
                  createdAt: "",
                  isDeleted: false,
                });
                setEditArticleModal(false);
                setShowArticleModal(true);
              }}
            >
              Nueva Entrada
            </button>
          </div>
        </div>
        <div className=" flex flex-col">
            {isLoading && 
              <div className="m-auto pt-8 text-center text-white text-4xl">
                Cargando . . .
              </div>}
                  
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  {/* Table Header */}
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Titulo
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Descripcion
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Fecha de creacion
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Acciones
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="bg-white">
                  {
                    // Table row
                    articles.map((article) => (
                      <tr
                        className="border-b border-gray-200"
                        key={article.id}
                      >
                        <td className="px-6 py-4 whitespace-no-wrap ">
                          <span className="flex items-center">
                            {article.id}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap ">
                          <div className="text-sm leading-5 text-gray-900">
                            {article.title}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap ">
                          <p>{article.description}</p>
                        </td>

                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap ">
                          <span>{article.createdAt}</span>
                        </td>
                        {/* Action buttons */}
                        <td className="flex py-4 gap-2 ml-3 text-sm  ">
                          {/* Edit button */}
                          <button
                            onClick={() => {
                              onOpenArticleModal(article.id);
                            }}
                          >
                            <EditButton />
                          </button>
                          {/* Delete button */}
                          <button
                            onClick={() => {
                              console.log('clicked on delete')
                              ArticleService.deleteArticle(article);
                              setArticles(articles.filter((art) => art.id !== article.id));
                            }}
                          >
                            <DeleteButton />
                          </button>
                          {/* See details button */}
                          <SeeRowButton />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Blog({ posts }) {
//   // Render posts...
// }

// // This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }