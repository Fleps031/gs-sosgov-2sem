import { useState } from 'react'
import Nav from './components/nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Solution from './routes/Solução'
import About from './routes/Sobre'
import Register from './routes/Cadastrar'
import Contact from './routes/Contato'

function App() {

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Solution></Solution>
      <Register></Register>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
