const datosUsuario = [
    {
        nombre: 'Tifa', password: 'abc123'
    },
    {
        nombre: 'Charlie', password: '456123'
    },
    {
        nombre: 'Lila', password: 'abc123de'
    },
    {
        nombre: 'Pepe', password:'abc'
    }
]

const soloPassword = datosUsuario.map(function(p){
    return p.password
})

console.log(soloPassword)