window.addEventListener("load", function(){
   let loader = document.querySelector(".loader-wrapper")
   loader.className += " hidden";
   
})

const apiCharts = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0"
fetch(apiCharts)
   .then(function(data){
      return data.json();
   })
   .then(function(datos){

      //*TRACKS// 
      let nameTrack = document.querySelector(".listSongs");
      let infoTrack = datos.tracks;
      
console.log(infoTrack);

      for(let i=0; i<5; i++){  
         nameTrack.innerHTML += '<li>' + '<div>' + '<span class="number">' + infoTrack.data[i].position + '</span>' + '</div>' + '<div>' + '<span class="songName">' + infoTrack.data[i].title_short + '<br>' + '</span>' + '<span class="songArtist">' + infoTrack.data[i].artist.name + '</span>' + '</div>' + '<div>'+ '<audio class="songAudio" src="' + infoTrack.data[i].preview + '" controls>' + '</audio>' + '</div>' + '</li>'
      }

      //*ARTISTAS//
      
   
   // imagen.onmouseover = function(){
   //    insider.style.display = "none";
   //    imagen.style.transform = "scale(1.5)";
   // }
   // imagen.onmouseout = function (){
   //    insider.style.display = "inline";
   //    imagen.style.transform = "scale(1)";
   // }

      //*ALBUMS//
      let imagen = document.querySelector("#secondSection ul");
      
      for(let i=0; i<10; i++){
         imagen.innerHTML += '<li>' + '<img src="' + infoTrack.data[i].album.cover_big + '">' + '<div class="uk-position-center uk-panel">' + '<h1 class="insiderAl">'+ infoTrack.data[i].album.title + '</h1>' + '</div>' ;
      }

   })
   .catch(function(error){
      console.log(error)
   })








//    window.addEventListener('load', function() {

//     let inicioSesion = document.querySelector('#inicioSesion');

//     let saludo = document.querySelector('#saludo');

//     let span = document.querySelector('span');

//     let bienvenida = document.querySelector('.bienvenida');

//     let firstSection = document.querySelector('#firstSection');

//     inicioSesion.onload = function() {
//         let nombre = prompt('¿CÓMO TE LLAMÁS?')
//         if (nombre==''){
//            saludo.innerHTML = 'BIENVENID@ USUARIO';
//         } else {
//            saludo.innerHTML = 'BIENVENID@' + nombre;
//            saludo.style.textTransform = "uppercase";
//         }
//         inicioSesion.style.display = "none";
//         span.style.display = "inline";
//      }

//      span.onclick= function() {
//         bienvenida.style.display = "none";
//         firstSection.style.display = "flex";
//      }
// })