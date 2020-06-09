var list = document.querySelector(".container");
function setItem(name) {
    var option = document.createElement("option");
    option.textContent = name;
    list.appendChild(option);
}

// Initialize the list from localStorage
var usuarios = JSON.parse(localStorage.getItem("usuarios")) ||
            {name: name};
for (var name in usuarios)
    if (usuarios.hasOwnProperty(name))
    setItem(name);

function saveToStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function addNote() {
    var name = prompt("Por favor, repite tu nombre por razones de seguridad", name);
    if (!name) return;
    if (!usuarios.hasOwnProperty(name)) {
      usuarios[name] = name;
      setItem(name);
      saveToStorage();
    }
    list.value = name;
    current.value = usuarios[name];
}