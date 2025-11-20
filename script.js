const reloj = document.getElementById("reloj");

//Definimos una función que actualice la hora cada segundo
function actualizarReloj() {
    const ahora = new Date();

    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getUTCSeconds().toString().padStart(2, "0");

    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

//Botón para cambiar a modo oscuro

const botonModo = document.getElementById("modo");
botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "☀️ Modo Claro";
    } else {
        botonModo.textContent = "🌙 Modo Oscuro";
    }
});