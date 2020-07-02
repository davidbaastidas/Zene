window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
})

let usuarioInfo = document.querySelector('.usuarioInfo');

if(localStorage.getItem('usuario') !== null){
   usuarioInfo.innerHTML = localStorage.getItem('usuario');
}

let queryString = location.search;
let hrefParams = new URLSearchParams (queryString);
let idAlbum = hrefParams.get('id');

let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idAlbum;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
    let main1 = document.querySelector('#selectedAlbum');
    let main2 = document.querySelector('.informacion');
    let detalle = document.querySelector('.uk-offcanvas-bar');
    let list = document.querySelector('.listSongs');
    let infoTracks = datos.tracks; 

    main1.innerHTML += '<img class="fotoAlbum" src="' + datos.cover_big + '">';
       
    main2.innerHTML += '<h2 id="nameAlbum">' + datos.title + '</h2>' + '<h4 id="artName">'+'<a id="artistName" href=../artist/artist.html?id=' + datos.artist.id + '>' + datos.artist.name + '</a>' + '</h4>' + '<h5 id="fecha">' + '<span id="release" uk-icon="calendar">' + '</span>' + 'Lanzamiento' + '<br>' + datos.release_date + '</h5>';
        
    detalle.innerHTML += '<button class="uk-offcanvas-close" type="button" uk-close>' + '</button>' + '<br>';
    for(let i=0; i<5; i++){
        detalle.innerHTML += '<p class="data">' + 'Género(s): ' + '<a id="genre" href=../generos/generoDetalle.html?id=' + datos.genres.data[i].id + '>' + datos.genres.data[i].name + '</p>';

        let segundos = datos.duration;
        function secondsToString(seconds) {
            var minute = Math.floor((seconds / 60) % 60);
            minute = (minute < 10)? '0' + minute : minute;
            var second = seconds % 60;
            second = (second < 10)? '0' + second : second;
            return minute + ' min ' + second + ' s';
        }
        let duracionTrack = (secondsToString(segundos));

        detalle.innerHTML += '<p class="data">' + 'Discográfica: ' + datos.label + '<p class="data">' + 'Duración: ' + duracionTrack + '</p>' + '<p class="data">' + '<p class="data">' + datos.fans + ' fans' + '</p>';
        
        for(let i=0; i<20; i++){  
            list.innerHTML += '<li>' + '<div class="songTrack">' + '<span id="selectedSong">' + '<a id="songName" href=../tracks/tracks.html?id=' + infoTracks.data[i].id + '>' + infoTracks.data[i].title_short + '</span>' + '</div>';
        }

    }
    
    })
    .catch(function(error){
    })