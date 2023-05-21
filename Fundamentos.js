"use strict"; // Menos propensos a errores; Escritura correcta

// VARIABLES: Uso de var-let-const
console.log("           *** Variables ***");
var numeroEstudiantes = 20; // Se puede declarar más de una vez
let suma = 0; // No existe variable con el mismo nombre
const PI=3.1416; // No se puede alterar

console.log("Uso de var: "+numeroEstudiantes);
console.log("Uso de let: "+suma);
console.log("Uso de cont: "+PI);

// STRING: Creación y métodos
console.log("           *** String ***");
const usuario = "Dilan Flores"
let personaje = "Soldado"
let herramienta = "metralleta"
let vidas = 3

console.log(`Usuario: ${usuario.substring(0,5).toUpperCase()}`);
console.log(`${personaje.toUpperCase()} con ${herramienta.toUpperCase()} tienes ${vidas} vidas`);

// NÚMEROS: Operadores, método Math y orden de precedencia

console.log("           *** Números ***");
const IVA = 0.12;
const descuento = 0.5;
let precio = 10.2;

let conDescuento= precio*descuento;
let conIVA = (precio - precio*descuento) + conDescuento * 0.12;

console.log(`Subtotal: ${precio} \nDescuento: ${precio*descuento} \nIVA: ${conIVA}`);
console.log(`Total: ${precio-conDescuento+conIVA}`);

// BOOLEANOS: Operadores de asignación, comparación, relacionales
console.log("           *** Booleanos ***");

let promedio = 7.5;
const respuesta =  promedio >= 7 ? "Aprobado": "Reprobado"

console.log(`Promedio: ${promedio} \n${respuesta}`)

// CONDICIONALES: condicional simple, doble, anidada y múltiple
console.log("           *** Condicionales ***");

let examen = 4;
console.log("Examen: ", examen);
if (examen >= 7 ? "Aprobado": "Reprobado");

if(examen <5){
    console.log("Perdida de materia");
}else if(examen <7){
    console.log("Examen Final");
}else if(examen <8){
    console.log("Fecidades");
}else{
    console.log("Exelente");
}

let curso = 4;

switch(curso){
    case 1:
        console.log("GR1 Paralelo A");
        break;
    case 2:
        console.log("GR1 Paralelo B");
        break;
    case 3:
        console.log("GR2 Paralelo C");
        break;
    case 4:
        console.log("GR2 Paralelo C");
        break;
    default:
        console.log("Incorrecto");
        break;
}

// BUCLES: For, while, do-while

console.log("           *** Bucles ***");

let cuenta= "JUAN"; 
var aprobado = false;
let acceso = 0;
let puntos = 50;

for(let i=1; i<=3;i++){
    if(cuenta === "JUAN"){
        var aprobado = true;
    }
}

while(aprobado){
    acceso +=1;
    var aprobado = false;
}

do{
    puntos += 1;
}while(puntos <=169);

console.log(`Accesos ${cuenta}: ${acceso}`);
console.log(`Puntos obtenidos: ${puntos}`);


