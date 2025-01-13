import React from 'react'
import { CgMenu } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Abdul Jabbar</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menulink'><a href='#hero'>Home</a></li>
          <li className='menulink'><a href='#About'>About</a></li>
          <li className='menulink'><a href='#projects'>Projects</a></li>
          <li className='menulink'><a href='#skills'>Skills</a></li>
          <li className='menulink'><a href='#contacts'>Contact</a></li>

        </ul>
        <CgMenu className='md:hidden'size={30} />
      </div>
    
    </div>
  )
}

export default Navbar
