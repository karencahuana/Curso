import alumnos from '../data/alumnos.json'

const Ejemplo4 = props =>{
    return(

        <>

        <h1>
            hola soy la pagina de ejemplo 4 
        </h1>
        <ul>
            {
                alumnos.map( alumno => (
                    <li>{alumno.nombre} {alumno.apellido} <br/> {alumno.edad}</li>
                )
                )
            }
        </ul>
        </>
    )
}

export default Ejemplo4