/*const num1 = +prompt('Ingrese el primer numero')
const num2 = +prompt('Ingrese el segundo numero')
const num3 = +prompt('Ingrese el tercer numero')

if (num1> num2 && num1 > num3){
    document.write('El numero mayor es ' + num1)
}else if (num2>num3) {
    document.write('El numero mayor es ' + num2)
} else {
    document.write('El numero mayor es ' + num3)
}*/

/*const mes = +prompt ('ingrese mes en numeros: ')

if (mes == 1 || mes == 2 || mes == 3){
    document.write('Corresponde al primer trimestre del año')
} else if (mes == 4 || mes == 5 || mes == 6){
    document.write('Corresponde al segundo trimestre del año')
} else if (mes == 7 || mes == 8 || mes == 9){
    document.write('Corresponde al tercer trimestre del año')
} else {
    document.write('Corresponde al cuarto trimestre del año')
}*/

const nombre = prompt('Ingrese su nombre: ')
const nota = +prompt('Ingrese su nota')

if(Number.isNaN(nota)){
    document.write('La nota no es valida')
} else if ( nota >= 4 ){
    document.write(nombre + ' estas aprobado con ' + nota)
} else {
    document.write(nombre + ' estas desaprobado con ' + nota)
}