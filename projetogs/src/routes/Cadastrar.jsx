import CadastroSOS from '../assets/imgs/CadastroSOS.png'
import Curativo from '../assets/imgs/Curativo.svg'

function Register() {
  return (
    <>
     <section className="flex flex-col gap-6 w-full h-[80vh] md:h-[90vh] justify-start sm:p-20 md:px-10 sm:px-0 py-6 items-center bg-black overflow-hidden mt-20">
          <div className="flex flex-row lg:w-[60%] w-[90%] h-full bg-center bg-cover relative" style={{ backgroundImage: `url(${CadastroSOS})`}}>
            <img src={Curativo} alt="Icone de um curativo com as cores temas do SOS GOV" className='w-[30%] lg:w-[20%] h absolute -right-10 -top-8 z-10' />
          </div>
          <div className='flex flex-col gap-4 w-full h-fit p-3 items-center justify-start'>
            <h1 className='text-white text-xl sm:text-2xl lg:text-3xl text-center'>Faça parte da mudança — junte-se ao SOS Gov e ajude a transformar crises em cuidado coletivo</h1>
            <p className='text-neutral-300 text-md sm:text-lg lg:text-xl max-w-[400px] md:max-w-[600px] lg:max-w-[720px] text-center'>
              Clicando no botão abaixo, você acessa nossa página de registro e já pode começar a participar.
              O SOS Gov ainda está em construção — sua opinião nos ajuda a melhorar e fazer a diferença!
            </p>
          </div>
          <button className='bg-sos-purple-100 min-w-80 min-h-12 text-sm rounded-full text-white text-thin cursor-pointer border-sos-purple-100 border-2 hover:bg-black active:bg-black focus:bg-black ease-in-out md:duration-200'>
             <p className='text-2xl'>Juntar-se</p>
          </button>
     </section>
    </>
  )
}

export default Register
