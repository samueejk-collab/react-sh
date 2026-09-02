
export default function TarjetaPelicula({titulo, año, vista}){

    return(
        <>
      <h1>
        {titulo}
        {vista ? " ✓" : ""}
      </h1>
      <p>{año}</p>
      <p>{vista}</p>
    </>
    );
}