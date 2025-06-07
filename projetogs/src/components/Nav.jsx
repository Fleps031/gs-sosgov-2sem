import { Link } from "react-router";
import logo from '../assets/Logo-Sos-Gov.png';
import MenuIcon from '../assets/burguer.svg';
import { useState } from "react";
import { useNavigate } from "react-router";


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
        <header className="text-3xl font-thin h-16 flex flex-row justify-between items-center pl-2 pr-2 w-full sm:static relative">
            <a className='h-12 w-fit flex min-w-[80px] cursor-pointer' href="/">
                <img src={logo}></img>
            </a>

            <div className='hidden sm:flex w-full h-full  justify-center items-center'>
              <nav className='flex w-[80%] justify-between gap-2 items-center'>
                <a href="#Sobre">
                  <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Sobre</p>
                </a>
                <a href="#Solucao">
                  <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Solução</p>
                </a>
                <a href="#Cadastro">
                  <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Cadastre-se</p>
                </a>
                <a href="#Contato">
                  <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Contato</p>
                </a>
              </nav>
            </div>

            <button className='bg-sos-purple-100 min-w-21 h-6 text-sm rounded-xl text-white text-thin cursor-pointer  hover:bg-black active:bg-black transition hidden sm:block' onClick={() => {navigate("/login", { replace: true })}}>
                Obter
            </button>

            <div className="block sm:hidden h-[32px] w-[32px] cursor-pointer hover:border-sos-purple-100 hover:border-2 rounded-md" onClick={() => {setMenuOpen(!menuOpen)}}>
                <img src={MenuIcon} className="fill-sos-purple-100"></img>
            </div>

            <div className={`flex justify-end items-right w-[100%] h-[120px] ${menuOpen ? 'absolute z-99 top-16 left-0 right-0' : 'hidden'} sm:hidden bg-transparent shadow-xl`}>
                <nav className="h-full justify-center w-[50%] bg-white items-center text-right flex flex-col">
                    <a href="#Sobre">
                      <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Sobre</p>
                    </a>
                    <a href="#Solucao">
                      <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Solução</p>
                    </a>
                    <a href="#Cadastro">
                      <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Cadastre-se</p>
                    </a>
                    <a href="#Contato">
                      <p className="text-sm font-medium hover:text-sos-purple-100 hover:transform-[scale(1.2)] ease-out duration-120">Contato</p>
                    </a>
                </nav>
            </div>
        </header>
        
        <hr className='border-gray-300'></hr>
    </>
  )
}

export default Nav
