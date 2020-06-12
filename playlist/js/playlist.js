window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
})

let usuarioInfo = document.querySelector('.usuarioInfo');

if(localStorage.getItem('usuario') !== null){
   usuarioInfo.innerHTML = localStorage.getItem('usuario');
}

let recuperoStorage = localStorage.getItem('playlist');
let listSongs = document.querySelector('.listSongs');

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    listSongs.innerHTML += '<li> No hay canciones en la playlist </li>'
} else {
    playlist = JSON.parse(recuperoStorage);
    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    })
}

function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(track){
        listSongs.innerHTML += '<li id="lista">' + '<div>' + '<span>' + '<a id="titulo" href="../tracks/tracks.html?id=' + track.id + '">' + track.title + '</a>' + '</span>' + '<br>' + '<span>' + '<a id="artist" href="../artist/artist.html?id=' + track.artist.id + '">' + track.artist.name + '</a>' + '</span>' + '</div>' +'<div>' + '<audio class="songAudio" src=' + track.preview + ' controls>' + '</audio>' + '</div>' + '<div id="botonEliminar">' + '<button id="eliminar">' + 'Eliminar de la playlist' + '</button>' + '</div>' +'</li>';

        let eliminar = document.querySelector('#eliminar')
        document.getElementsByClassName("listSongs").innerHTML = playlist;

        eliminar.onclick = function(){
        let playlistOriginId = playlist.indexOf(idTrack);
        playlist.splice(playlistOriginId,1);
        document.getElementsByClassName("listSongs").innerHTML = playlist;
        }

    })
    .catch(function(error){
        console.log(error);
    })
};

