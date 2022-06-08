import React from 'react'

const Cards = () => {
    return (
    <>
    <div className="animate__animated animate__slideInDown">
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto my-8">
    <img className="w-xl rounded-t-2xl object-cover object-center" src="certificacion1.jpeg" alt='' />
    <div className="w-96 md:w-96 bg-white mt-0 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 m-2">Certificación en el idioma Inglés - B2</div>
    <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
        <h1 className="text-gray-800 font-bold ">Idiomas</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world animate-spin" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="3.6" y1="9" x2="20.4" y2="9" />
            <line x1="3.6" y1="15" x2="20.4" y2="15" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
    </div>
    </div>
    </div>
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto my-8">
    <img className="w-xl rounded-t-2xl object-cover object-center" src="certificacion2.jpg" alt='' />
    <div className="w-96 md:w-96 bg-white mt-0 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 m-2">Certificación en charlas de Telecomunicaciones</div>
    <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
        <h1 className="text-gray-800 font-bold ">Telecomunicaciones</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-satellite animate-spin" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" />
            <path d="M6 10l-3 3l3 3l3 -3" />
            <path d="M10 6l3 -3l3 3l-3 3" />
            <line x1="12" y1="12" x2="13.5" y2="13.5" />
            <path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
            <path d="M15 21a6 6 0 0 0 6 -6" />
        </svg>
    </div>
    </div>
    </div>
    </div>
    </>
    )
}

export default Cards