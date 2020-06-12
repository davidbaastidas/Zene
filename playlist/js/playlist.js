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

        let eliminar = document.querySelector('#eliminar');
    let mensaje = 'Estas seguro/a de que queres eliminar ' + track.title + '?'
    
    
    if(playlist.includes(idTrack)){
        eliminar.innerHTML = 'Eliminar de la playlist';
    };
    
    eliminar.addEventListener('click', function(e){
        e.preventDefault();
    
        if(playlist.includes(idTrack)){
            let indiceEnElArray = playlist.indexOf(idTrack);
            playlist.splice(indiceEnElArray,1);
            eliminar.innerHTML = "Eliminar de la playlist";

            let confirmacion = confirm (mensaje)
                if (confirmacion == true) {
                    playlist.splice(indiceEnElArray);
                                    // no quiero borrar li, sino borrar info
                } else {
                    return false;
                };
            
        } else {
            playlist.push(idTrack);
            playlist.splice(indiceEnElArray);
            agregar.innerHTML = 'Aniadir de la playlist';

        };
    
        let playlistParaStorage = JSON.stringify(playlist);
        localStorage.setItem('playlist', playlistParaStorage);
        console.log(localStorage);
    });



    })
    .catch(function(error){
        console.log(error);
    })
};

