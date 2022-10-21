const fruta = ['tomate', 'palta', 'frutilla', 'anana', 'banana']
console.log(fruta.sort())

const numeros = [78,10,12,7,1,2]
console.log (numeros)
console.log(numeros.sort())

const num= numeros.sort(function(a,b){
    return a-b
})
console.log(num)

const num2= numeros.sort(function(a,b){
    return b-a
})
console.log(num2)

const palabras = ['flavia', 'perro', 'abeja', 'animal', 'pablo']
console.log(palabras.sort().reverse())
