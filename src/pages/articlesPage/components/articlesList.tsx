import React,{ReactElement, ReactNode, useEffect, useState} from 'react'
import ArticleCard from './articleCard'



interface articleProps {
  id: number,
  title:string,
  description : string,
}
interface articleList{
  articles : [articleProps]
}

const ArticlesList = (props :  articleList) => {
  const [articlesList, setArticlesList] = useState<[articleProps]>(props.articles)

  let listItems = () : JSX.Element[] =>  {
    let articles : JSX.Element[] = articlesList.map( (item) =>
      <ArticleCard key={item.id} title={item.title} description={item.description}/>
    );
    return(
      articles
    )
    
  } 

  useEffect(() =>{
    listItems()
  }
    ,[articlesList])

  return (
    <>
    <div>
        {listItems()}
    </div>
    </>
  )
}

export default ArticlesList