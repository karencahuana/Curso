const Ejemplo1Props = props => {
    return(
        <h3>
            Hola {props.nombre}
        </h3>
    )
}
const Ejemplo2Props = props => {
    const {elementos} = props
    return(
        <ul>
            {elementos.map(elemento => <li key = {elemento}> {elemento} </li>)}
        </ul>
    )
}

const Ejemplo3Props = ({titulos, subtitulo, cuerpo}) => {
    return (
        <div>
            <h3>{titulos}</h3>
            <h4>{subtitulo}</h4>
            <h5>{cuerpo}</h5>
        </div>
    )
}

const Ejemplo4Props = props => {
    return(
    // cuando ejecutamos el evento onChange el input va tomar lo que sucede en la funcion cambiarValor entonces recibimos la propiedad de cambiar valor 
    <label> ver consola : 
        <input type="text" onChange={(e) => props.cambiarValor(e.target.value)}/>
    </label>
    )
}

const Ejemplo5Props = props => {

    const handleClick = e => {
        if(props.eventoClick){
            props.eventoClick('Me clickeaste')
        }
    }

    return(
        <p>
            <button onClick={handleClick}>Clickeame!</button>
        </p>
    )
}


export{
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props,
    Ejemplo4Props,
    Ejemplo5Props
}