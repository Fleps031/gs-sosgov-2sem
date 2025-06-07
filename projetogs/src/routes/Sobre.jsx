import Bombeiros from '../assets/ResgateBombeirosRS.jpeg'

function About() {
  return (
    <>
      <section className='flex flex-col-reverse sm:flex-row sm:grid-cols-2 w-full h-full sm:h-[500px] items-center'>
        <article className='flex flex-col gap-3 pl-6 pr-6 pt-8 pb-8 sm:w-[60%] h-full justify-around bg-black font-thin'>
          <p className=' text-white text-center sm:text-left  text-3xl sm:text-3xl sm:w-full'>Nos últimos anos, milhares de brasileiros perderam suas moradias e vidas devido a enchentes por todo o país</p>
          <hr className='border-gray-300'></hr>
          <p className=' text-white text-center sm:text-left  text-3xl sm:text-3xl'>Pensando nessas pessoas, o SOS GOV nasceu para informar a população e facilitar o resgate, unindo vítimas à quem pode ajudar.</p>
        </article>
        <div className="flex flex-row w-full sm:w-[40%] sm:h-full h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Bombeiros})`}}></div>
      </section>  
      <section className="flex flex-col gap-6 w-full h-full items-center justify-center sm:p-8 p-4" id="Sobre">
          <h1 className="text-3xl text-center">Conheça o SOS GOV</h1>
          <iframe className='flex w-full sm:h-full max-w-[960px] sm:min-h-[480px] sm:max-h-[460px] h-[320px]' src="https://www.youtube.com/embed/sls4XBg_9ws"></iframe>
          <p className='text-center text-2xl'></p>
      </section>
      <article className='flex flex-col gap-3 w-full pb-10 items-center'>
              <div className='w-full h-full bg-black p-6 flex justify-center'>
                  <p className='lg:w-[960px] text-center sm:text-2xl text-white'>
                      O SOS Gov surgiu durante a tragédia climática no Rio Grande do Sul em 2024, quando as enchentes deixaram milhares desabrigados e evidenciaram a dificuldade de resposta rápida do poder público.
                  </p>
              </div>
              <div className='w-full h-full bg-white p-6 flex justify-center'>
                  <p className='lg:w-[960px] text-center sm:text-2xl text-sos-purple-100'>
                     A ideia nasceu da necessidade de conectar diretamente quem precisa de ajuda com quem pode oferecer apoio — voluntários, ONGs e cidadãos engajados — de forma simples e eficiente.
                  </p>
              </div>
              <div className='w-full h-full bg-black p-6 flex justify-center'>
                  <p className='lg:w-[960px] text-center sm:text-2xl text-white'>
                      Nossa missão é centralizar pedidos de socorro e ofertas de ajuda, facilitando a coordenação de ações emergenciais e fortalecendo a rede civil de solidariedade em momentos críticos.
                  </p>
              </div>
            
      </article>
    </>
  )
}

export default About
