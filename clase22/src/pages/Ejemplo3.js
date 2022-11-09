import '../styles/estilos.css'

const Ejemplo3 = props =>{
    return(
        <div>
            <h1> Ejemplo: Google Maps</h1>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13139.691397741064!2d-58.49726015!3d-34.58081865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb644763fb5b9%3A0x3393073d887fe59d!2sPizzer%C3%ADa%20El%20Corte!5e0!3m2!1ses-419!2sar!4v1668021733462!5m2!1ses-419!2sar" style={{ width: 1000, height: 450, border:0 }}></iframe>
            </div>
        </div>
    )
}


export default Ejemplo3