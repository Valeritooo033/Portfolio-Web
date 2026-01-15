function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');

    document.getElementById('reloj').textContent = `${horas}:${minutos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();