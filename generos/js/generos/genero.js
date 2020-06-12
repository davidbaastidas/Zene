window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
})

let usuarioInfo = document.querySelector('.usuarioInfo');

if(localStorage.getItem('usuario') !== null){
   usuarioInfo.innerHTML = localStorage.getItem('usuario');
}

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
            lista.innerHTML += '<li class="listas">' + '<div>' + '<a id="route" href=generoDetalle.html?id=' + genres[i].id + '>' + '<img class="fotoGenero" src="' + genres[i].picture_xl + '">' + '</div>' + '<h3 class="genreTitle">' + genres[i].name + '</h3>' + '</li>' ;
        }

    })
    .catch(function(error){
        console.log(error);
    })

