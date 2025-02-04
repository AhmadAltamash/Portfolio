import React from 'react'
import { About, Hero, Navbar, Projects } from './sections'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto scrollbar-hide'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App