const edad = parseInt(prompt("Por favor ingrese su edad"))
if(Number.isNaN(edad)){
    alert("Debes ingresar un numero")
} else if(edad > 18){
    alert("Puede conducir")
} else {
    alert("no puede conducir")
}
