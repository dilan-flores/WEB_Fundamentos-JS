"use strict"; // Menos propensos a errores; Escritura correcta

// API: Permite intercambiar información entre aplicaciones por medio de JSON o XML
console.log("           *** API ***");


const obtenerData = async (nombrePokemon)=>{
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
        const response = await peticion.json()
        console.log(response.name , response.sprites.front_default);
}
obtenerData('bulbasaur')

/* LOCAL STORAGE: Permite almacenar datos de manera local en el navegador.
    No hay necesidad de conectar con la base de datos*/
console.log("           *** LOCAL STORAGE ***");
// El objeto Storage permite almacenar datos de manera local en el navegador

// Guardar un objeto en el Local Storage
fetch('https://api.github.com/users/manishmshiva')
    .then(response => response.json())
    .then(json => {
        {
            let usuario ={
                name:json.name,
                id:json.id,
                bio:json.bio
            }
            guardarLocalStorage(usuario)
        }
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}

//Obtener objeto en el LOcal Storage
const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay data"
    console.log(respuesta);
}
obtenerLocalStorage()

//Eliminar un objeto en el Local Storage

const eliminarlocalStorage =()=>{
    !localStorage.key("user") ? console.log("No hay clave" ): localStorage.removeItem("user")
}

eliminarlocalStorage()