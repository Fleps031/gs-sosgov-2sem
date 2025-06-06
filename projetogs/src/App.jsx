import { useState } from 'react'
import Nav from './components/nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Solution from './routes/Solução'
import About from './routes/Sobre'
import Register from './routes/Cadastrar'

function App() {

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Solution></Solution>
      <Register></Register>
      <Footer></Footer>    
    </>
  )
}

export default App
