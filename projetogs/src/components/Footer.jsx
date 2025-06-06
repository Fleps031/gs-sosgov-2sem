import logo from '../assets/imgs/logoAlt.png';

function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-between w-full h-[200px] bg-black mt-[100px]">
          <div className="flex flex-col w-[70%] h-full items-start gap-5 justify-center pl-10 text-center">
              <p className="text-white">SOS Gov - Transformando solideriadade em ação conjunta em emergências críticas</p>
              <p className="text-white">Copyright © 2025 SOS GOV. All rights reserved </p>
          </div>
          <div className='h-full flex sm:w-[230px] w-[100px] items-center oveflow-hidden'>
              <img src={logo}></img>
          </div>
      </footer>
    </>
  )
}

export default Footer
