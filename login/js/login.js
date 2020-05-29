//capturo los elementos
let loader = document.querySelector('.loader-wrapper');

let registroForm = document.querySelector('.registroForm');

let registro = document.querySelector('.registro');
    
let loginForm = document.querySelector('.loginForm');

let volver = document.querySelector('.volver');

let formulario = document.querySelector('.form');

let usuario = document.querySelector('[name=usuario]');

let contras = document.querySelector('[name=contras]');

let mail = document.querySelector('[name=mail]');

let aviso = document.querySelector('.aviso');

let boton = document.querySelector('.boton');

window.addEventListener("load", function(){
    loader.className += " hidden";
})

registro.onclick = function(){
    loginForm.style.display = "none";
    registroForm.style.display = "inherit";
}

volver.onclick = function(){
    registroForm.style.display = "none";
    loginForm.style.display = "inherit";
}

