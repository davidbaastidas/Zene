window.addEventListener('load', function(e){
    let loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
})
​
let usuarioInfo = document.querySelector('.usuarioInfo');
​
if(localStorage.getItem('usuario') !== null){
usuarioInfo.innerHTML = localStorage.getItem('usuario');
}
​
let recuperoStorage = localStorage.getItem('playlist');
let listSongs = document.querySelector('.listSongs');
​
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    listSongs.innerHTML += '<li> No hay canciones en la playlist </li>'
} else {
    playlist = JSON.parse(recuperoStorage);
    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    })
    let eliminar = document.querySelectorAll('.eliminar');
    console.log(eliminar);
​
}
​
​
function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;
​
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(track){
        listSongs.innerHTML += '<li class="lista">' + '<div>' + '<span>' + '<a class="titulo" href="../tracks/tracks.html?id=' + track.id + '">' + track.title + '</a>' + '</span>' + '<br>' + '<span>' + '<a class="artist" href="../artist/artist.html?id=' + track.artist.id + '">' + track.artist.name + '</a>' + '</span>' + '</div>' + '<div>' + '<audio class="songAudio" src=' + track.preview + ' controls>' + '</audio>' + '</div>' + '<div class="botonEliminar">' + '<button onclick="eliminarDePlaylist(' + idTrack +')" class="eliminar">' + 'Eliminar de la playlist' + '</button>' + '</div>' +'</li>';
​
    })
    .catch(function(error){
        console.log(error);
    })
};
​

​
function eliminarDePlaylist(idTrack) {
    let recuperoStorage = localStorage.getItem('playlist');
    let playlist = JSON.parse(recuperoStorage);  
    idTrack = String(idTrack);
     
    if (playlist.includes(idTrack)) {
        let indiceEnElArray = playlist.indexOf(idTrack);
        
        playlist.splice(indiceEnElArray, 1);
        console.log(playlist);
        
        let playlistParaStorage = JSON.stringify(playlist);
        localStorage.setItem('playlist', playlistParaStorage);

        location.href = "playlist.html"
    }

}