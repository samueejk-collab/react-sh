export default function Persona({titulo,contenido}){


    return(
        <>
        <div>
           <h2 onClick={() => setAbierto(!abierto)}>
            {titulo} {abierto ? '▲' : '▼'} </h2>
           {abierto && <p>{contenido}</p>}
        </div>
        
        </>
    );
}