import React from 'react'
import { About, Clients, Contact, Footer, Hero, Navbar, Projects } from './sections'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto scrollbar-hide'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      {/* <Work/> */}
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App