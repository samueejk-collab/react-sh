import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Persona from './components/persona'
import Perfil from './components/perfil'
import TarjetaPelicula from './components/TarjetaPelicula'

const peliculas = [
      { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
      { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
      { id: 3, titulo: "Inception",        año: 2010, vista: false },
      { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
    ];

function App() {
  const [cuenta , setcuenta] = useState(0) //use = hook valor inicial 0, guardar valor en cuenta
  const [count, setCount] = useState(0)
//estado actualizar function
  return (
    <>
     {
      <Perfil nombre="samu" 
      rol="Desarrollador"
      lenguajes={["JavaScript", "React", "CSS"]} />}

    {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
            ))}
      <h2> Conatador:</h2>
      <div>
        <p>{cuenta}</p>
        <button onClick={()=> setcuenta(cuenta + 1)}>Sumar</button>
        <button onClick ={() => setcuenta(cuenta - 1)}>Restar</button>
        <button onClick={() => setcuenta((0))}>reiniciar</button>
      </div>
    </>
  )
}

export default App
