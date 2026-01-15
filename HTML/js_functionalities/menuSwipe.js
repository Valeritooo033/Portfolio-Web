const items = document.querySelectorAll(".item");
let selectedIndex = 0;

// Función para actualizar la posición y escala de cada item
function actualizarMenu() {
    const separation = 70; // distancia horizontal entre items

    items.forEach((item, index) => {
        const distance = index - selectedIndex;

        if (index === selectedIndex) {
            item.style.transform = "scale(1.8)";
            item.style.opacity = "1";
            item.style.zIndex = "10";
        } else {
            item.style.transform = `scale(1) translateX(${distance * separation}px) rotateY(${distance * 10}deg)`;
            item.style.opacity = "0.35";
            item.style.zIndex = "1";
        }
    });

    // Disparamos un evento global para otros módulos (ej. panel contextual)
    document.dispatchEvent(
        new CustomEvent("menuChange", { detail: selectedIndex })
    );
}

// Función para mover el menú y reproducir sonido independiente
function moverMenu(nuevoIndex) {
    if (nuevoIndex === selectedIndex) return;

    selectedIndex = nuevoIndex;
    actualizarMenu();

    // 🔊 Sonido independiente (no se corta aunque el usuario haga scroll rápido)
    const sound = new Audio("audio/click.mp3");
    sound.volume = 1; // ajusta si quieres menos fuerte
    sound.play();
}

// Navegación con teclado (Arrow + WASD)
document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase(); // soporta mayúsculas
    if (key === "arrowright" || key === "d") {
        moverMenu(Math.min(selectedIndex + 1, items.length - 1));
    } else if (key === "arrowleft" || key === "a") {
        moverMenu(Math.max(selectedIndex - 1, 0));
    }
});

// Click en los items
items.forEach((item, index) => {
    item.addEventListener("click", () => moverMenu(index));
});

// Inicializamos el menú
actualizarMenu();
