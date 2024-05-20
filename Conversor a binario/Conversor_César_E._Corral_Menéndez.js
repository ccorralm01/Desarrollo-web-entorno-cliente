function dale()
{
    var tipo = document.getElementById("salector").value
    if(tipo == "1"){
        eliminarElementos()
        let div_form = document.createElement("div");
        let cuadro_texto = document.createElement("input");
        let cuadro_texto2 = document.createElement("input");
        let parrafo1 = document.createElement("p");
        let parrafo2 = document.createElement("p");
        let botton = document.createElement("input");

        parrafo1.textContent = "Introduce decimal:";
        parrafo2.textContent = "Binario resultante";
        cuadro_texto.setAttribute("type", "number");
        cuadro_texto.setAttribute("id", "texto");
        cuadro_texto.setAttribute("class", "texto1");
        div_form.setAttribute("id", "div_form"); 
        cuadro_texto2.setAttribute("type", "text2");
        cuadro_texto2.setAttribute("id", "text2");
        cuadro_texto2.setAttribute("readonly", "readonly");
        cuadro_texto2.setAttribute("class", "texto2");
        botton.setAttribute("type", "button");
        botton.setAttribute("id", "boton");
        botton.setAttribute("onclick", "convertirNumeroaBinario()");
        botton.setAttribute("value", "convertir")

        div_form.appendChild(parrafo1);
        div_form.appendChild(cuadro_texto);
        div_form.appendChild(botton);
        div_form.appendChild(parrafo2);
        div_form.appendChild(cuadro_texto2);
        document.body.appendChild(div_form);

    }
    else{
        eliminarElementos()
        let div_form = document.createElement("div");
        let cuadro_texto = document.createElement("input");
        let cuadro_texto2 = document.createElement("input");
        let parrafo1 = document.createElement("p");
        let parrafo2 = document.createElement("p");
        let botton = document.createElement("input");

        parrafo1.textContent = "Introduce binario:";
        parrafo2.textContent = "Decimal resultante";
        cuadro_texto.setAttribute("type", "number");
        cuadro_texto.setAttribute("id", "texto");
        cuadro_texto.setAttribute("class", "texto1");
        div_form.setAttribute("id", "div_form"); 
        cuadro_texto2.setAttribute("type", "text");
        cuadro_texto2.setAttribute("id", "text2");
        cuadro_texto2.setAttribute("readonly", "readonly");
        cuadro_texto2.setAttribute("class", "texto2");
        botton.setAttribute("type", "button");
        botton.setAttribute("id", "boton");
        botton.setAttribute("onclick", "convertirNumeroaDecimal()");
        botton.setAttribute("value", "convertir")

        div_form.appendChild(parrafo1);
        div_form.appendChild(cuadro_texto);
        div_form.appendChild(botton);
        div_form.appendChild(parrafo2);
        div_form.appendChild(cuadro_texto2);
        document.body.appendChild(div_form);
    }
}

function convertirNumeroaBinario(){
    let caja_texto_vacia = document.getElementById("text2");
    let resultado = "";
    let numero = document.getElementById("texto").value;
    while(numero > 0){
        if(numero%2 == 0){
            resultado+="0";
        }
        else{
            resultado+="1";
        }
        numero /= 2;
        numero = Math.trunc(numero);
    }
    separar_cadena = resultado.split("");
    invertir_array = separar_cadena.reverse();
    unir_array = invertir_array.join("");

    caja_texto_vacia.setAttribute("value", unir_array);
    return unir_array;
}

function convertirNumeroaDecimal(){
    let caja_texto_vacia = document.getElementById("text2");
    let numero_binario = document.getElementById("texto").value;
    let decimal = 0
    if(comprobarBinario() == false){
        alert("El numero no es valido, introduzca un binario");
    }
    else{
        separar_cadena =  numero_binario.split("");
        numero_binario_invertido = separar_cadena.reverse();
        for(let i=0; i<=numero_binario_invertido.length; i++){
            console.log("Indice: ",i);
            if(parseInt(numero_binario_invertido[i]) == 1){
                decimal += Math.pow(2, i);
                console.log("Hay en array:", numero_binario_invertido[i]);
                console.log("Indice: ",i);
                console.log("Potencia: ", Math.pow(2, i))  
            }
            
        }
        caja_texto_vacia.setAttribute("value", decimal);
    }
}


function comprobarBinario(){
    let esbinario = true;
    let binario = document.getElementById("texto").value;
    let binario_string = binario.toString();
    for(let i=0;i<binario_string.length;i++){
        if (binario_string[i] == "1" || binario_string[i] == "0"){
            esbinario = true;
        }
        else{
            esbinario = false;
        }
    }
    return esbinario;
}


function eliminarElementos(){
    if(document.getElementById("div_form")){
        let div_form = document.getElementById("div_form");
        div_form.remove();
    }
}
