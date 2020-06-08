//PASOS PARA AGREGAR ELEMENTO A LA PLAYLIST
//Paso 1: Obtener informacion del storage, ver que hay almacenado en el. Recuperar datos del storage

let recuperoStorage = localStorage.getElementsByName('user');
//Si todavia no tengo tracks en mi playlist
if(recuperoStorage == null){
    //Creo una lista vacia
    user = [];
} else {
    //Recupero el array de localStorage
    user = JSON.parse(recuperoStorage);
}

//Me fijo que no este en la lista y cambio texto del boton
if(user.includes("")){
    document.querySelector('.boton').innerHTML = "INICIAR ZENE";
}

//Paso 2: agregar un track a la playlist
let agregar = document.querySelector('.boton');

agregar.onclick = function(){
    //Agrego el ID del track a la lista
    if(user.includes("")){
        //Si el tracj esta, tenemos que quitarlo
        let indiceEnElArray = user.indexOf("");
        user.splice(indiceEnElArray, 1);
        document.querySelector('.boton').innerHTML = "INICIAR ZENE"
        console.log(user);
        
    } else {
        user.push("");
        //Pongo el "Quitar a la lista"
        document.querySelector('.boton').innerHTML = "INICIAR ZENE"
    }
    //Paso 3: guardar la lista en el localStorage
    let userParaStorage = JSON.stringify(user);
    sessionStorage.setItem('user', userParaStorage);
    console.log(localStorage);
    
}