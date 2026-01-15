const contextPanel = document.getElementById("contextPanel"); 
const contextList = document.getElementById("contextList");
const items = document.querySelectorAll(".item");

// Datos de cada item del menú
const menuData = {
    0: ["Perfil", "Proyectos", "Contacto"],
    1: ["Ajustes", "Tema", "Sonido"],
    2: ["Play", "Next", "Volume"],
    3: ["Versiones", "Changelog"]
};

// Escuchamos el evento global 'menuChange' disparado por menuSwipe.js
document.addEventListener("menuChange", (e) => {
    const index = e.detail;
    const item = items[index];
    const opciones = menuData[index];

    // Si no hay opciones definidas o el item no existe, ocultamos el panel
    if (!item || !opciones) {
        contextPanel.classList.remove("show");
        return;
    }

    // Limpiamos opciones previas
    contextList.innerHTML = "";

    // Añadimos nuevas opciones
    opciones.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        contextList.appendChild(li);
    });

    // Posicionamos el panel justo debajo del icono
    const rect = item.getBoundingClientRect();
    const panelX = rect.left + rect.width / 2; // centro del item
    const panelY = rect.bottom + 12; // justo debajo, 12px de margen

    contextPanel.style.left = `${panelX}px`;
    contextPanel.style.top = `${panelY}px`;
    contextPanel.style.transform = "translateX(-50%)"; // centrar horizontalmente

    // Mostramos el panel
    contextPanel.classList.add("show");
});
