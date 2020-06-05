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

        modificacionArriba.innerHTML = '<h1 id="title">' + datos.name + '</h1>'; 

        modificacionArriba.innerHTML += '<div id="info">'+'<div id="fotoArtista">'+'<img class="artista" src="' + datos.picture_xl + '" alt="fotoArtista">' +'</div>'+'<div class="moreInfo">'+'<h4 class="fans">' + 'Seguidores: ' + datos.nb_fan + '</h4>' + '<button id="likeArt">'+'Add' +'</button>' +'</div>'+'</div>';

        /// Guardando info para recomendados

        let recuperoStorage = localStorage.getItem('recomendados');

        if(recuperoStorage == null){
            recomendados = [];
        } else {
            recomendados = JSON.parse(recuperoStorage);
        }
    
        let agregar = document.querySelector('#likeArt');
    
        if(recomendados.includes(idArtista)){
            agregar.innerHTML = 'Remove';
        }
        
        agregar.addEventListener('click',function(e){
            e.preventDefault();
            
    
            if(recomendados.includes(idArtista)){
                let indiceEnElArray = recomendados.indexOf(idArtista);
                recomendados.splice(indiceEnElArray,1);
                agregar.innerHTML = "Add";
                
                
                console.log(recomendados);
    
            } else{
                recomendados.push(idArtista);
                agregar.innerHTML = 'Remove';
                
            }
    
        let recomendadosParaStorage = JSON.stringify(recomendados);
        localStorage.setItem('recomendados',recomendadosParaStorage);
     
        })
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
            modificacionCancion.innerHTML += '<li>' + '<div class="songTrack">' + '<span id="selectedSong">' + '<a id="songName" href=../tracks/tracks.html?id=' + infoTrack[i].id + '>' + infoTrack[i].title_short + '</a>' + '</div>' + '<div>' + '<audio class="songAudio" src=' + infoTrack[i].preview + ' controls>' + '</audio>' + '</div>' + '<div class="add">' + '<a class="songPlaylist" href=../playlist/playlist.html?id=' + infoTrack[i].id + '>'+ '</a>' + '</div>' + '</li>'
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

        let infoTrack = album.data;
        
        for(let i=0; i<5; i++){
            modificacionAlbum.innerHTML += '<li>' + '<a href=../album/album.html?id=' + infoTrack[i].id + '>' + '<img src="' + infoTrack[i].cover_big + '">' + '<div class="uk-position-center uk-panel">' + '<h1 class="insiderAl">'+ infoTrack[i].title + '</h1>' + '</div>' + '</li>'
        }

    })
    .catch(function(error){
        console.log(error);
})