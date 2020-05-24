window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})


let registroForm = document.querySelector('.registroForm');

let registro = document.querySelector('.registro');
    
let loginForm = document.querySelector('.loginForm');

let volver = document.querySelector('.volver');

registro.onclick = function(){
    loginForm.style.display = "none";
    registroForm.style.display = "inherit";
}

volver.onclick = function(){
    registroForm.style.display = "none";
    loginForm.style.display = "inherit";
}

