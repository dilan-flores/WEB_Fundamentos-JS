"use strict"; // Menos propensos a errores; Escritura correcta

// INTRODUCCIÓN: Modulo o archivo
/* Divide código en módulos separados, los cuales son reutilizados cuando son necesarios.
    Import: Importa variables, funciones, calses, etc
    Export: Esporta variables, funciones, clases, etc
    Es importante crear un proyecto de NPM (npm init --y)*/

console.log("           *** COMMON JS ***");
// COMMON JS por defecto en node.js: Para importar módulos;Permite comunicar diferentes partes de código
/*
// Requiere: Lee el archivo local devolviendo las exportaciones realizadas en este caso desde app.js
const {operacion,operaciones} = require('./app.js')

operacion(4,5);
console.log("Número de operaciones " + operaciones);

// Importa el archivo .json
const user = require("./user.json");

console.log("\nUsuario: " + user);

//código inicial: 
//        npm init --y
//        npm i jsonwebtoken // librería


// Para exportar una librería externa
const {} = require("jsonwebtoken")
*/



// ECMAScript Modules (ESM): Sistema oficial de JavaScript para gestión de módulos
console.log("           *** ECMAScript Modules ***");

//código inicial: 
//        npm init --y

// insertar en package.json "type": "module"; debajo de "main"
import {operacion,operaciones} from './app.js'

operacion(5,9);
console.log("Número de operaciones " + operaciones);

// En (ESM) no se puede importar .json




