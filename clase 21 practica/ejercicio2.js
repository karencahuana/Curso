/*Ejercicio 2

Crear un código que dada una distancia determine el medio de transporte apropiado de acuerdo a
las siguientes reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión
*/


const distancia = parseInt(prompt("Ingresé la distancia"))
    if(distancia < 1000){
        alert("Puede ir a pie")
    } else if (distancia >=1000 && distancia <10000){
        alert("Puede ir en bicicleta")
    } else if (distancia >=10000 && distancia <30000){
        alert("Puede ir en colectivo")
    } else if (distancia >=30000 && distancia <100000){
        alert("Puede ir en auto")
    } else {
        alert("Debe ir en avion")
    }
