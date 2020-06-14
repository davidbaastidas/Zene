window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
})

let usuarioInfo = document.querySelector('.usuarioInfo');

if(localStorage.getItem('usuario') !== null){
   usuarioInfo.innerHTML = localStorage.getItem('usuario');
}

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

        if (resultados == null || resultados == undefined || search == "[]"){
            resultadoBusqueda.innerHTML += "No se encontraron resultados de tu búsqueda";

        } else {

            for(let i=0; i<resultados.length; i++){
                modificacion.innerHTML += '<li class="listas">' + '<div>'+'<a href=../album/album.html?id=' + resultados[i].album.id + '>' + '<img src="' + resultados[i].album.cover_xl + '">' + '</a>' + '</div>' + '<a id="route0" href=../tracks/tracks.html?id=' + resultados[i].id + '>' +'<h2 id="trackName">' + resultados[i].title_short + '</h2>' + '</a>' + '<a id="route2" href=../artist/artist.html?id=' + resultados[i].artist.id + '>' + '<h2>' + resultados[i].artist.name + '</h2>' + '</a>' + '</a>' + '<a id="route1" href=../album/album.html?id=' + resultados[i].album.id + '>' +'<h2>' + 'Album: ' + resultados[i].album.title + '</h2>';
            }

        }

        
    })
    .catch(function(error){
        console.log(error);
})