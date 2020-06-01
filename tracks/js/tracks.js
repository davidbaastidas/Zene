window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

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
       
       let infoArt = document.querySelector('.infoArtista');
       let otherInf = document.querySelector('.otherInfo');
       
       infoArt.innerHTML += '<div>'+ '<img class="fotoArtista" src="' + datos.artist.picture_big + '">' +'</div>'+ '<span class="tituloTrack">' + datos.title + '</span>'+ '<br>' + '<br>' + '<a class="songPlaylist" href=../playlist/playlist.html?id=' + datos.id + '>' + '<button class="botonAgregar">'+'Add to playlist'+'</button>';

       otherInf.innerHTML += '<h3 id="artista">' + '<a href=../artist/artist.html?id=' + datos.artist.id  + '>' + 'Artista: ' + datos.artist.name + '</h3>' + '<br>'+ '<h3 id="reference" >' + '<a href=../album/album.html?id=' + datos.album.id + '>' + 'Album: ' + datos.album.title + '</h3>' + '<br>'+ '<h3 id="duration">' + 'Duración: ' + datos.duration + ' segundos' + '</h3>' 

       otherInf.innerHTML += '<div id="audio">' + '<audio class="songAudio" src=' + datos.preview + ' controls>' + '</audio>' + '</div>';


    })
    .catch(function(error){

    })

