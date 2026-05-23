import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/Imagens/HeaderLogo/header-logocs.jpg"

const menuLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200",
    isActive
      ? "bg-[#FB8C00]/10 text-[#FB8C00]"
      : "text-[#333333] hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]"
  ].join(" ")

const dropdownLinkClass =
  "block rounded-lg px-4 py-2 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#FB8C00]/10 hover:text-[#FB8C00]"

export default function NavUser() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-3 py-3 sm:px-6 md:gap-4 lg:flex-row lg:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CareSyncer Logo"
            className="h-14 w-14 rounded-full object-cover shadow-md ring-4 ring-[#FB8C00]/10 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-20 lg:w-20"
          />

          <span className="text-lg font-bold text-[#2E7D32] sm:text-xl">
            CareSyncer
          </span>
        </Link>

        <ul className="flex w-full flex-wrap items-center justify-center gap-2 text-sm lg:w-auto lg:flex-nowrap lg:justify-end">
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
            <NavLink to="/procedimentos" className={menuLinkClass}>
              Procedimentos
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

            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-lg bg-white p-2 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:left-auto sm:right-0 sm:translate-x-0">
              <Link to="/cadastro-paciente" className={dropdownLinkClass}>
                Cadastro de Paciente
              </Link>
              <Link to="/login-dentista" className={dropdownLinkClass}>
                Login Dentista
              </Link>
              <Link to="/procedimentos" className={dropdownLinkClass}>
                Procedimentos
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
