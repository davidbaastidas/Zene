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

        resultados.forEach(function(resultados){
            modificacion.innerHTML += '<img src="' + resultados.album.cover_medium + '">' + '<h2>' + resultados.title_short + '</h2>' + '<h3>' + resultados.artist.name + '</h3>'
        });
    })
    .catch(function(error){
        console.log(error);
})