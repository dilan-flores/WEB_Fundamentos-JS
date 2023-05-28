// uso de COMMON JS
/*
const operacion = (nA,nB)=>{
    if(!nA && !nB) return console.log("Sin operaciones")
    console.log(`Suma: ${nA + nB}`)
    console.log(`Resta: ${nA - nB}`)
    console.log(`Multiplicacion: ${nA * nB}`)
}
const operaciones = 3

// Exportamos las funciones requeridas
module.exports = {
    operacion,
    operaciones
}
*/



// ECMAScript Modules (ESM): Sistema oficial de JavaScript para gestión de módulos

export const operacion = (nA,nB)=>{
    if(!nA && !nB) return console.log("Sin operaciones")
    console.log(`Suma: ${nA + nB}`)
    console.log(`Resta: ${nA - nB}`)
    console.log(`Multiplicacion: ${nA * nB}`)
}
export const operaciones = 3

// OTRA FORMA DE EXPORTAR: export default login {operacion,operaciones};