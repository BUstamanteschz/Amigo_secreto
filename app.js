// 1. Crear un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Implementar una función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array si no está duplicado
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Este nombre ya fue agregado.");
    }
}

// 3. Implementar una función para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    // Iterar sobre el arreglo y agregar cada nombre a la lista
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// 4. Implementar una función para seleccionar un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    document.getElementById("resultado").innerHTML = 
        `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
