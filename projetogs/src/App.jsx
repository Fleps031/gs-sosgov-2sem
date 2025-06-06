import { useState } from 'react'
import Nav from './components/nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Solution from './routes/Solução'
import About from './routes/Sobre'

function App() {

  return (
    <>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
        <Solution></Solution>
      </main>
      <Footer></Footer>
    
    </>
  )
}

export default App
