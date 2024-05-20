class calculadora{
    constructor(operador1, operador2, operacion){
        this.operador1 = parseFloat(operador1)
        this.operador2 = parseFloat(operador2)
        console.log("operador1: ", operador1)
        console.log("operacion: ", operacion)
        console.log("operador2: ", operador2)

        if(operacion == "+"){
           this.resultado = this.sumar()
        }
        else if(operacion == "-"){
            this.resultado = this.restar()
        }
        else if(operacion == "X"){
            this.resultado = this.multilicar()
        }
        else if(operacion == "/"){
            this.resultado = this.dividir()
        }
        else if(operacion == "%"){
            this.resultado = this.modulo()
        }
        console.log(this.resultado)
    }

    sumar(){
        return this.operador1 + this.operador2
    }

    restar(){
        return this.operador1 - this.operador2
    }

    multilicar(){
        return (this.operador1 * this.operador2)
    }

    dividir(){
        if(this.operador2 = 0){
            return "ERROR Cálculo"
        }
        else{
            return this.operador1 / this.operador2
        }
    }

    modulo(){
        return this.operador1 % this.operador2
    }
}

let boton = document.querySelectorAll("button")
operador1 = ""
operador2 = ""
operacion = ""
operaciones = ["+", "-", "/", "X", "%"]
control_numeros = true
boton.forEach(function(item){
    item.addEventListener('click', function(){
        let display = document.getElementById("texto")
        // Si es numero
        if(!isNaN(item.innerHTML)){
            if(display.innerHTML.length < 22){
                display.innerHTML += item.innerHTML
            }
        }
        // No es numero
        else{
            // Cuando sea un boton para realizar la operacion o un =
            if(operaciones.includes(item.innerHTML)){
                // Operador 1
                if(control_numeros){
                    // Guardamos la operacion que desea hacer el usuario
                    operacion = item.innerHTML
                    // Guardamos el primer operador ya introducido previamente por el usuario
                    operador1 = display.innerHTML
                    display.innerHTML = ""
                    control_numeros = false
                }

                // Operador 2
                else if (!control_numeros){
                    //Despues de haber presionado cualquiera de los operadores guardados en el array operaciones significara que necesita introducir un segundo numero
                    operador2 = display.innerHTML
                    // Una vez tenemos Operador1 y Operador2 ademas de que operacion vamos a hacer, creamos la calculadora (objeto con estas propiedades)
                    if(operador2 != ""){
                    let calculadora1 = new calculadora(operador1, operador2, operacion)
                    display.innerHTML = calculadora1.resultado
                    
                    // Para permitirnos continuar haciendo operaciones hemos de guardar el resultado en el Operador1 y vaciar el operador2
                    operador1 = calculadora1.resultado
                    operador2 = ""
                    }
                }
            }

            // Si presiona la C se limpia la calculadora al completo
            else if(item.innerHTML == "C"){
                display.innerHTML = ""
                operador1 = ""
                operador2 = ""
                operacion = ""
                control_numeros = true
                resultado = false
            }

            // Si presiona ⌫ borraremos el ultimo dato de la cadena
            else if(item.innerHTML == "⌫"){
                let unamenos = display.innerHTML.substring(0, display.innerHTML.length - 1)
                display.innerHTML = unamenos
            }

            // Si presiona . añadiremos un . a la cadena
            else if(item.innerHTML == "." ){
                display.innerHTML += "."
            }
        }
    })
})
