import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import '@fontsource/lexend-deca';
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Readytostart from './Components/Readytostart'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
  
    <div className='w-full h-screen bg-white text-black font-sans'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Readytostart/>
    <Footer/>
    </div>
    
   
  )
}

export default App