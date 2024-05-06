import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import info from './components/info'

function App() {
  
  const cards = info.map(item => {
    return <Card key={item.id} {...item}/>
  })
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="card--list">
          {cards}
        </section>
        
    </div>
  )
}

export default App
/* <Card img="flora-duffy.png" rating={5.0} country="USA" desc="Life is all about money" price={36}/>
        <Card img="hiking.png" rating={4.3} country="IND" desc="Together is happier than alone" price={45}/>
        <Card img="flora-duffy.png" rating={3.0} country="MAS" desc="Hiking give you health" price={21}/>
        <Card img="hiking.png" rating={2.9} country="IRQ" desc="Hiking give you health" price={13}/>
        <Card img="flora-duffy.png" rating={4.5} country="JPN" desc="Life is all about money" price={50}/>
        <Card img="hiking.png" rating={3.8} country="JPN" desc="Together is happier than alone" price={50}/> */