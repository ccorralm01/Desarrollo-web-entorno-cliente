var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
    "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
var numero_dni = prompt("Introduce tu DNI: ");
while (isNaN(numero_dni)){
    var numero_dni = prompt("El número no es correcto: ");
}

function nif(nd)
{
    let resto = numero_dni%23
    console.log(nd, letras[resto]);
}

nif(numero_dni)
