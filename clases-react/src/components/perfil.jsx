
export default function Perfil(props){
    const {nombre, rol, lenguajes} = props;
    

    return(
        <>  
          <h1> mi nombre es: {nombre} </h1>
          <p> {rol} </p>
            {lenguajes.map((lenguaje, index) => (
              <div key ={index}>
                <p> {lenguaje} </p>  
              </div>
            ))}
        </>
      );
    }