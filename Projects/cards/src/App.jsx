import React from 'react'
import Card from './components/Card'
const App = () => {

  const cardsElements = [
    {
      serialNo: 1,
      imageLink: "https://imgs.search.brave.com/rRwltJGFhqkDiLf8XxF93_cZfOWBBcft1LEOH3cIzeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTEvUG9r/ZW1vbi1CdWxiYXNh/dXItVHJhbnNwYXJl/bnQtQmFja2dyb3Vu/ZC5wbmc",
      name: "Bulbasaur",
      features: "poison , grass"
    },
    {
      serialNo: 2,
      imageLink: "https://www.pngmart.com/files/22/Ivysaur-Pokemon-Background-Isolated-PNG.png",
      name: "Ivysaur",
      features: "poison , grass"
    },
    {
      serialNo: 3,
      imageLink: "https://www.pngmart.com/files/22/Venusaur-Pokemon-PNG-Isolated-HD.png",
      name: "Venusaur",
      features: "poison , grass"
    },
    {
      serialNo: 4,
      imageLink: "https://www.pngmart.com/files/13/Pokemon-Charmander-Transparent-PNG.png",
      name: "Charmander",
      features: "fire"
    },
    {
      serialNo: 5,
      imageLink: "https://www.pngmart.com/files/22/Charmeleon-Pokemon-PNG-Photo.png",
      name: "Charmeleon",
      features: "fire"
    },
    {
      serialNo: 6,
      imageLink: "https://www.pngmart.com/files/23/Blastoise-PNG-Pic.png",
      name: "Blastoise",
      features: "water"
    },
    {
      serialNo: 7,
      imageLink: "https://www.pngmart.com/files/22/Caterpie-Pokemon-PNG-Pic.png",
      name: "Caterpie",
      features: "bug"
    },
    {
      serialNo: 8,
      imageLink: "https://archives.bulbagarden.net/media/upload/thumb/d/da/0011Metapod.png/375px-0011Metapod.png",
      name: "Metapod",
      features: "bug"
    },
    {
      serialNo: 9,
      imageLink: "https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/375px-0013Weedle.png",
      name: "Weedle",
      features: "poison , bug"
    },
    {
      serialNo: 10,
      imageLink: "https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/375px-0014Kakuna.png",
      name: "Kakuna",
      features: "poison , bug"
    }
  ]

    console.log(cardsElements)

  return (

    <div className='parent'>
      <h1>TYPED POKEDEX</h1>
      <div className='cards-div'>
          { cardsElements.map((e) => {
            return <Card serialNo = {e.serialNo} imageLink = {e.imageLink} name = {e.name} features = {e.features} />
          })}
  
      </div>

    </div>
  )
}

export default App

