window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
 })

let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    let usuario = document.querySelector('.user').value
    console.log(usuario);

    localStorage.setItem('usuario', usuario)
    console.log(localStorage);
})







