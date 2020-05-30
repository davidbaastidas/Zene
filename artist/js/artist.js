window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})
let modificacionArriba = document.querySelector('#infoArtista');

let modificacionCanciones = document.querySelector('.cancionesPopulares')

let modificacionAlbum = document.querySelector('#albumArtist');

let queryString = location.search; 
console.log(queryString);

let searchParams = new URLSearchParams(queryString); 
console.log(searchParams);

let search = searchParams.get('search');
console.log(search);

let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + search;
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let resultado = datos.artists;

        resultado.forEach(function(resultado){
            modificacionArriba.innerHTML += '<h1 id="title">' + resultado.name + '</h1>' + '<img src="' + resultado.picture_medium + '">'
        });
    })
    .catch(function(error){
        console.log(error);
})