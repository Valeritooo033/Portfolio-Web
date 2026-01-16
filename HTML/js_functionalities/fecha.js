function actualizarFecha() {
    const ahora = new Date();

    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');

    document.getElementById("fecha").textContent = `${dia}/${mes}`;
}

actualizarFecha();

setInterval(actualizarFecha, 60000);