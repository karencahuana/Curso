import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../componentes/layout/props/Props"

const lista = ['manzana', 'banana','pera','frutilla']
const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = props => {
    return(
        <div> 
            <h1> Ejemplo de propiedades </h1>
            <Ejemplo1Props nombre='Tifa'/>
            <Ejemplo2Props elementos = {lista}/>
            <Ejemplo3Props titulos= "La Noticia" subtitulo="Soy el subtitulo de la noticia" cuerpo="Cuerpo de la noticia"/>
            <Ejemplo4Props cambiarValor = {mostrarValor}/>
            <Ejemplo5Props eventoClick= {mostrarValor}/>
        </div>
    )
}

mostrarValor(1355)

export{
    Ejemplo1
}