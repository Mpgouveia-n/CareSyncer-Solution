import { Link } from "react-router-dom"
import logo from "../../assets/Imagens/HeaderLogo/header-logocs.jpg"
export default function NavUser() {
  return (
    <nav className="w-full bg-white shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <Link to="/" className="flex items-center gap-2">

          <img
            src={logo}
            alt="CareSyncer Logo"
            className="w-10 h-10"
          />

          <span className="text-xl font-bold text-green-600">
            CareSyncer
          </span>

        </Link>

        <ul className="flex gap-6 font-medium">

          <li>
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/sobre" className="hover:text-green-600">
              Sobre
            </Link>
          </li>

          <li>
            <Link to="/faq" className="hover:text-green-600">
              FAQ
            </Link>
          </li>

          <li>
            <Link to="/contato" className="hover:text-green-600">
              Contato
            </Link>
          </li>

          <li>
            <Link to="/integrantes" className="hover:text-green-600">
              Integrantes
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}