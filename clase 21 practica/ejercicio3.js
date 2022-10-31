const numeros = [5,9,45,78,12]
let numeroMayor = -999

for(let i=0; i<numeros.length; i++){
    let numero = numeros[i]
    if(numero>numeroMayor){
        numeroMayor = numero
    }
}
alert(numeroMayor)