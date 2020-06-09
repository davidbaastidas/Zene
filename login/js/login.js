var list = document.querySelector(".container");
function addToList(name) {
    var option = document.createElement("option");
    option.textContent = name;
    list.appendChild(option);
}

// Initialize the list from localStorage
var notes = JSON.parse(localStorage.getItem("usuarios")) ||
            {name: name};
for (var name in notes)
    if (notes.hasOwnProperty(name))
    addToList(name);

function saveToStorage() {
    localStorage.setItem("usuarios", JSON.stringify(notes));
}

function addNote() {
    var name = prompt("Por favor, repite tu nombre por razones de seguridad", name);
    if (!name) return;
    if (!notes.hasOwnProperty(name)) {
      notes[name] = name;
      addToList(name);
      saveToStorage();
    }
    list.value = name;
    current.value = notes[name];
}