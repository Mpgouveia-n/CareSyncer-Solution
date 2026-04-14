import { Routes, Route } from "react-router-dom"

import NavUser from "./Componentes/NavUser/NavUser"
import Footer from "./Componentes/Footer/Footer"

import Home from "./Pages/Home/Home"
import Sobre from "./Pages/Sobre/Sobre"
import Faq from "./Pages/FAQ/Faq"
import Contato from "./Pages/Contato/Contato"
import Integrantes from "./Pages/Integrantes/Integrantes"

function App() {
  return (
    <>
      <NavUser />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App