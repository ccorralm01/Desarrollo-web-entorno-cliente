var numecantidad_numeros = prompt("Introduce un número: ")
var resultado = 0
var numero_anterior = 0
var numero_actual = 1
contador = 0

while (contador < numecantidad_numeros){

    resultado = numero_actual + numero_anterior;
    document.write(numero_anterior+" + "+numero_actual+" = "+resultado+"  |  ");
    numero_anterior = numero_actual;
    numero_actual = resultado;
    contador = contador + 1;
    
}

