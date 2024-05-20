var array = ["A", "B", "C", "A", "B"];
var nueva_cadena = []
repe = false
for(i=0;i<array.length;i++){
    for(u=0;u<array.length;u++){
        if(array[i]==array[u]&&!repe){
            repe = true
        }
        else{
            repe = false
        }
    }
    if (!repe){
        nueva_cadena.push(array[i])
    }
}
document.write(nueva_cadena)