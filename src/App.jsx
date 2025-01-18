import React from 'react'
import { About, Hero, Navbar } from './sections'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App