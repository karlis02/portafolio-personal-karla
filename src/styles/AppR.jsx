import { HashRouter, Routes, Route} from 'react-router-dom'
import Layout from '../layout/Layout'
import DatosPersonales from '../paginas/DatosPersonales'
import Contacto from '../paginas/Contacto'
import Certificaciones from '../paginas/Certificaciones'
import Skills from '../paginas/Skills'
import FormacionAcademica from '../paginas/FormacionAcademica'
import Trabajos from '../paginas/Trabajos'

function App() {

  return (
    <>
        <HashRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<DatosPersonales />} />
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="certificaciones" element={<Certificaciones/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="formacionacademica" element={<FormacionAcademica/>}/>
          <Route path="trabajos" element={<Trabajos/>}/>
        </Route>

      </Routes>
      </HashRouter>
    </>
  )
}

export default App
