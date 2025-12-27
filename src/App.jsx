import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisiMisi from './components/VisiMisi'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <VisiMisi />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
