var numero_filas_columnas = prompt("Introduce un número para las filas y las columnas: ");
var matriz = [[],[]];
var contador = 0;

for(i=0;i<=numero_filas_columnas;i++){
    for(u=0;u<=numero_filas_columnas;u++){
        matriz[i,u] = contador++;
        
    }
    document.write("<br/>");
}
document.write(matriz);