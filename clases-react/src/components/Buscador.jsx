import { useState } from 'react';

export default function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const frutas = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"];

  const frutasFiltradas = frutas.filter(fruta =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul>
        {frutasFiltradas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}