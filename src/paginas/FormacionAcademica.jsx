import React from 'react'

const FormacionAcademica = () => {
    return (
    <div className="animate__animated animate__slideInDown">
        <h1 className="font-serif text-4xl text-teal-900 animate-bounce">Formación Académica</h1>
        <table className="table-auto animate__animated animate__zoomInDown animate__repeat-1 animate__slow">
        <thead className="justify-between">
            <tr clasNames="bg-teal-800">
            <th className="px-4 py-2">
                <span class="text-white "></span>
            </th>
            <th className="px-4 py-2 ">
                <span className="text-teal-700 ml-10">Tipo de educación</span>
            </th>
            <th className="px-16 py-2">
                <span className="text-teal-700">Institución</span>
            </th>

            <th class="px-16 py-2">
                <span className="text-teal-700">Año de finalización</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-teal-700">Status</span>
            </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">

            <tr className="bg-white border-4 border-teal-200">
            <td className="px-16 py-2 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-backpack" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 7h2a6 6 0 0 1 6 6v6a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-6a6 6 0 0 1 6 -6z" />
                <path d="M10 7v-1a2 2 0 1 1 4 0v1" />
                <path d="M10 15h4" />
            </svg>
            </td>
            <td>
                <span className="text-center ml-12 font-semibold">Educación primaria</span>
            </td>
            <td>
                <span className="text-center ml-12 font-semibold">Escuela Bilingue John F. Kennedy</span>
            </td>
            <td>
                <span className="text-center ml-28 font-semibold">2013</span>
            </td>
            <td>
                <span className="text-center text-green-600 ml-14 font-bold">Finalizado</span>
            </td>
            </tr>

            <tr className="bg-white border-4 border-teal-200">
            <td className="px-16 py-2 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
            </svg>
            </td>
            <td>
                <span className="text-center ml-12 font-semibold">Educación Secundaria</span>
            </td>
            <td>
            <span className="text-center ml-12 font-semibold">Colegio Madre del Divino Pastor</span>
            </td>
            <td>
            <span className="text-center ml-28 font-semibold">2018</span>
            </td>
            <td>
                <span className="text-center text-green-600 ml-14 font-bold">Finalizado</span>
            </td>
            </tr>
            <tr className="bg-white border-4 border-teal-200">
            <td className="px-16 py-2 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="4" width="18" height="12" rx="1" />
                <line x1="7" y1="20" x2="17" y2="20" />
                <line x1="9" y1="16" x2="9" y2="20" />
                <line x1="15" y1="16" x2="15" y2="20" />
            </svg>
            </td>
            <td>
                <span className="text-center ml-12 font-semibold">Educación Superior</span>
            </td>
            <td>
            <span className="text-center ml-12 font-semibold">Universidad de Costa Rica</span>
            </td>
            <td>
            <span className="text-center ml-28 font-semibold">2022</span>
            </td>
            <td>
                <span className="text-center text-red-600 ml-14 font-bold">En progreso</span>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    )
}

export default FormacionAcademica