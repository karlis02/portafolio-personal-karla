import { Outlet, Link, useLocation} from "react-router-dom"

const Layout = () => {

  const location = useLocation()

  const urlActual = location.pathname

  return (
    <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-teal-900  px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white animate-pulse">Portafolio</h2>
          <nav className="mt-10">
            <Link className = {`${urlActual === '/' ? 'text-teal-300' : 'text-white'} text-2xl block mt-2 hover:text-teal-300 `}
            to="/">
            Datos Personales
            </Link>
            <Link className = {`${urlActual === '/formacionacademica' ? 'text-teal-300' : 'text-white'} text-2xl block mt-2 hover:text-teal-300`} 
            to="/formacionacademica">
            Formación Académica
            </Link>
            <Link className = {`${urlActual === '/certificaciones' ? 'text-teal-300' : 'text-white'} text-2xl block mt-2 hover:text-teal-300`} 
            to="/certificaciones">
            Certificaciones
            </Link>
            <Link className = {`${urlActual === '/skills' ? 'text-teal-300' : 'text-white'} text-2xl block mt-2 hover:text-teal-300`} 
            to="/skills">
            Habilidades
            </Link>
            <Link className = {`${urlActual === '/trabajos' ? 'text-teal-300' : 'text-white'} text-2xl block mt-2 hover:text-teal-300`} 
            to="/trabajos">
            Proyectos
            </Link>
            <Link className = {`${urlActual === '/contacto' ? 'text-teal-300' : 'text-white'} text-2xl block mt-2 hover:text-teal-300`} 
            to="/contacto">
            Contacto
            </Link>
          </nav>       
        </div>
        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
        </div>
    </div>
  )
}

export default Layout