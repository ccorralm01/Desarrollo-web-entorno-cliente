var palindromo = prompt("Introduce una palabra o frase: ");
var largo_palindromo = palindromo.length;

for(i=0;i<largo_palindromo;i++){
    ordenado += palindromo[i];
}

for(u=largo_palindromo-1;u>=0;u--){
    alreves += palindromo[u];
}

if(ordenado == alreves){
    document.write(palindromo, " es un palíndromo");
}
else{
    document.write(palindromo, " no es un palíndromo");
}
