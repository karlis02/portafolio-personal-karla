import React from 'react'

const TablaSocial = () => {
  return (
    <>
        <div className="w-full md:w-1/2 p-5 md:-px-0 mx-0 ">
        <div className="bg-teal-900 border border-teal-500 w-full lg:w-1/2 h-full p-5 pt-8">
        <h3 className="text-2xl font-semibold mb-5 text-white">
        My Social Media
        </h3>
        <div className="flex flex-col gap-3">
        <a href="https://github.com/karlis02" className="flex items-center hover:text-white hover:bg-teal-500 p-2 text-xl text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
            Github
        </a>
        <a href="https://www.facebook.com/karla.solorzano.946/" className="flex items-center hover:text-white hover:bg-teal-500 p-2 text-xl text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
            Facebook
        </a>
        <a href="https://www.instagram.com/kafs_02/" className="flex items-center hover:text-white hover:bg-teal-500 p-2 text-xl text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
        Instagram
        </a>
        </div>
    </div>
    </div>
    </>
  )
}

export default TablaSocial