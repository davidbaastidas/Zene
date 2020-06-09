let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let usuario = document.querySelector('.user').value
    console.log(usuario);

    localStorage.setItem('usuario', usuario)
    console.log(localStorage);

    location.href='../home/index.html'
    
})







