/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import Image from 'next/image'; 'next/image';
interface propsType{
title:string;
desc:string;
img:string;
tags:string[];
}
// /eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card:React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'data-aos="zoom-in-up">
      <div>
        <Image className=' w-[300px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) =>(
            <div className='tags' key={el}>
            {el}
</div>))}
        </div> 
    </div>
    </div>
  )
}

export default Card
