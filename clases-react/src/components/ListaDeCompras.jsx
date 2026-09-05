import { useState } from 'react';

export default function ListaDeCompras() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState('');

  const agregar = (e) => {
    e.preventDefault();
    if (texto === '') return;

    setLista([...lista, { texto: texto, comprado: false }]);
    setTexto('');
  };

  const tachar = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].comprado = !nuevaLista[index].comprado;
    setLista(nuevaLista);
  };

  const borrar = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  const faltantes = lista.filter(item => !item.comprado).length;

  return (
    <div>
      <form onSubmit={agregar}>
        <input 
          type="text" 
          value={texto} 
          onChange={(e) => setTexto(e.target.value)} 
        />
        <button type="submit">Agregar</button>
      </form>

      <p>Faltan comprar: {faltantes}</p>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={item.comprado} 
              onChange={() => tachar(index)} 
            />
            <span style={{ textDecoration: item.comprado ? 'line-through' : 'none' }}>
              {item.texto}
            </span>
            <button onClick={() => borrar(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}