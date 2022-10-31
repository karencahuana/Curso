const alumnos = [
    {
        nombre: 'Tifa', edad: 10
    },
    {
        nombre: 'Charlie', edad: 1
    },
    {
        nombre: 'Pepe', edad: 5
    },
    {
        nombre: 'Lila', edad: 4
    },
    {
        nombre: 'Centi', edad: 7
    },
    {
        nombre: 'Tifa', edad: 8
    },
]
const chicos = alumnos.filter(
    alumno => alumno.edad <= 4
)

console.log(chicos)

for (let i= 0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad} </p>`)
}