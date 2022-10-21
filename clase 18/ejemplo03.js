const empleados = [
    {
        nombre: 'Flavia', trabajo: 'desarrollador'
    },
    {
        nombre: 'Nicolas', trabajo: 'abogado'
    },
    {
        nombre: 'Fabian', trabajo: 'desarrollador'
    },
    {
        nombre: 'Sofia', trabajo: 'maestro'
    },
    {
        nombre: 'Camila', trabajo: 'desarrollador'
    },
    {
        nombre: 'Flavia', trabajo: 'jardinero'
    },
    
]
const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)

console.log(desarrollador)