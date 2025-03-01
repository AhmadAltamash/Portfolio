import React from 'react'
import { About, Clients, Contact, Experience, Footer, Hero, Navbar, Projects } from './sections'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto scrollbar-hide'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
{/*       <Clients/> */}
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
