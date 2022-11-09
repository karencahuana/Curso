import '../styles/ejemplo5.css'
import { useEffect, useState } from 'react'

const Ejemplo5 = props => {

    const [cargando, setCargando] = useState(false)
    const [personajes, setPersonajes] = useState ([])

    //hooks > useEffect, useState
    //fetch > sirve para traer los datos  y es nativo de js. Se podria usar tmb axios
    //async y await > sirve para manejar errores

    useEffect( () => {
        const cargarDatos = async () => {
            setCargando(true)
            const res = await (await fetch ('https://rickandmortyapi.com/api/character')).json()
            setPersonajes(res.results)
            setCargando(false)
        }
        cargarDatos()

    }, [])

    return(
        <>
        <h1> Ejemplo 5 API</h1>
            {cargando ? <p> cargando datos... </p>:
                <div className="personajes">
                    {personajes.map(personaje =>(
                        <div className='personaje' key={personaje}>
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name}/>
                                </div>
                                <div className="datos">
                                    <h6>Especie: {personaje.species === 'Human' ? 'Humano': personaje.species}</h6>
                                    <h6>Vivo: {personaje.status === 'Alive' ? 'si': 'no'} </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        
        </>
    )
}

export default Ejemplo5