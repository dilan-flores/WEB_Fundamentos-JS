"use strict"; // Menos propensos a errores; Escritura correcta

// FUNDAMENTOS: Uso de funciones y reutilización
console.log("           *** Fundamentos ***");
function Bienvenida(){
    return "Bienvenid@ a una nueva experiencia. El inicio siempre será la parte más dicil. BUENA SUERTE"
}

console.log("Juan", Bienvenida());
console.log("Alejandra", Bienvenida());

// La función declarada tiene la palabra reservada "function" al inicio
function declarada(){
    console.log("Yo soy una función declarada");
}
declarada()

// La función expresada contiene la palabra reservada "function" en el medio
const expresada = function(){
    console.log("Yo soy una función dexpresada");
}
expresada()

// FUNCIONES ANÓNIMAS Y AUTOEJECUTADAS:
console.log("\n           *** Funciones anónimas y autoejecutadas ***");

// Una función anónima funciona sin nombrar la misma
// Función autoejecutada
(function(){
    console.log("HOLA");
})();

// PARÁMETROS DE UNA FUNCIÓN
console.log("\n           ***  Parámetros de una función ***");

const Usuarios = function(a,b,...args){
    console.log(`Bienvenidos \n${a} \n${b}`);
    args.forEach(e =>console.log(e));
}

console.log(Usuarios("JUAN","PEDRO","ARIEL","ANDREA"));

// Paso de parámetro por defecto para una función
 console.log("          Calcular hipotenusa")
function hipotenusa(a, b=5){
    const r = Math.sqrt((a*a) + (b*b));
    return `Hipotenusa: ${r} \nCateto 1: ${a} \nCateto 2: ${b}`;
}
console.log(hipotenusa(4));

// RETORNO DE UNA FUNCIÓN
console.log("\n           ***  Retorno de una función ***");

function factura(){
    return {
        numero: 1002,
        fecha: "17-05-2023",
        cliente:{
            nombre:"JUAN PEREZ",
            CI: "1727954063",
        } 
    }
}
console.log(factura());
// Para una función dentro de otra se utiliza dos paréntesis
function usuario(){
    return function(){
        return "Kevin Perugachi"
    }
}
console.log("Usuario: " + usuario()());

// FUNCIÓN FLECHA
console.log("\n           ***  Función flecha ***");
// Permite definir funciones de manera más concisa y legible

// Función tradicional
function hipotenusa2(a, b=5){
    const r = Math.sqrt((a*a) + (b*b));
    return `Hipotenusa: ${r} \nCateto 1: ${a} \nCateto 2: ${b}`;
}
// Función flecha
const hipotenusa3 = (a,b=5)=>{
    const r = Math.sqrt((a*a) + (b*b));
    return `Hipotenusa: ${r} \nCateto 1: ${a} \nCateto 2: ${b}`;
}

console.log(hipotenusa2(4));
console.log(hipotenusa3(5,7));

// USO DEL THIS 
console.log("\n           ***  Uso del this ***");
/* Palabra clave "this" se utiliza dentro de una arrow 
function y obtener el valor this de un objeto padre*/

const equipo = {
    Equipo: "Milan",
    Categoria: "A",
    PartidosJugados: 5,
    Goles: 10,
    PartidosGanados: 3,
    Mensaje: function (){
        // Es necesario la función "setTimeout" para imprimir 
        setTimeout(()=>{
            console.log("Partidos ganados:"+ this.PartidosGanados)
        })
    }
}
equipo.Mensaje()
