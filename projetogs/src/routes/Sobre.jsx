import Bombeiros from '../assets/ResgateBombeirosRS.jpeg'

function About() {
  return (
    <>
      <section className='flex flex-col-reverse sm:flex-row sm:grid-cols-2 w-full h-full sm:h-[500px] items-center'>
        <div className='flex flex-col gap-3 pl-6 pr-6 pt-8 pb-8 sm:w-[60%] h-full justify-around bg-black font-thin'>
          <p className=' text-white text-center sm:text-left  text-3xl sm:text-3xl sm:w-full'>Nos últimos anos, milhares de brasileiros perderam suas moradias e vidas devido a enchentes por todo o país</p>
          <hr className='border-gray-300'></hr>
          <p className=' text-white text-center sm:text-left  text-3xl sm:text-3xl'>Pensando nessas pessoas, o SOS GOV nasceu para informar a população e facilitar o resgate, unindo vítimas à quem pode ajudar.</p>
        </div>
        <div className="flex flex-row w-full sm:w-[40%] sm:h-full h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Bombeiros})`}}></div>
      </section>  
      <section className="flex flex-col gap-6 w-full h-full items-center justify-center sm:p-8 p-4">
          <h1 className="text-3xl text-center">Conheça o SOS GOV</h1>
          <iframe className='flex w-full sm:h-full max-w-[960px] sm:min-h-[480px] sm:max-h-[460px] h-[320px]' src="https://www.youtube.com/embed/sls4XBg_9ws"></iframe>
          {/* <div className="flex-row min-h-[360px] min-w-[480px] w-full h-[100%] justify-center flex mb-8">
              <iframe width='100%' height='100%' src="https://www.youtube.com/embed/sls4XBg_9ws"></iframe>
          </div> */}
      </section>
    </>
  )
}

export default About
