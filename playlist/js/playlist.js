window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let listSongs = document.querySelector('.listSongs');

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    listSongs.innerHTML += '<li> No hay canciones en la play list </li>'
} else {
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
        listSongs.innerHTML += '<li>' + '<div>' + '<span>' + '<a class="titulo" href="../tracks/tracks.html?id=' + track.id + '">' + track.title + '</a>' + '</span>' + '<br>' + '<span>' + '<a class="artist" href="../artist/artist.html?id=' + track.artist.id + '">' + track.artist.name + '</a>' + '</span>' + '<div>' + '<audio class="songAudio" src=' + track.preview + ' controls>' + '</audio>' + '</div>' + '<button>' + 'Eliminar de playlist' + '</button>' +'</li>'
    })
    .catch(function(error){
        console.log(error);
        
    })
};


//Intente hacer el boton que elimine.
if(recuperoStorage == null){
    //Recupero el array de localStorage
    playlist = JSON.parse(recuperoStorage);
}
let sacar = document.querySelector('button');

sacar.addEventListener('click', function(e){
    //Detener el <a>, porque nos va a derivar
    e.preventDefault();
    //Agrego el ID del track a la lista
    if(playlist.includes(idTrack)){
        playlist.push(idTrack);
    }
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);
    console.log(localStorage);
});

