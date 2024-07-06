import { useState } from 'react'
import Navbar from './components/Navbar'
import Locations from './components/data'
import './App.css'
import Card from './components/Card'

function App() {
  const locations = Locations.map((location)=>{
    return (
      <Card key={location.id} {...location}/>
    );
  });
  return (
    <>
      <Navbar/>
      <section className='card-list'>
        {locations}
      </section>
    </>
  )
}

export default App
