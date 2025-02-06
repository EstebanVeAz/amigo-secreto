//Array de nombres de amigos
let amigos = [];

//se implementa una funcion para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}
// agrega en una lista bajo el input cada amigo agregado 
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//realiza el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para sortear.");
        return;
    }
    
    let copia = [...amigos];
    let asignaciones = {};
    
    for (let amigo of amigos) {
        let posibles = copia.filter(a => a !== amigo);
        if (posibles.length === 0) {
            return sortearAmigo();
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = elegido;
        copia.splice(copia.indexOf(elegido), 1);
    }
    mostrarResultados(asignaciones);
}
//muestra en pantalla la asignación de su amigo secreto
function mostrarResultados(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultado.appendChild(li);
    }
}
