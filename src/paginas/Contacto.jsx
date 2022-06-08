import React from 'react'
import TablaSocial from '../components/TablaSocial'

const Contacto = () => {
    return (
    <>
        <div className="animate__animated animate__slideInDown">
        <h1 className="font-serif text-4xl text-teal-900 animate-bounce">Contacto</h1>
        <p className="mt-3">Puedes contactarme a través del medio que prefieras.</p>
    
        
        <div className="md:px-5 py-8 w-full animate__animated animate__zoomInDown animate__repeat-1 animate__slow">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
    <table className="min-w-full bg-white">
        <thead className="bg-teal-800 text-white">
        <tr>
            <th className="w-1/3 text-left py-3 px-14 uppercase font-semibold text-sm">Información de contacto</th>
            <th className="w-1/3 text-left py-3 px-0 uppercase font-semibold text-sm"></th>
        </tr>
        </thead>
    <tbody className="text-gray-700">
        <tr>
        <td className="w-1/3 text-left py-3 px-4">Correo Electrónico</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:karli.02@hotmail.com">karli.02@hotmail.com</a></td>
        </tr>
        <tr className="bg-gray-100">
        <td className="w-1/3 text-left py-3 px-4">Teléfono</td>
        <td className="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">88189944</a></td>
        
        </tr>
    </tbody>
    </table>
    </div>
</div>
        <TablaSocial/>
    </div>
    </>
    )
}

export default Contacto