
import './App.css'
import Perfil from './components/Perfil'
import TarjetaPelicula from './components/TarjetaPelicula'
import Acordeon from './components/Acordeon'
import Buscador from './components/Buscador'
import Contador from "./components/Contador";
import ListaDeCompras from './components/ListaDeCompras'
import Reloj from "./components/Reloj";
import Clicks from "./components/Clicks";
import { useState } from 'react'

const peliculas = [
      { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
      { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
      { id: 3, titulo: "Inception",        año: 2010, vista: false },
      { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
    ];

function App() {

  const [mostrarReloj, setMostrarReloj] = useState(true); 


  return (
    <>
    <div>
        <button onClick={() => setMostrarReloj(!mostrarReloj)}>
          {mostrarReloj ? "Esconder Reloj" : "Mostrar Reloj"}
        </button>
        {mostrarReloj && <Reloj />}
      </div>
     <Contador />
      <Perfil
        nombre="Samu"
        rol="Estudiante"
        lenguajes={["JS", "Java", "Kotlin"]}
      />

      {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
      ))}
    
      <Acordeon titulo="Título algo" contenido="Contenidof" />
      <Buscador/>
      <ListaDeCompras/>
      <Clicks />
    </>
  );
  
}

export default App
