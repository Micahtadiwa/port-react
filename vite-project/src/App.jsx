import React from 'react'
import NavBar from './Compoments/NavBar/NavBar'
import Hero from './Compoments/Hero/Hero'
import About from './Compoments/About/About'
import Services from './Compoments/Services/Services'
import MyWork from './Compoments/MyWork/MyWork'
import Contact from './Compoments/Contact/Contact'
import Footer from './Compoments/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
} 

export default App