const USER_INDEX = 0;

const userText = document.getElementById("userText");
const typingSound = document.getElementById("typingSound");
const selectSound = document.getElementById("selectSound");

typingSound.volume = 0.35;
selectSound.volume = 0.8;

let userIsSelected = true;

function resetUserText() {
    userText.classList.remove("play");
    typingSound.pause();
    typingSound.currentTime = 0;
}

function playConfirmFX(item) {
    item.classList.remove("confirm");
    void item.offsetWidth;
    item.classList.add("confirm");
}

function playUserIntro() {
    if (!userIsSelected) return;

    const userItem = document.querySelectorAll(".item")[USER_INDEX];

    // sonido select inmediato
    selectSound.currentTime = 0;
    selectSound.play();

    // FX visual seguro
    playConfirmFX(userItem);

    // delay antes de escribir
    setTimeout(() => {
        userText.classList.remove("play");
        void userText.offsetWidth;
        userText.classList.add("play");

        typingSound.currentTime = 0;
        typingSound.play();
    }, 300);
}

// Cambio de icono
document.addEventListener("menuChange", (e) => {
    userIsSelected = e.detail === USER_INDEX;
    if (!userIsSelected) resetUserText();
});

// Enter
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") playUserIntro();
});

// Click icono User
document.querySelectorAll(".item")[USER_INDEX]
    .addEventListener("click", playUserIntro);
