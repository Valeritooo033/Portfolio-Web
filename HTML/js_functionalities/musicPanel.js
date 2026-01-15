const musicPanel = document.getElementById("musicPanel");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const volumeSlider = document.getElementById("volumeSlider");
const bgAudio = document.getElementById("bgAudio");
const musicTitle = document.getElementById("musicTitle");

const songs = [
    {title: "Interplanetary", file: "audio/InterplanetaryAlignment-NoMBe.mp3"},
    {title: "RetroWave", file: "audio/RetroWave.mp3"},
    {title: "CyberNight", file: "audio/CyberNight.mp3"}
];
let currentSongIndex = 0;

function playSong(index){
    currentSongIndex=index;
    bgAudio.src=songs[index].file;
    bgAudio.play();
    musicTitle.textContent="Canción: "+songs[index].title;
}

// Play/Pause
playPauseBtn.addEventListener("click", ()=>{ if(bgAudio.paused) bgAudio.play(); else bgAudio.pause(); });

// Next/Prev
nextBtn.addEventListener("click", ()=>playSong((currentSongIndex+1)%songs.length));
prevBtn.addEventListener("click", ()=>playSong((currentSongIndex-1+songs.length)%songs.length));

// Volumen
volumeSlider.addEventListener("input",(e)=> bgAudio.volume=e.target.value );

// Mostrar panel solo al seleccionar Music
function actualizarMusicPanel(){
    const musicItem = items[selectedIndex];
    if(musicItem.alt==="Music") musicPanel.classList.remove("hidden");
    else musicPanel.classList.add("hidden");
}
