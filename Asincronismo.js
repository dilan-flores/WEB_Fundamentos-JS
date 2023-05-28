"use strict"; // Menos propensos a errores; Escritura correcta

// INTRODUCCIÓN 
console.log("           *** INTRODUCCIÓN ***");

/* Permite bloquear el código de ejecución y trabajar del lado del cliente o servidor.
    Las funciones asíncronas se ejecutan en un apartado llamado "callback queue",
    la cuál no retrasa el flujo normal de ejecución y cuando está listo sale con "event loop" */
//Ejemplo:

console.log("Primero en ejecutarse");

setTimeout(function timeout() {
    console.log("Segundo en ejecutarse");
},1); // Se determina el tiempo que se debe demorar la función

console.log("Tercero en ejecutarse");

// CÓDIGO SÍNCRONO VS ASÍNCRONO
console.log("\n           *** SÍNCRONO vs ASÍNCRONO ***");

// Código síncrono
console.log("- Código sincrónico")
function comer(plato) {

    for (let index = 0; index < 1000000000; index++) 
    {
    }
    return `Terminé de comer el ${plato}!`
}

const p1 = comer("Encebollado")
console.log(p1)
const p2 = comer("Churrasco")
console.log(p2)

// Código asíncrono
console.log("\n- Código asincrónico")
console.log("TIENDA DON JUSTO")
function peticion(tipo) {
    console.log(`Listo ${tipo}\nEmpacando ${tipo}`)
}

console.log("Empacando lapiz HB")
console.log("No hay carboncillo, realizaré una petición")
const compra = setTimeout(()=>peticion("Carboncillo"),5000)
console.log("Empacando calculadora básica")

// PROMESAS: Es un objeto que nos va a devolver un resultado cuando una operación haya finalizado
// Uso de promesas: Tiene el estado pendiente, la cuál puede ser cumplida o rechazada
console.log("\n           *** PROMESAS ***");

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{ // Retorno de una promesa
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },30)// Cantidad de tiempo a demorarse
    })
}
//Acceso a servidor REST en línea falso
const obtenerProductos = fetch('https://api.github.com/users/manishmshiva');


conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))
// Marcador de posición JSON sirve como servidor remoto, donde se enviarán todas las peticiones
obtenerProductos// Para trabajar de forma asíncrona se utiliza .then y .catch
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(`Biografia: ${respuesta.bio}`))
    .catch(error=>console.log(error))

// ASYNC AWAIT
console.log("\n           *** ASYNC AWAIT ***");

"use strict";

const conexionBDDExterna2 = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos2 = fetch('https://api.github.com/users/manishmshiva');

async function conexion(){
    try {
        console.log(await conexionBDDExterna2(true))
    } catch (error) {
        console.log(error)
    }
}

async function conectarAPI(){
    try {
        const peticion = await obtenerProductos2
        const respuesta = await peticion.json()
        console.log(`URL del avatar: ${respuesta.avatar_url}`)
    } catch (error) {
        console.log(error)
    }
}

conexion()
conectarAPI()