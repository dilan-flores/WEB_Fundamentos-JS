// Node.js: Es un entorno de ejecución de JavaScript construido sobre el motor de JavaScript V8 de Google Chrome

// Modelo cliente-servidor: El cliente realiza una petición y el servidor genera ua respuesta

/*          //1.-                   WEB SERVER HTTP
// Levantar un servidor Web Server usando Node.js

    // Ejecutar el comando npm init --y
    // Para ejecutar el código: node index.js  ; nodemon index.js
const http = require("http");

//Función callback: Para trabajar de forma asíncrona ; función flecha (buscar: funciones de orden superior)
const server = http.createServer((req,res)=>{
    // req: para recibir algo
    //res.setHeader('Content-Type', 'text/html'); // Para mostrar contenido de tipo plano
    //res.write("<h1>hola node.js http</h1>") // respuesta del servidor 
    //res.end()//finalizar

    //quiero que el tipo de contenido sea .json y para ello hay que realizar una conversión
    user={
        nombre: "Dilan"
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(user));
    res.end()//finalizar
})

server.listen(3000)
console.log("Servidor ejecutando en el puerto 3000")
*/

/*  //  2.-                    WEB SERVER EXPRESS: (Express: Framework web rápido, no opinado y flexible para NOde.js)
    // Comando para creación de un web server: npm i express
    // Archivo .gitignore para no subir al repositorio: /node_modules

    // Express crea una estructura para crear una aplicación web; Se tiene la libertad para utilizar o no la estructura
    // Larabel: Señala que hay que hacer para trabajar con algunas cosas
    // Angular: Genera una estructura de directorios a utilizar


// Para crear un servidor web
const express = require('express')
const app = express()

//get: obtener recursos del servidos
app.get('/',(req, res)=>{ // cuando se accede a la ruta se imprime....
    res.send("Obtener los datos del servidor")
})

// LOS NAVEGADORES SOLO PROCESAN GET, POR ENDE, NO FUNCIONA LAS DEMÁS ACCIONES (post, put, patch, delete)
// PARA PROBAR LAS RUTAS SE UTILIZAN CLIENTES REST (thunder client) (postman) (INSOMNIA) PARA PODER PROBAR LAS APIs
//post: enviar un nuevo recurso al servidor
app.post('/',(req,res)=>{
    res.send("Enviar un nuevo recurso al servidor")
})
//put: actualizar toda la información del recurso
app.put('/',(req,res)=>{
    res.send("Actualizar toda la información")
})
//patch: actualiza solo una porción de la información
app.patch('/',(req,res)=>{
    res.send("Actualizar solo un porción de la información")
})
//delete: Eliminar dato del servidor
app.delete('/',(req,res)=>{
    res.send("Eliminar algún dato del servidor")
})

    // RUTAS
app.get('/dashboard',(req,res)=>{
    res.send("Dashboard principal")
})// cuando vayas a la ruta /dashboard

app.get('/contactos',(req,res)=>{
    res.send("Contactos de la página web") // Crea rutas: http://localhost:3000/contact
})

app.get('/productos',(req,res)=>{
    res.send(" Sección de productos")
}) // Creación de ruta : http://localhost:3000/productos

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');
*/
//  3.-                         MIDDLEWARES:
    //Funciones que tiene accesos a las respuestas. 
    //    captura la petición de entrada para revisar si realia match 
    //    con la información de nosotros, sino generar el error 404
    //      Siempre va al final
        // Manejo de una ruta que no sea encontrada
    //app.use((req,res)=>{
    //    res.status(404).send("Página no encontrada - 404")
    //})

const express = require('express')
const app = express()
    
    
app.use((req,res,next)=>{
    console.log(`ruta invocada: ${req.path} - método: ${req.method}`);
    next() // es importante el uso de next()
})
    
app.get('/profile',(req,res)=>{
    res.send("Bienvenido al perfil del usuario")
})

                    // dato: variables de entorno: claves de accesos (.env)

// Para devolver una imagen

app.get('/',(req,res)=>{
    res.sendFile('./girlandboy.jpg',{
        root:__dirname // De donde estamos trayendo el objeto
    })
})
// dirname: variable de tipo string: coje el path en el que estamos trabajando actualmente
console.log(__dirname);

app.listen(3000)

console.log('Servidor ejecutandose en el puerto 3000');
