import React from 'react'

const Trabajos = () => {
  return (
    <div className="animate__animated animate__slideInDown">
      <h1 className="font-serif text-4xl text-teal-900 animate-bounce">Proyectos</h1>
      
      <div class="bg-gradient-to-r from-rose-400 to-teal-400 lg:py-12 lg:flex lg:justify-center lg:rounded-lg mt-5 animate__animated animate__fadeInRightBig animate__repeat-1 animate__slow ">
        <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-xl lg:h-full"><img src="proyecto1.jpg" alt="" /></div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-3xl text-gray-800 font-bold">Letras Musica<span class="text-indigo-600">!</span></h2>
                <p class="mt-4 text-gray-600">Este proyecto fue hecho en React incluye API externa, para obtención de letra. </p>
                <div class="mt-8">
                    <a href="https://letrasmusica.netlify.app/" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Abrir</a>
                </div>
            </div>
        </div>
      </div>
      <div class="bg-gradient-to-r from-rose-400 to-teal-400 lg:py-12 lg:flex lg:justify-center lg:rounded-lg mt-5 animate__animated animate__fadeInRightBig animate__repeat-1 animate__slow">
        <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-xl lg:h-full"><img src="proyecto2.jpg" alt="" /></div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-3xl text-gray-800 font-bold">Distribuciones Nacionales<span class="text-indigo-600">!</span></h2>
                <p class="mt-4 text-gray-600">Este proyecto fue hecho en React, Bootstrap y Strapi. Tiene como usuario: <mark>test</mark> y contraseña: <mark>test1234</mark> </p>
                <div class="mt-8">
                    <a href="https://distribuciones-nacionales.netlify.app/" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Abrir</a>
                </div>
            </div>
        </div>
      </div>
      <div class="bg-gradient-to-r from-rose-400 to-teal-400 lg:py-12 lg:flex lg:justify-center lg:rounded-lg mt-5 animate__animated animate__fadeInRightBig animate__repeat-1 animate__slow">
        <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-xl lg:h-full"><img src="proyecto3.jpg" alt="" /></div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-3xl text-gray-800 font-bold">Gifs App<span class="text-indigo-600">!</span></h2>
                <p class="mt-4 text-gray-600">Este proyecto fue hecho en Angular, Bootstrap y Animate css.</p>
                <div class="mt-8">
                    <a href="https://gifsapp-karla.netlify.app/" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Abrir</a>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Trabajos