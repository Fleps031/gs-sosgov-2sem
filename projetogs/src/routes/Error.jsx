import logo from '../assets/Logo-Sos-Gov.png';
import { useNavigate } from "react-router";


function Error() {
  const navigate = useNavigate();


  return (
    <>
       <section className="flex flex-col w-full h-full items-center justify-center py-40 gap-4 px-10">
          <img className='w-[200px] h-[120px]' src={logo}></img>
          <h1 className='text-sos-purple-100 text-2xl font-medium text-center'>ERRO! Não conseguimos encontrar a página procurada</h1>
          <p className='text-zinc-700'>Mas não se preocupe! O SOS GOV ainda está em fase de desenvolvimento, e funcionalidades vão ser sempre adicionadas no futuro.</p>
          <p className='text-lg'>A plataforma WEB, que utiliza o seu login ainda está em construção, e em breve traremos uma nova experiência para você</p>

          <button 
            type="submit" 
            className={`bg-sos-purple-100 min-w-[320px] min-h-12 text-sm rounded-full max-w-[480px] text-white text-thin cursor-pointer 
            border-2 hover:bg-black active:bg-black  ease-in-out md:duration-200`}
            onClick={() => {navigate("/", { replace: true })}}
          >
            <p className='text-xl'>Entendi, voltar para a página inicial</p>
          </button>
        
        </section>
    </>
  )
}

export default Error
