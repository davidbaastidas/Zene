window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let genre = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"
fetch (genre)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos.data);
        
        let genres = datos.data
        let lista = document.querySelector (".generos");

        genres.forEach (function(listaGeneros){
            lista.innerHTML += '<li>' + listaGeneros.name + '</li>' ;

        })


    })
    .catch(function(error){
        console.log(error);
    })