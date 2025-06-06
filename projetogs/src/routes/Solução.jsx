import { useState } from 'react'

import SlideMap from '../assets/imgs/CarAboutSlide1.png'
import SlideAlert from '../assets/imgs/CarAboutSlide2.png'
import SlideRescue from '../assets/imgs/CarAboutSlide3.png'

import RescueDownload from '../assets/imgs/CarRes1.png';
import RescueButton from '../assets/imgs/CarRes2.png';
import RescueRequest from '../assets/imgs/CarRes3.png';

import PolicialSOS from '../assets/imgs/PolicialSOS.svg'
import BarcoSOS from '../assets/imgs/BarcoSOS.svg'

import Slider from '../assets/Slider.svg'


function Carrossel(props){
    let[currentSlide, setCurrentSlide] = useState(0);

    const sliderClass =`
        w-8 h-8 sm:w-6 sm:h-6 rounded-full border-sos-purple-100 border-1 cursor-pointer 
        hover:bg-sos-purple-100 focus:bg-sos-purple-100 hover:transform-[scale(1.1)] 
        ease-in-out duration-300`;

    function changeSlide(index) {
      setCurrentSlide(index)
    }

    return(
      <> 
          <div className='flex w-full h-full justify-center items-center overflow-hidden'>
               <div className='flex flex-row sm:w-200 sm:h-120 w-200 h-100 overflow-hidden'>
                {props.slides.map((s, i)=>{
                    return <div 
                              className='flex flex-row bg-center bg-cover h-full min-w-full sm:h-120 relative transition ease-in-out duration-400' 
                              style={
                                      { 
                                        backgroundImage: `url(${s.src})`,
                                        transform: `translateX(-${currentSlide * 100}%)`
                                      }
                                    } 
                              key={'slide_'+i}
                        >
                        <div className='flex top-20 w-full items-center text-center justify-center h-full z-10 pl-2 pr-2'>
                          <h1 className='text-2xl text-white'>{s.label}</h1> 
                        </div>     
        
                        <div className='flex w-full h-full bg-sos-slide-cover-100 absolute top-0'></div>  
                    </div>
                })}
              </div>
          </div>
          
          <div className='flex flex-row w-full justify-center align-center margin-auto gap-6'>
              <div className={`${sliderClass} ${currentSlide == 0 ? 'bg-sos-purple-100' : 'bg-transparent'}`} onClick={() => changeSlide(0)}></div>   
              <div className={`${sliderClass} ${currentSlide == 1 ? 'bg-sos-purple-100' : 'bg-transparent'}`} onClick={() => changeSlide(1)}></div>   
              <div className={`${sliderClass} ${currentSlide == 2 ? 'bg-sos-purple-100' : 'bg-transparent'}`} onClick={() => changeSlide(2)}></div>   
          </div>
 
      </>
    )
}

function CarrosselResgate(props){
  let[currentSlide, setCurrentSlide] = useState(0);


  const sliderClass =`
      w-8 h-8 sm:min-w-[128px] sm:min-h-[128px] min-w-[64px] min-h-[64px] rounded-full border-sos-purple-100 border-1 cursor-pointer 
      hover:bg-sos-purple-100 focus:bg-sos-purple-100 hover:transform-[scale(1.1)] 
      ease-in duration-200 flex justify-center items-center`;


  function changeSlide(index) {
    setCurrentSlide(index)
  }

  return(
    <>
      <div className='flex md:flex-row flex-col w-full h-full items-center justify-start relative sm:px-8 sm:overflow-scroll lg:overflow-hidden sm:pt-10 pt-4 lg:pt-0 lg:col-span-2'>
          <div className='flex flex-row w-[300px] sm:h-[600px] h-[400px] mt-10 overflow-hidden min-w-[300px] items-center'>
            {props.slides.map((s, i)=>{
                return <div 
                          className={`flex flex-row bg-center bg-contain h-full min-w-full bg-no-repeat justify-center`}
                          style={
                                  { 
                                    backgroundImage: `url(${s.src})`,
                                    transform: `translateX(-${currentSlide * 100}%)`
                                  }
                                } 
                          key={'slide_'+i}
                    >
                </div>
            })}
          </div>
          <div className='flex flex-col justify-start align-center md:absolute top-10 left-60 z-1 sm:gap-16 gap-6 mt-12 py-6 sm:pb-6'>
            {props.slides.map((s, i)=>{     
                return <div className='flex flex-row gap-4 w-full h-full justify-start pl-5' key={`slider_`+i}>
                     <div className={`${sliderClass} ${currentSlide == i ? 'bg-sos-purple-100' : 'bg-zinc-400 border-zinc-400 hover:border-sos-purple-100'}`} onClick={() => changeSlide(i)}>
                      <p className={`text-4xl font-semibold text-center text-white`}>{i + 1}</p>
                    </div>
                    <div className='flex flex-col justify-center pr-2'>
                        <h1 className={`sm:text-2xl text-xl font-bold ${currentSlide == i ? 'text-sos-purple-100' : 'text-zinc-400'}`}>{s.label}</h1>
                        <p className={`sm:text-lg text-md ${currentSlide == i ? 'text-black' : 'text-zinc-400'}`}>{s.description}</p>
                    </div>
                  </div>
            })}
          </div>
      </div>

      
    </>
  )
}


