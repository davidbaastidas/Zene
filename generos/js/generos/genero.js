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
        
        let genres = datos.data;
        let lista = document.querySelector (".generos");

        for (let i=1; i<genres.length; i++){
            lista.innerHTML += '<li class="listas">' + '<div>' + '<a  href=generoDetalle2.html?id="' + genres[i].id + '">' + '<img class="fotoGenero" src="' + genres[i].picture_xl + '">' + '</div>' + '<h3 class="genreTitle">' + genres[i].name + '</h3>' + '</li>' ;
        }

    })
    .catch(function(error){
        console.log(error);
    })

