import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidemenu from './components/SideMenu/Sidemenu'
import Header from './components/Header/Header'
import { useGlobalContext } from './utils/Context'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import Footer from './components/Footer/Footer'
import SectionFour from './components/SectionFour/SectionFour'

function App() {
  const {dropClose} = useGlobalContext();
  return (
    <div className="App">
      <Navbar/>
      <main onMouseOver={dropClose}>
      <Sidemenu/>
      <Header/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
      </main>
    </div>
  )
}

export default App
