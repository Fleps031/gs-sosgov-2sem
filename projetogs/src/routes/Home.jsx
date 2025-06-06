import MegaFlair from '../assets/MegaFlair.svg'
import Bombeiros from '../assets/ResgateBombeirosRS.jpeg'

function Home() {
  return (
    <>
      <section>
          <section className="flex flex-row w-full h-100 bg-center bg-cover relative z-50 top-1" style={{ backgroundImage: `url(${MegaFlair})`}}></section>
          <section className='bg-sos-purple-100 w-full h-full sm:h-75 grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-3 pl-8 pr-8 sm:pl-7 sm:pr-7 pb-8 sm:pb-0 items-center'>
            <div className='grid grid-rows-1 gap-3 sm:gap-0'>
              <h1 className='font-extrabold text-white text-center sm:text-left text-5xl sm:text-6xl'>SOS GOV</h1>
              <p className='text-white pl-1 text-center sm:text-left'>Uma iniciativa em parceria com o Governo Federal do Brasil</p>
            </div>
            <div></div>
            <div>
              <p className='text-white text-3xl font-normal text-center sm:text-right'>Atente-se a chuvas fortes e risco de enchentes na sua região em tempo real.</p>
            </div>
          </section>
      </section>

      <section className='flex flex-col-reverse sm:flex-row sm:grid-cols-2 w-full h-fit sm:h-[500px] items-center'>
        <div className='flex flex-col gap-3 pl-6 pr-6 pt-8 pb-8 sm:w-[60%] h-full justify-around bg-black font-thin'>
          <p className=' text-white text-center sm:text-left  text-3xl sm:text-3xl sm:w-full'>Nos últimos anos, milhares de brasileiros perderam suas moradias e vidas devido a enchentes por todo o país</p>
          <hr className='border-gray-300'></hr>
          <p className=' text-white text-center sm:text-left  text-3xl sm:text-3xl'>Pensando nessas pessoas, o SOS GOV nasceu para informar a população e facilitar o resgate, unindo vítimas à quem pode ajudar.</p>
        </div>
        <div className="flex flex-row w-full sm:w-[40%] sm:h-full h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Bombeiros})`}}></div>
      </section>
    </>
  )
}

export default Home
