"use strict"; // Menos propensos a errores; Escritura correcta

// INTRODUCCIÓN
console.log("           *** Introducción ***");

/* Formas de declarar un arreglo: A diferencia de otros lenguajes de programación
    es posible mezclar datos*/

const autosChevrolet = ["Bolt Euv","Groove","Silverado trail boss"];
const jugador = ["Juan", 31, "defensa",{goles: 5},["Milan","Esperanza"]]

/*Spread operator(...): Caracterpistica introducida en ECMAScript 6 que permite 
    manipular arreglos y objetos de manera más eficientes y flexibles*/
const vehiculos = [...autosChevrolet];
console.log(vehiculos)

// For Each: Recorre cada elemento del arreglo señalado
jugador.forEach(i =>{console.log(i)})

// SPREAD OPERADOR
const golEquipo = [5,0,3,1,1,5,4,2,1,0]
const goleadorEquipo = ["JUAN","PEDRO","ALFREDO","ARIEL","ANTONIO"]

const gol = [...goleadorEquipo,...golEquipo];
console.log(`Goleadores y goles finales del equipo MILAN: \n${gol}`)

// PROPIEDADES
console.log(`Partidos jugados: ${golEquipo.length}`)

// RECORRER ARREGLOS
/*Formas de recorrer un arreglo*/
console.log("\n           *** Recorrer arreglos ***");

const usuarios= ["Alex","Alejandro","Anita","Estefanía", "Cristina"];

// Recorrer arreglo con el bucle for
for(let i=0; i<usuarios.length;i++){
    console.log(usuarios[i]);
}

//Recorre arreglo con forEach
usuarios.forEach((j,k)=>console.log(`${j} - ${k}`))

//Recorre arreglo con map; Muta un arreglo sin alterar el original
const newUsuarios= usuarios.map((e)=> `Bienvenido ${e}`)
console.log(newUsuarios);

// MÉTODOS DE LOS ARREGLOS
console.log("\n           *** Métodos de arreglos ***");

const perfil = ["Villa", {edad:25}, "estudiante"]
console.log(`Original: ${perfil}`);

perfil.unshift("Dilan"); // Agrega al inicio
perfil.push("..."); // Agrega al final
console.log(`Usando unshift y push: ${perfil}`);

perfil.pop(perfil); // Elimina el elemento final
console.log(`Uso de pop: ${perfil}`);
//perfil.shift(perfil); // Elimina el elemento inicial
//console.log(`Uso de shift: ${perfil}`);

// Uso de find
const ocupacion = perfil.find((e) => e ==="estudiante");
console.log(`Ocupación: ${ocupacion}`);

//Uso de concat

var datos={
    ciudad:"Malchingui",
    numero:"0985463214",
    correo:"dilan.flores@gmail.com"
}

const perfilCompleto = perfil.concat(datos);
console.log(perfilCompleto);

/*Uso de includes y Some: 
    Verifica la existencia de un elemento*/
console.log(perfil.includes("estudiante"))
console.log(perfil.some(u=>u==="Dilan"));

// Uso de reverse
console.log(perfil.reverse());

// DESTRUCCIÓN DE ARREGLOS

console.log("\n           *** Destrucción de arreglos ***");
// Asignación de variables a elementos de arreglos
const goles = [0,4,2,1];
const [Anahi, Estefania, Jessica, Samantha] = goles;

console.log("Goles por persona")
console.log(`Anahi: ${Anahi}`);
console.log(`Estefania: ${Estefania}`);
console.log(`Jessica: ${Jessica}`);
console.log(`Samantha: ${Samantha}`);

// SINTAXIS REST EN ARREGLOS (...)

console.log("\n           *** Sintaxis Rest en arreglos ***");
// Permite agrupar múltiples elementos en un objetos¿ iterable 

const [rojo,verde,...amarillo]=["manzana", "pera","piña","platano", "melón"];
console.log("Rojo: "+ rojo);
console.log("Verde: "+ verde);
console.log("Amarillo: "+ amarillo);
