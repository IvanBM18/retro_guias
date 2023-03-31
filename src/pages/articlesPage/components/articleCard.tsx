import React from 'react'
import Link from "next/link";

interface articleCardProps {
  key:number,
  title:string,
  description : string,
}

const ArticleCard = (props : articleCardProps) => {
  return (
    <>
      <div className='group w-1/3 md:w-3/4'>
        <div className='ml-2'>
          <img
            alt="toy story 2"
            src="https://i0.wp.com/www.senpai.com.mx/wp-content/uploads/2020/08/Retro-Resena-Toy-Story-2-Buzz-Lightyear-to-the-Rescue-1.jpg?w=1280&ssl=1"
            className=" h-56 rounded-xl object-cover shadow-xl transition hover:grayscale-[50%]"
          />
          <div className='mt-2'>
            <h3 className='text-lg md:text-2xl font-medium text-white'>{props.title}</h3>
            {/* Description */}
            <p className=" mt-2 mb-8  text-sm text-ellipsis overflow-hidden ... white-space: nowrap  w-auto leading-relaxed text-gray-500 line-clamp-3">
                {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCard