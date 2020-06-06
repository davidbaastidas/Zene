
let apiChart = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0"

   fetch(apiChart)
      .then(function(data){
         return data.json();
      })
      .then(function(datos){
         let infoTrack = datos.tracks;
         console.log(infoTrack);

         //*ARTIST// 
         let imagenAr = document.querySelector("#firstSection ul");
         let infoArtist = datos.artists;
      
         for(let i=0; i<10; i++){
            imagenAr.innerHTML += '<li id="picArtist">' + '<a href=../artist/artist.html?id=' + infoArtist.data[i].id + '>' + '<img src="' + infoArtist.data[i].picture_big + '">' + '<div class="uk-position-center uk-panel">' +'<h1 class="insiderAl">'+ infoArtist.data[i].name + '</h1>' + '</div>' + '</li>'
         }

         //*ALBUMS//
         let imagenAl = document.querySelector("#secondSection ul");
      
         for(let i=0; i<10; i++){
            imagenAl.innerHTML += '<li id="picAlbum">' + '<a href=../album/album.html?id=' + infoTrack.data[i].album.id + '>' + '<img  src="' + infoTrack.data[i].album.cover_big + '">' + '<div class="uk-position-center uk-panel">' + '<h1 class="insiderAl">'+ infoTrack.data[i].album.title + '</h1>' + '</div>' + '</li>'
            }
         
         //*TRACKS// 
         let nameTrack = document.querySelector(".listSongs");
         

         for(let i=0; i<5; i++){  
            nameTrack.innerHTML += '<li>' + '<div>' + '<span class="number">' + infoTrack.data[i].position + '</span>' + '</div>' + '<div>' + '<span>' + '<a id="songName" href=../tracks/tracks.html?id=' + infoTrack.data[i].id + '>' + infoTrack.data[i].title_short + '</a>' + '</span>' + '<br>' + '<span>' + '<a id="songArtist" href=../artist/artist.html?id=' + infoTrack.data[i].artist.id + '>' + infoTrack.data[i].artist.name + '</span>' + '</div>' + '<div>' + '<audio class="songAudio" src=' + infoTrack.data[i].preview + ' controls>' + '</audio>' + '</div>' + '</li>'
         }

         let apiResponse = document.querySelector(".uk-active")

         apiResponse.afterprint = function(){
         let loader = document.querySelector(".loader-wrapper")
         console.log(apiResponse);
         loader.className += " hidden";
         }
      })
      .catch(function(error){
      console.log(error)
   })
