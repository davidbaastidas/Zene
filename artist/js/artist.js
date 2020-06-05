window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let modificacionArriba = document.querySelector('#infoArtista');
let modificacionCancion = document.querySelector('.listSongs')
let modificacionAlbum = document.querySelector('#albumArtist ul');

let queryString = location.search;
let hrefParams = new URLSearchParams (queryString);
let idArtista = hrefParams.get('id');

let urlParte1 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtista;

fetch(urlParte1)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        modificacionArriba.innerHTML += '<h1 id="title">' + datos.name + '</h1>' + '<img class="artista" src="' + datos.picture_medium + '" alt="fotoArtista">' + '<h4 class="fans">' + 'Seguidores: ' + datos.nb_fan + '</h4>' + '<strong>'+ 'Like  '+ '</strong>'+'<span uk-icon="heart">'+'</span>';
    })
    .catch(function(error){
        console.log(error);
})

let urlParte2 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtista + "/top"

fetch(urlParte2)
    .then(function(response){
        return response.json();
    })
    .then(function(cambio){
        
        let infoTrack = cambio.data;

        for(let i=0; i<5; i++){  
            modificacionCancion.innerHTML += '<li>' + '<div class="songTrack">' + '<span id="selectedSong">' + '<a class="songName" href=../tracks/tracks.html?id=' + infoTrack[i].id + '>' + infoTrack[i].title_short + '</a>' + '</div>' + '<div>' + '<audio class="songAudio" src=' + infoTrack[i].preview + ' controls>' + '</audio>' + '</div>' + '<div class="add">' + '<a class="songPlaylist" href=../playlist/playlist.html?id=' + infoTrack[i].id + '>' + '<button class="buttonAdd">' + '+' + '</button>' + '</a>' + '</div>' + '</li>'
        }

    })
    .catch(function(error){
        console.log(error);
})

let urlParte3 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtista + "/albums"

fetch(urlParte3)
    .then(function(response){
        return response.json();
    })
    .then(function(album){

        console.log(album)
        let infoTrack = album.data;
        
        for(let i=0; i<5; i++){
            modificacionAlbum.innerHTML += '<li>' + '<a href=../album/album.html?id=' + infoTrack[i].id + '>' + '<img src="' + infoTrack[i].cover_big + '">' + '<div class="uk-position-center uk-panel">' + '<h1 class="insiderAl">'+ infoTrack[i].title + '</h1>' + '</div>' + '</li>'
        }

    })
    .catch(function(error){
        console.log(error);
})