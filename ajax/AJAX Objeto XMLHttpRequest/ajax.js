(()=>{
//1- Instanciar el objeto XMLHttpRequest
const xhr = new XMLHttpRequest(),
$xhr = document.getElementById("xhr")
$fragment = document.createDocumentFragment();

//2- Asignarle los eventos que vamos a manipular 
xhr.addEventListener("readystatechange", (e) => {
    // Como el evento "readystatechange" contiene 4 eventos, se ejecuta 4 veces para evitarlo hay que poner la siguiente condicion.
    if(xhr.readyState!==4)return;
    //Mientras readyState no sea 4 (se haya completado) no devuelvas nada.
    console.log(xhr);

    if(xhr.status>=200 && xhr.status<300){
        
        console.log("Exito en la conexión");
        //xhr.responseText es el JSON raw el cual podemos pasar a objetos de JS de la siguiente manera:
        let json = JSON.parse(xhr.responseText);

        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $xhr.appendChild($fragment);
    }
    else{
        console.log("Error en la conexión");
        let mensaje = xhr.statusText || "Ocurrió un error en la conexión";
        $xhr.innerHTML = `Error ${xhr.status}:${mensaje}`;
    }
    
});


//3- Abrir la peticion estableciendo el metodo que vamos a utilizar y la url o ruta local a la que vamos a aceder
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

//4- enviar
xhr.send();
})();

(()=>{
    const $fetch = document.getElementById("fetch");
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users",{
    method:"GET"
    // Then ejecuta la parte positiva si se resuelve la petición y catch la negativa, finally siempre se ejecuta
    }).then(res =>{
        console.log(res);
        // Convierto a objeto js
        // Si el parametro ok de res es true, pasa el jsno a objeto js, si no rechazas el objeto de la respuesta para que pase al catch
        return res.ok ? res.json(): Promise.reject(res);
    })
    .then(json =>{
        console.log(json);
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch(err => {
        console.log(err);
        let mensaje = err.statusText || "Ocurrió un error en la conexión";
        $fetch.innerHTML = `Error ${err.status}:${mensaje}`;
    }).finally(()=>
        console.log(
            "Esto se ejecutará siempre"
        )
    );
    //El primer Then se usa para pasar el JSON a objeto js, el segundo then para la logica de programación
})();

(()=>{
    const $fetchAsync = document.getElementById("fetch-async");
    $fragment = document.createDocumentFragment();

    async function getData(){
        //Try es la parte positiva catch el error, finally se ejecuta siempre
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            json = await res.json();

            console.log(res, json);

            if(!res.ok){
                throw {status: res.status, statusText: res.statusText};
            }
            
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            
            $fetchAsync.appendChild($fragment);
        }catch(err){
            let mensaje = err.statusText || "Ocurrió un error en la conexión";
            $fetchAsync.innerHTML = `Error ${err.status}:${mensaje}`;
        }finally{
            console.log("Esto se ejecuta siempre")
        }
    }
    getData()    
})();