function Solution() {
    let slidesCarrossel = [
      {label: 'Mapa da sua região, com pontos de risco e apoio', src:  SlideMap},
      {label: 'Alertas de tempestades e enchentes em tempo real', src: SlideAlert},
      {label: 'Solicite um resgate com poucos cliques para oficiais do governo e voluntários na sua região', src: SlideRescue}
    ]

    let slidesResgate = [
      {label:'Baixe o App gratuitamente', description:'O aplicativo SOS Gov está disponível nas principais lojas de aplicativo, como Playstore (Android) e Appstore (IOS)', src: RescueDownload },
      {label:'Aperte o botão de chamado', description:'Após abrir o aplicativo, o botão de chamado pode ser encontrado na seção inferior da tela de início', src: RescueButton },
      {label:'Selecione sua necessidade', description:'Com poucos cliques informe qual sua necessidade durante a emergência, para que os socorristas saibam exatamente como te ajudar :)', src: RescueRequest },
    ]

    let slidesResgateVoluntario = [
      {label:'Resgates na sua região atualizados em tempo real', description:'', src: RescueDownload },
      {label:'Filtre as solicitações próximas de você', description:'', src: RescueButton },
      {label:'Aceite o chamado e salve vidas!', description:'', src: RescueRequest },
    ]

    return (
      <>
        <section className='flex flex-col w-full h-full gap-4 items-center pb-10'>
            <div className="w-full h-0.5 bg-sos-purple-100"></div>

            <h1 className="text-3xl text-center mt-8">Como o SOS GOV te ajuda</h1>
            <section className='flex flex-row w-full justify-center flex-wrap gap-12 lg:gap-0'>
                <section className="flex flex-col gap-6 lg:w-[90%] w-[100%] h-full items-center sm:p-0 p-0">
                  <Carrossel slides={slidesCarrossel}/>
                </section>
            </section>


            <div className="w-[50%] h-0.5 bg-sos-purple-100"></div>
            <section className="flex flex-col gap-6 w-full h-full items-center lg:relative static sm:pb-20 pt-10">
                <h1 className="text-3xl text-center mt-8 px-4">Veja como é fácil solicitar um resgate e contatar as autoridades locais ou voluntários próximos diretamente:</h1>

                <div className='flex w-full justify-center gap-2 md:static relative py-10'>
                    <img className='absolute md:static lg:w-[200px] md:w-[160px] w-[80px] sm:w-[120px] sm:top-68 sm:left-12 top-49 left-[1vw]  z-1 ' src={PolicialSOS}></img>
                    <div className='flex flex-col gap-2 sm:flex-row border-sos-purple-100 border-1 max-w-[920px] h-full rounded-lg w-[80%] relative lg:static'>
                      <CarrosselResgate slides={slidesResgate}/>
                    </div> 
                </div>

                <div className="w-[50%] h-0.5 bg-sos-purple-100"></div>

                <h1 className="text-3xl text-center mt-8 px-4 py-10">E para voluntários, o processo de salvar vidas se tornou prático e coordenado: </h1>

                <div className='flex w-full justify-center gap-2 lg:static relative sm:pl-6'>
                    <div className='flex flex-col gap-2 sm:flex-row border-sos-purple-100 border-1 max-w-[920px] h-full rounded-lg w-[80%] relative lg:static'>
                      <CarrosselResgate slides={slidesResgateVoluntario}/>
                    </div> 
                    <img className='absolute lg:static lg:w-[400px] lg:pt-85 md:w-[300px] w-[180px] sm:w-[200px] sm:top-120 md:top-150  sm:right-1 top-75 right-[1vw] z-1 ' src={BarcoSOS}></img>
                </div>
            </section>
        </section>
      
      </>
    )
}

export default Solution
