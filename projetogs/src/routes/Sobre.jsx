import { useState } from 'react'

import SlideMap from '../assets/imgs/CarAboutSlide1.png'
import SlideAlert from '../assets/imgs/CarAboutSlide2.png'
import SlideRescue from '../assets/imgs/CarAboutSlide3.png'

import Slider from '../assets/Slider.svg'


function Carrosel(props){
    let[currentSlide, setCurrentSlide] = useState(0);

    const sliderClass = 'w-8 h-8 rounded-full border-sos-purple-100 border-1 cursor-pointer hover:bg-sos-purple-100 focus:bg-sos-purple-100 hover:transform-[scale(1.1)] ease-in-out duration-300';

    function changeSlide(index) {
      setCurrentSlide(index)
    }

    return(
      <> 
          <div className='flex w-full h-full justify-center items-center'>
               <div className='flex flex-row sm:w-160 sm:h-full w-full h-100 overflow-hidden'>
                {props.slides.map((s, i)=>{
                    return <div 
                              className='flex flex-row bg-center bg-cover h-full min-w-full sm:h-90 relative transition ease-in-out duration-400' 
                              style={
                                      { 
                                        backgroundImage: `url(${s.src})`,
                                        transform: `translateX(-${currentSlide * 100}%)`
                                      }
                                    } 
                              key={'slide_'+i}
                        >
                        <div className='flex absoulte top-20 w-full items-center text-center justify-center h-full z-10 pl-2 pr-2'>
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


function About() {

  let slidesCarrosel = [
    {label: 'Mapa da sua região, com pontos de risco e apoio', src: SlideMap},
    {label: 'Alertas de tempestades e enchentes em tempo real', src: SlideAlert},
    {label: 'Solicite um resgate com poucos cliques para oficiais do governo e voluntários na sua região', src: SlideRescue}
  ]
  

  return (
    <>
      <section className="flex flex-col gap-6 w-full h-full items-center sm:p-8 p-4">
          <h1 className="text-3xl text-center">Conheça o SOS GOV</h1>
          <div className="flex-row w-full justify-center hidden sm:flex mb-8">
              <iframe width="720" height="420" src="https://www.youtube.com/embed/sls4XBg_9ws"></iframe>
          </div>
      </section>
    </>
  )
}

export default About
