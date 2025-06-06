function Carrosel(imagens){
  return(
    <>
      {imagens.map((s)=>{
        return <img src={s}/>;
        })}
    </>
  )
}


function About() {
  return (
    <>
      <section className="flex flex-col gap-6 w-full h-full items-center p-8">
          <h1 className="text-3xl text-center">Conheça o SOS GOV</h1>
          <div className="flex flex-row w-full justify-center">
              <iframe width="720" height="520" src="https://www.youtube.com/embed/sls4XBg_9ws?autoplay=1&mute=1"></iframe>
          </div>
          <div className="w-full h-0.5 bg-sos-purple-100"></div>

          <h1 className="text-3xl text-center">Como o SOS GOV te ajuda</h1>
      </section>
    </>
  )
}

export default About
