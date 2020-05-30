window.addEventListener("load", function(){
    let loader = document.querySelector(".loader-wrapper");
    loader.className += " hidden";
})

let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
console.log(id);


let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/genre/'
fetch(url + id)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(information){

    //     console.log(information);
       
    //     let titulo = information.name;

    //     console.log(titulo);

    //     let detalleGeneros = document.querySelector(".tituloGenero")
        
    //     for (let i=0; i<datos.length;i++){
    //         detalle.innerHTML += '<div class="photoGenre">' + '<img class="imageGenre" src="' + datos.pic + '">' + '</div>' + '<h1 class="generoTipo">' + datos.name +'</h1>';
    //     }
        
       
        

    // })
    // .catch(function(error){
    //     console.log(error);
    // })