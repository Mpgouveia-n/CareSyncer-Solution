import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/Imagens/HeaderLogo/header-logocs.jpg"

const menuLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200",
    isActive
      ? "bg-[#FB8C00]/10 text-[#FB8C00]"
      : "text-[#333333] hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]"
  ].join(" ")

export default function NavUser() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CareSyncer Logo"
            className="h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-[#FB8C00]/10 md:h-[100px] md:w-[100px]"
          />

          <span className="text-xl font-bold text-[#2E7D32]">
            CareSyncer
          </span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <li>
            <NavLink to="/" className={menuLinkClass}>
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre" className={menuLinkClass}>
              Sobre o Projeto
            </NavLink>
          </li>

          <li>
            <Link to="/#funcionalidades" className="rounded-full px-3 py-2 text-sm font-semibold text-[#333333] transition-colors duration-200 hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]">
              Funcionalidades
            </Link>
          </li>

          <li>
            <NavLink to="/faq" className={menuLinkClass}>
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/integrantes" className={menuLinkClass}>
              Integrantes
            </NavLink>
          </li>

          <li>
            <NavLink to="/contato" className={menuLinkClass}>
              Contato
            </NavLink>
          </li>

          <li className="group relative">
            <button className="rounded-full px-3 py-2 text-sm font-semibold text-[#333333] transition-colors duration-200 hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]">
              Soluções
            </button>

            <div className="invisible absolute right-0 top-full z-50 mt-2 w-44 rounded-lg bg-white p-2 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link to="/#cadastro" className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]">
                Cadastro
              </Link>
              <Link to="/#triagem" className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]">
                Triagem
              </Link>
              <Link to="/#voluntarios" className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]">
                Voluntários
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
