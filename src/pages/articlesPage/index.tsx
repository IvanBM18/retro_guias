import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from '@/layouts/header/navBar'
import React, { useState } from 'react'
import ArticleCard from "./components/articleCard";
import ArticlesList from "./components/articlesList";

const inter = Inter({ subsets: ["latin"] });

interface articleProps {
  id:number,
  title:string,
  description : string,
}

const articlesExample : [articleProps] = [
  {
    id:1,
    title:"Esto es un titulo",
    description:"Esta es una descriptcion pitera, me gusta el desarollo web pero es mi criptonita aa"
  }
]

const ArticlesPage = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className={inter.className}>
            <div className="flex mx-52 pt-24">
                {/* Articles List */}
                  <ArticlesList
                    articles={articlesExample}
                  />
            </div>
        </div>
      </div>
    </>
  )
}

export default ArticlesPage