import React from 'react'

const ProjectCards = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
      <h1 className='text-4xl text-black font-bold my-10'>QUALITY WORK<br />RECENTLY DONE PROJECTS</h1>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a target='blank' class="block relative h-48 rounded overflow-hidden cursor-pointer" href='https://academia-seven-omega.vercel.app/'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="p1.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">EDUCATION</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">ACADEMIA</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a target='blank' class="block relative h-48 rounded overflow-hidden cursor-pointer" href='https://acme-drab-three.vercel.app/'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="p2.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">TRAVEL</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">ACME</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a target='blank' class="block relative h-48 rounded overflow-hidden cursor-pointer" href='https://code-upscale.vercel.app/'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="p3.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">TECH</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">CODE UPSCALE</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a target='blank' class="block relative h-48 rounded overflow-hidden cursor-pointer" href='https://e-store-gules-six.vercel.app/'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="p4.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">ECOMMERCE</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">ESTORE</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a target='blank' class="block relative h-48 rounded overflow-hidden cursor-pointer" href='https://genial-one.vercel.app/'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="p5.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">TRANSPORT</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">GENIAL</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a target='blank' class="block relative h-48 rounded overflow-hidden cursor-pointer" href='https://neve-zeta.vercel.app/'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="p6.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">BUSINESS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">NEVE</h2>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProjectCards