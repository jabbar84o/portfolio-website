// import { title } from 'node:process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';
// / eslint-disable-next-line @typescript-eslint/no-unused-vars
// const data =[
    const data: {
        id: number;
        title: string;
        desc: string;
        img: string;
        tags: string[];
    }[] = [
    {
        id:0,
        title:"Todo list",
        desc:"A React & Typescript based app for managing and organizing your task efficiently.",
        img:"/TOdo list.jpg",
        tags:["React","Node","CSS","Typescript"],
    },
    {
        id:1,
        title:"simple calculator",
        desc:"A basic HTML,CSS and Typescript,calculator for performing basic essential arthimetic operations.",
        img:"/simple calculator.jpg",
        tags:["HTML","Node","CSS","Typescript"],
    },
    {
        id:2,
        title:"Currency Converter",
        desc:"A Simple HTML,and Typescript powered tool for covering curencies with real-time rates",
        img:"/currency converter.jpg",
        tags:["HTML","Node","CSS","Typescript"],
    },
    {
        id:3,
        title:"atm machines",
        desc:"A Simple HTML and Typescript powered tool for covering curencies with real-time rates.",
        img:"/atm machines.jpg",
        tags:["HTML","Node","CSS","Typescript"],
    },
    
    ]
console.log(data);

const Projects = () => {
  return (
    <div id='projects'className='container pt-32'>
      <Heading title='my-projects' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-centre'>
        {data.map((el) =>(<Card 
       key={el.id}
       title={el.title}
       desc={el.desc}
       img={el.img}
       tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
