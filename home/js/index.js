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
      let nameTrack = document.querySelector(".songName");
      let nameTrackArtist = document.querySelector(".songArtist");
      let lista = document.querySelector('.lista')
      let infoTrack = datos.tracks;

      console.log(infoTrack.data[0]);
      
      for(let i=0; i<5; i++){  
         
         nameTrack.innerHTML += infoTrack.data[i].title_short + '<br>'
         nameTrackArtist.innerHTML += infoTrack.data[i].artist.name;
      }

      //*ARTISTAS//

      //*ALBUMS//

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