import MegaFlair from '../assets/MegaFlair.svg'

function Home() {
  return (
    <>
      <section id="Home">
          <section className="flex flex-row w-full h-100 bg-center bg-cover relative z-50" style={{ backgroundImage: `url(${MegaFlair})`}}></section>
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
    </>
  )
}

export default Home
