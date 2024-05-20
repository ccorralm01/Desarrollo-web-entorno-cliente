for(x=0,y=palabra.length-1;x<=y;x++,y--){
    if(palabra[x]!=palabra[y]){
        palindromo = false;
        break;
    }
}