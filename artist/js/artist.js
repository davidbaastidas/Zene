window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let modificacionArriba = document.querySelector('#infoArtista');
let modificacionCanciones = document.querySelector('.cancionesPopulares')
let modificacionAlbum = document.querySelector('#albumArtist');

// let queryString = location.href; 
// console.log(queryString);

// let searchParams = new URLSearchParams(queryString); 
// console.log(searchParams);

// let search = searchParams.get('search');
// console.log(search);


// let infoTrack = datos.tracks;


// let art = "https://api.deezer.com/artist/" + 


// let queryString = location.href;
// let hrefParams = new URLSearchParams (queryString)

let infoTrack = datos.tracks;

let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + infoTrack.data[i].artist.id;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos);


        // let resultado = datos.artists;

        // resultado.forEach(function(resultado){
        //     modificacionArriba.innerHTML += '<h1 id="title">' + resultado.name + '</h1>' + '<img src="' + resultado.picture_medium + '">'
        // });
    })
    .catch(function(error){
        console.log(error);
})