"use strict"; // Menos propensos a errores; Escritura correcta

//                  1.- INTRODUCCIÓN 

/* Modelo de objetos (DOM): Interfaz de programación (API) para CREAR, CAMBIAR o REMOVER elementos del documento HTML
    Acceso al documento especificamente a los elementos del HTML para modificar la estructura, estilo y contenido*/

//                  2.- ACCEDER AL CONTENIDO

// ACCESO A LOS ELEMENTOS 
document.images[0]

// OBTENER LAS CLASES DEL ELEMENTO
document.images[0].classList
document.images[0].className 

// SELECCIONAR ELEMENTOS POR CLASE
const logo = document.getElementsByClassName('custom-logo-facultad')
logo[1]
//SELECCIONAR ELEMENTOS POR ID
const html = document.getElementById('lightbox-wrap')
html

const buscador = document.getElementById('search-178')
buscador

//SELECCIONAR ELEMENTOS POR QUERY SELECTOR
const consultarID = document.querySelector('#lightbox-wrap')
consultarID // Consulta por medio de la ID

const consultarCLASS = document.querySelector('.custom-logo-facultad')
consultarCLASS // Consultar por medio de clase

const consultarH1 = document.querySelector('h1')
consultarH1 // Consultar una etiqueta

// SELECCIONAR ELEMENTOS CON QUERY SELECTOR ALL
const H1 = document.querySelector('h1')
H1[1] // Como resultado se presenta una valor indefinido
const allH1 = document.querySelectorAll('h1')
allH1[1] // con querySelectorAll se presentan resultados

//                  3.- MODIFICAR EL CONTENIDO

// MODIFICAR EL TEXTO CON CONTEXT CONTENT
document.querySelector('title').textContent="BIENVENIDOS A TODOS" // Modifica la primer etiqueta "title"

// MODIFICAR IMAGEN CON CONTEXT CONTENT
const imagen = document.querySelector('.custom-logo img')
imagen.src="https://i.pinimg.com/originals/1a/91/d0/1a91d05221c5a1f04b4383d6db01ba8f.jpg"
'https://i.pinimg.com/originals/1a/91/d0/1a91d05221c5a1f04b4383d6db01ba8f.jpg'

//                  3.- MODIFICAR EL ESTILO

document.querySelector('#search-178').style.border="20px blue solid"
'20px blue solid'

//                  3.- AGREGAR ELEMENTOS

// Nodo appendChild: Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre

var buscadorNAV = document.querySelector('nav')
var button = document.createElement("button")
button.innerText="Buscar"
buscadorNAV.appendChild(button)
button.style.border="1px white solid"
'1px white solid'

var buscadorNAV = document.querySelector('nav')
var button = document.createElement("button")
button.innerText="Registrarse"
buscadorNAV.appendChild(button)
button.style.border="1px white solid"
'1px white solid'

//                  4.- ELIMINAR ELEMENTOS

// Para eliminar un elemento, en este caso se especifica la ubicación del botón creado
var eliminar = document.querySelector('nav button')
eliminar.remove()

//                  5.- EVENTOS

// EVENTO - CLIC
var buscadorNAV = document.querySelector('nav')
var button = document.createElement("button")
button.innerText="Buscar"
buscadorNAV.appendChild(button)
button.style.border="1px white solid"
'1px white solid'

button.addEventListener('click',function () {
    alert("Documento no encontrado")
})

// EVENTO - MOUSEOUT
// Efecto al pasar el mouse por encima del elemento indicado
var efectoMOUSE = document.querySelector('.uk-float-right')

efectoMOUSE .addEventListener('mouseenter',function () {
    var efectoMOUSE = document.querySelector('.uk-float-right')
    efectoMOUSE.style.border="10px blue solid"
})

efectoMOUSE .addEventListener('mouseout',function () {
    var efectoMOUSE = document.querySelector('.uk-float-right')
    efectoMOUSE.style.border=""
})

// EVENTO - INPUT
const efectoINPUT = document.querySelector('#search-178')

efectoINPUT .addEventListener('input',function (e) {
    if(e.target.value ==="")
		{
		const efectoINPUT = document.querySelector('#search-178')
			efectoINPUT.style.border="10px black solid"
		}
	else 
		{
		const efectoINPUT = document.querySelector('#search-178')
			efectoINPUT.style.border=""
			console.log(e.target.value)
		}
})
