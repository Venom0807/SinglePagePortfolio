import React from 'react'

const AHero = () => {
  return (
    <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="about.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">LETS
        <br class="hidden lg:inline-block"/>INTRODUCE ABOUT
        <br class="hidden lg:inline-block"/>MYSELF
      </h1>
      <p class="mb-8 leading-relaxed">Hi, I'm a passionate Front-End Web Developer dedicated to building responsive, user-friendly, and visually appealing websites. I specialize in turning creative ideas into functional designs using HTML, CSS, JavaScript, and modern frameworks. With a strong eye for detail and a focus on creating seamless user experiences, I love crafting interactive web interfaces that are both beautiful and efficient. I'm always learning and exploring new technologies to stay ahead in the fast-paced world of web development. Let's create something amazing together!</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">DOWNLOAD CV</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default AHero