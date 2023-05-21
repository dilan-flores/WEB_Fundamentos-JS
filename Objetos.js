"use strict"; // Menos propensos a errores; Escritura correcta

// traceback: Función dentro de otra función
// .map: mutar un arreglo sin alterar el original
// Función expresada:
// Función declarada: Comienza con la palabra "function"

// FUNDAMENTOS: Acceder a claves y eliminar objetos
console.log("           *** Fundamentos ***");

var auto={
    marca:"Chevrolet",
    modelo:"BOLT EUV",
    anio:"2023",
    placa:"PCS-5478"
}
// user.kilometraje = 0;
// delete auto.placa
console.log(`Marca ${auto.marca} del ${auto.anio}`);

// DESTRUCTURACION DE OBJETOS
console.log("           *** Destructuración ***");

var auto={
    marca:"Chevrolet",
    modelo:"BOLT EUV",
    anio:"2023",
    placa:"PCS-5478"
}

//...res: Resto del objeto
const{marca,modelo,...res} = auto;
console.log(marca);
console.log(res);

// CONGELAR UN OBJETO: Uso de freeze y seal
console.log("           *** Congelar un objeto ***");

var factura ={
    numero: 1002,
    fecha: "17-05-2023",
    cliente:{
        nombre:"JUAN PEREZ",
        CI: "1727954063",
    } 
}

// Con freeze no se puede modificar las propiedades 
// Object.freeze(factura)
// console.log(Object.isFrozen(factura));

// con seal se puede modificar los valores y no las claves
Object.seal(factura)
console.log(Object.isSealed(factura))
factura.fecha = "18-05-2023";
//delete factura.fecha // Imposible en este caso
console.log(factura.fecha);

// COPIA DE OBJETO: Uso de freeze y seal
console.log("           *** Copia dos objetos ***");

var factura ={
    numero: 1002,
    fecha: "17-05-2023",
    cliente:{
        nombre:"JUAN PEREZ",
        CI: "1727954063",
    } 
}

var extradatos={
    ciudad:"Malchingui",
    numero:"0985463214",
    correo:"dilan.flores@gmail.com"
}

const allInformation = {...factura,...extradatos}
console.log(allInformation)

// USO DE THIS
console.log("           *** Uso de this ***");

var factura ={
    // Con this se accede al contenido en este caso de factura
    numero: 1002,
    fecha: "17-05-2023",
    
    cliente:{
        nombre:"JUAN PEREZ",
        CI: "1727954063",
        ciudad:"Malchingui",
        numero:"0985463214",
        correo:"dilan.flores@gmail.com"
    },
    compras:["arroz","harina", "huevos"],
    
    sendCliente: ()=>{// Función declarada funciona solo con factura
        return `Cliente: ${factura.cliente.nombre}`
    },

    sendCompras(){ // Función expresada funciona con this y factura
        return `Compras: ${this.compras}`
    }
}

console.log(factura.sendCliente());
console.log(factura.sendCompras());

// MÉTODO PAR TRABAJAR CON OBJETOS

console.log("           *** Métodos para objetos ***");

var factura ={
    // Con this se accede al contenido en este caso de factura
    // This: Cuando tengo una función declarada
    numero: 1002,
    fecha: "17-05-2023",
    
    cliente:{
        nombre:"JUAN PEREZ",
        CI: "1727954063",
        ciudad:"Malchingui",
        numero:"0985463214",
        correo:"dilan.flores@gmail.com"
    },
    compras:["arroz","harina", "huevos"],
    
    sendCliente: ()=>{// Funcióndeclarada funciona solo con factura
        return `Cliente: ${factura.cliente.nombre}`
    },

    sendCompras(){ // Función expresada funciona con this y factura
        return `Compras: ${this.compras}`
    }
}

console.log("Obtener las claves:",Object.keys(factura))
console.log("Obtener los valores:",Object.values(factura))
console.log("Obtener las claves y valores en un array:",Object.entries(factura))