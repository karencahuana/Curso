const valor= +prompt('Ingrese un valor entre 1 y 5')

switch(valor){
    case 1:
        document.write ('Hola soy numero 1')
        break
    case 2:
        document.write ('Hola soy numero 2')
        break
    case 3:
        document.write ('Hola soy numero 3')
        break
    case 4:
        document.write ('Hola soy numero 4')
        break
    case 5:
        document.write ('Hola soy numero 5')
        break
    default:
    document.write ('Debe ingresar un numero entre el 1 y 5')
    break
}