let primitiva = []
let numero = 0
let contador = 0
var MAX_NUMEROS = 6
/*Hasta que no saque 6 números no para*/
while (contador <= MAX_NUMEROS){
    /* Genero un rumero random*/
    numero = Math.floor(Math.random()*49+1)
    /* recorro la array de primitiva*/
    for (i = 0; i < MAX_NUMEROS; i++){
        /* despues de recorrer todo el array compruebo de el numero ya existe en este */
        if (primitiva[i] != numero){
            encontrado = false
        }
        else{
            encontrado = true
        }
    }
    /* En caso de no haber encontrado el número puedo meterlo en  el array y sumo un número posible al contador*/
    if (!encontrado){
        primitiva.push(numero)
        contador++
    }
}
/* pinto */
document.write(primitiva)
