let modificacion = document.querySelector('.resultado');

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
        //Resolver que hacemos con los datos
        console.log(datos);
        let resultados = datos.data;

        for(let i=0; i<resultados.length; i++){
            modificacion.innerHTML += '<a href=../album/album.html?id=' + resultados[i].album.id + '>' + '<img src="' + resultados[i].album.cover_medium + '">' + '</a>' + '<a href=../album/album.html?id=' + resultados[i].album.id + '>' +'<h2>' + 'Titulo Album: ' + resultados[i].album.title + '</h2>' + '</a>' + '<a href=../artist/artist.html?id=' + resultados[i].artist.id + '>' + '<h3>' + 'Artista: ' + resultados[i].artist.name + '</h3>' + '</a>'
        }
    })
    .catch(function(error){
        console.log(error);
})