import logo from '../assets/Logo-Sos-Gov.png';

function Nav() {
  return (
    <>
        <header className="text-3xl font-thin h-16 flex flex-row justify-between items-center pl-2 pr-2 w-full">
            <div className='h-12 w-fit flex min-w-[80px]'>
                <img src={logo}></img>
            </div>

            <button className='bg-sos-purple-100 min-w-21 h-6 text-sm rounded-xl text-white text-thin cursor-pointer  hover:bg-black active:bg-black transition'>
                Obter
            </button>
        </header>
        
        <hr className='border-gray-300'></hr>
    </>
  )
}

export default Nav
