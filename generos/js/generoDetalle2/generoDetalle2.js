window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let modificacionFoto = document.querySelector('.fotoRes');
let modificacionNombre = document.querySelector('.nombreRes')
let modificacionLista = document.querySelector('.listaRes')

let queryString = location.search;
let hrefParams = new URLSearchParams (queryString);
let idGenero = hrefParams.get('id');

let urlParte1 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenero;

fetch(urlParte1)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        modificacionFoto.innerHTML += '<img class="imageGenre" src="' + datos.picture_medium + '" alt="fotoGenero">'

        modificacionNombre.innerHTML += '<h1 class="generoTipo">' + 'Género: ' + datos.name + '</h1>'
    })
    .catch(function(error){
        console.log(error);
})

let urlParte2 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenero + "/artists";

fetch(urlParte2)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        let infoGenre = datos.data;

        console.log(datos)
        
        for(let i=0; i<25; i++){  
            modificacionLista.innerHTML += '<li>' + '<a href="../artist/artist.html?id=' + infoGenre[i].id + '">' + '<p>' + infoGenre[i].name + '</p>' + '</a>' + '</li>'
        }

    })
    .catch(function(error){
        console.log(error);
})