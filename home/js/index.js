window.addEventListener('load', function() {

    let inicioSesion = document.querySelector('#inicioSesion');

    let saludo = document.querySelector('#saludo');

    let span = document.querySelector('span');

    let bienvenida = document.querySelector('.bienvenida');

    let firstSection = document.querySelector('#firstSection');

    inicioSesion.onload = function() {
        let nombre = prompt('¿CÓMO TE LLAMÁS?')
        if (nombre==''){
           saludo.innerHTML = 'BIENVENID@ USUARIO';
        } else {
           saludo.innerHTML = 'BIENVENID@' + nombre;
           saludo.style.textTransform = "uppercase";
        }
        inicioSesion.style.display = "none";
        span.style.display = "inline";
     }

     span.onclick= function() {
        bienvenida.style.display = "none";
        firstSection.style.display = "flex";
     }
})