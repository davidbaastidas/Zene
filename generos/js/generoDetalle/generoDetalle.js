window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let modificacionNombre = document.querySelector('#tituloGenero')
let modificacionLista = document.querySelector('#listaRes')

let queryString = location.search;
let hrefParams = new URLSearchParams (queryString);
let idGenero = hrefParams.get('id');

let urlParte1 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenero;

fetch(urlParte1)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        modificacionNombre.innerHTML += '<h1 class="generoTipo">' + datos.name + '</h1>'
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
        
        for(let i=0; i<10; i++){  
            modificacionLista.innerHTML += '<li class="listas">' + '<div id="contenedorFoto">' + '<a href=../artist/artist.html?id=' + infoGenre[i].id + '>' + '<img id="fotoArtista" src="' + infoGenre[i].picture_xl + '">' + '</div>' + '<h4 id="genreTitle">' +'<a id="route" href="../artist/artist.html?id=' + infoGenre[i].id + '">' + infoGenre[i].name + '</a>' + '</h4>' +'</li>';
        }

        
    })
    .catch(function(error){
        console.log(error);
})