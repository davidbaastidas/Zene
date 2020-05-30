window.onload = function(){
   let loader = document.querySelector(".loader-wrapper")
   loader.className += " hidden";
}
let apiChartTracks = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0"
   fetch(apiChartTracks)
      .then(function(data){
         return data.json();
      })
      .then(function(datos){
         
         //*ARTIST// 
         let imagenAr = document.querySelector("#firstSection ul");
         let infoArtist = datos.artists;
      
         for(let i=0; i<10; i++){
            imagenAr.innerHTML += '<li>' + '<a href=../artist/artist.html?id=' + infoArtist.data[i].id + '>' + '<img src="' + infoArtist.data[i].picture_big + '">' + '</a>' + '<div class="uk-position-center uk-panel">' +'<h1 class="insiderAl">'+ infoArtist.data[i].name + '</h1>' + '</div>' + '</li>'
         }

         //*TRACKS// 
         let nameTrack = document.querySelector(".listSongs");
         let infoTrack = datos.tracks;
      
         console.log(infoTrack);

         for(let i=0; i<5; i++){  
            nameTrack.innerHTML += '<li>' + '<div>' + '<span class="number">' + infoTrack.data[i].position + '</span>' + '</div>' + '<div>' + '<span class="songName">' + infoTrack.data[i].title_short + '<br>' + '</span>' + '<span class="songArtist">' + infoTrack.data[i].artist.name + '</span>' + '</div>' + '<div>'+ '<audio class="songAudio" src="' + infoTrack.data[i].preview + '" controls>' + '</audio>' + '</div>' + '</li>'
         }

         //*ALBUMS//
         let imagenAl = document.querySelector("#secondSection ul");
      
         for(let i=0; i<10; i++){
         imagenAl.innerHTML += '<li>' + '<img src="' + infoTrack.data[i].album.cover_big + '">' + '<div class="uk-position-center uk-panel">' + '<h1 class="insiderAl">'+ infoTrack.data[i].album.title + '</h1>' + '</div>' + '</li>'
         }
      })
      .catch(function(error){
      console.log(error)
   })
