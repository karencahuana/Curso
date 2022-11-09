import { Ejemplo1Estado, Ejemplo2Estado } from "../componentes/layout/estados/Estado"
import '../styles/estilos.css'

const Ejemplo2 = props =>{
    return(
        <div>
            <h1> EJEMPLOS ESTADOS</h1>
            <Ejemplo1Estado/>
            <Ejemplo2Estado/>

        </div>
    )
}

export default Ejemplo2