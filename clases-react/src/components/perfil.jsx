
export default function Perfil(props){
    const {nombre} = props;
    const {rol} = props;
    const {lenguajes}= props;

    return(
        <>
        <div Classname = "borde">
          <h1> mi nombre es: {nombre} </h1>
          <p> {rol} </p>
        <ul> 
          <li> {lenguajes[0]} </li>
          <li> {lenguajes[1]} </li>
          <li> {lenguajes[2]} </li>
       </ul>
        </div>
        
        </>
    );
}