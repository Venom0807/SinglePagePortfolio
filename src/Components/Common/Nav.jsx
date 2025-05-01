import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
<img src="ahmer.png" alt="" className='w-35' />
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center  justify-center text-black font-[500] gap-10">
      <Link to="/" class="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
      <Link to="/about" class="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
      <Link to="/projects" class="mr-5 hover:text-gray-900 cursor-pointer">Projects</Link>
      <Link to="/contact" class="mr-5 hover:text-gray-900 cursor-pointer">Contact US</Link>
    </nav>
  </div>
</header>
  )
}

export default Nav