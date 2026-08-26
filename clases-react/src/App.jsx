import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Persona from './components/persona'
import Perfil from './components/perfil'

const peliculas = [
      { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
      { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
      { id: 3, titulo: "Inception",        año: 2010, vista: false },
      { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
    ];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>{/*
      <h1> hola mundo </h1>
      <Persona nombre="Samuel" />
      <ul> 
          <li> JAVA </li>
          <li> JS </li>
          <li> python </li>
      </ul>*/}
     {/* <Perfil nombre="sam" 
      rol="Desarrollador"
      lenguajes={["JavaScript", "React", "CSS"]} />*/}
      
    </>
  )
}

export default App
