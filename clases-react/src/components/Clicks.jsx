import { useState, useRef } from 'react';

function Clicks() {
    
  const [clicks, setClicks] = useState(0);
  
  const rendersRef = useRef(0);

  rendersRef.current++;

  return (
    <div>
      <p>Veces que hiciste click: {clicks}</p>
      <p>Veces que se re-renderizo: {rendersRef.current}</p>
      <button onClick={() => setClicks(clicks + 1)}>Sumar Click</button>
    </div>
  );
}

export default Clicks;

// use ref es sirve para guardar un valor que querés que se mantenga intacto entre cada render (recarga) del componente,
// sin provocar que el componente se vuelva a renderizar cuando ese valor cambia