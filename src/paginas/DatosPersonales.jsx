import React from 'react'

const DatosPersonales = () => {
    return (
    <>  
        <div className="animate__animated animate__slideInDown">
        <h1 className="font-serif text-4xl text-teal-900 animate__animated animate-bounce">Datos Personales</h1>

        <img className="w-80 mt-4 rounded-2xl animate__animated animate__fadeIn" src="fotopersonal.png" alt=''/>
        <div className='flex mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-1" width="36" height="36" viewBox="0 -3 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 16v-8l-2 2" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
        <p className="mt-2 text-center font-bold text-xl">Nombre Completo</p>
        </div>

        <div className="mt-2 ml-9 text-lg">Karla Franciny Solórzano López.</div>

        <div className='flex mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-2" width="36" height="36" viewBox="0 -3 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
        <p className="mt-2 text-center font-bold text-xl ">Fecha de nacimiento</p>
        </div>

        <div className="mt-2 ml-9 text-lg">02 de agosto del 2001.</div>

        <div className='flex mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-3" width="36" height="36" viewBox="0 -3 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12a2 2 0 1 0 -2 -2" />
            <path d="M10 14a2 2 0 1 0 2 -2" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
        <p className="mt-2 text-center font-bold text-xl ">Residencia actual</p>
        </div>

        <div className="mt-2 ml-9 text-lg">Puntarenas, Costa Rica.</div>

        <div className='flex mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-4" width="36" height="36" viewBox="0 -3 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M13 16v-8l-4 6h5" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
        <p className="mt-2 text-center font-bold text-xl ">Nacionalidad</p>
        </div>

        <div className="mt-2 ml-9 text-lg">Costarricense.</div>

        <div className='flex mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-5" width="36" height="36" viewBox="0 -3 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
        <p className="mt-2 text-center font-bold text-xl ">Sobre mí</p>
        </div>

        <div className="mt-2 ml-9 text-lg text-justify">Buenas, soy una estudiante universitaria, actualmente estoy en mi último año de carrera de Informática Empresarial.
        Es un placer tenerte por acá, visitando mi portafolio personal web, mis planes a futuro son concretar una licenciaura en el extranjero. 
        Además, estoy aprendiendo el idioma Mandarín. Y espero que te guste mi página web.</div>
        </div>
    </>
    )
}

export default DatosPersonales