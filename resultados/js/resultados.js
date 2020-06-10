window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
})

let modificacion = document.querySelector('#info');

let queryString = location.search; 
console.log(queryString);

let searchParams = new URLSearchParams(queryString); 
console.log(searchParams);

let search = searchParams.get('search');
console.log(search);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/search?q=" + search;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        let resultados = datos.data;
        let resultadoBusqueda = document.querySelector('#resultadoBusqueda');

        if (resultados == null || resultados == undefined){
            resultadoBusqueda.innerHTML += "No se encontraron resultados de tu búsqueda";

        } else {

            for(let i=0; i<resultados.length; i++){
                modificacion.innerHTML += '<li class="listas">' + '<div>'+'<a href=../album/album.html?id=' + resultados[i].album.id + '>' + '<img src="' + resultados[i].album.cover_xl + '">' + '</a>' + '</div>' +'<a id="route1" href=../album/album.html?id=' + resultados[i].album.id + '>' +'<h2>' + 'Album: ' + resultados[i].album.title + '</h2>' + '</a>' + '<a id="route2" href=../artist/artist.html?id=' + resultados[i].artist.id + '>' + '<h3>' + 'Artista: ' + resultados[i].artist.name + '</h3>' + '</a>';
            }

        }

        
    })
    .catch(function(error){
        console.log(error);
})