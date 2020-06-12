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
let idTrack = hrefParams.get('id');

let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idTrack;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
       console.log(datos);
       
       let art = document.querySelector('#selectedArtist');
       let infoArt = document.querySelector('#info');
       let otherInf = document.querySelector('#otherInfo');
       
       art.innerHTML += '<img class="fotoArtista" src="' + datos.artist.picture_big + '">';

       infoArt.innerHTML += '<span id="tituloTrack">' + datos.title + '</span>' + '<br>' +'<a class="songPlaylist" href=../playlist/playlist.html?id=' + datos.id + '>' + '<button class="botonAgregar">'+'Añadir a la playlist'+'</button>';

    ////// Add/Remove from playlist
    
    let recuperoStorage = localStorage.getItem('playlist');

    if(recuperoStorage == null){
        playlist = [];
    } else {
        playlist = JSON.parse(recuperoStorage);
    }

    let agregar = document.querySelector('.botonAgregar');

    if(playlist.includes(idTrack)){
        agregar.innerHTML = 'Eliminar de la playlist';
        agregar.style.backgroundColor = "white";
    }
    
    agregar.addEventListener('click',function(e){
        e.preventDefault();

        if(playlist.includes(idTrack)){
            let indiceEnElArray = playlist.indexOf(idTrack);
            playlist.splice(indiceEnElArray,1);
            agregar.innerHTML = "Añadir a la playlist";
            agregar.style.backgroundColor = "rgb(235, 235, 238)";

            console.log(playlist);

        } else{
            playlist.push(idTrack);
            agregar.innerHTML = 'Eliminar de la playlist';
            agregar.style.backgroundColor = "white";
        }

    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist',playlistParaStorage);
    console.log(localStorage);
        
    })
    ////////

    let segundos = datos.duration;
    function secondsToString(seconds) {
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return minute + ' min ' + second + ' s';
    }
    let duracionTrack = (secondsToString(segundos));

       otherInf.innerHTML += '<h3 id="artista">' + '<a href=../artist/artist.html?id=' + datos.artist.id  + '>' + 'Artista: ' + datos.artist.name + '</h3>' + '<br>';
       otherInf.innerHTML += '<h3 id="reference" >' + '<a href=../album/album.html?id=' + datos.album.id + '>' + 'Album: ' + datos.album.title + '</h3>' + '<br>';
       otherInf.innerHTML += '<h3 id="duration">' + duracionTrack + '</h3>';

       otherInf.innerHTML += '<div id="audio">' + '<audio class="songAudio" src=' + datos.preview + ' controls>' + '</audio>' + '</div>';

    })
    .catch(function(error){

    })



