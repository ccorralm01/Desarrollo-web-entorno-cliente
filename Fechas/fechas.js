contador = 0
array_fechas = []
while (contador<5){
    var fecha_usuario = prompt("Introduce una fecha YYYY MM DD: ");
    var fecha = new Date(fecha_usuario)
    array_fechas.push(fecha)
    contador++
}
for (let i = 0; i < array_fechas.length; i++) 
{
    for (let j = 0; j < array_fechas.length; j++) 
    {
        if (array_fechas[j] > array_fechas[j + 1]) 
        {
            let temp = array_fechas[j];
            array_fechas[j] = array_fechas[j + 1];
            array_fechas[j + 1] = temp;
        }
    }
}
for (let i = 0; i < array_fechas.length; i++){
    document.write("Fecha",i+1, ": ",array_fechas[i],"</br>")
}