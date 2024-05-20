var array = ["A", "B", "C", "A", "B"];
var nueva_cadena = []
contador = 0
for(i=0;i<array.length;i++){
    for(u=0;u<array.length;u++){
        if(array[i]==array[u]){
            repe = true
        }
        else{
            repe = false
        }
    }
    if (repe && contador<1){
        nueva_cadena.push(array[i])
    }
}
document.write(nueva_cadena)