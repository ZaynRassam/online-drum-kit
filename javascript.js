window.addEventListener("keydown", function (event) {
    const key = document.querySelector(`.button.${event.code}`)
    const audio = document.querySelector(`.audio.${event.code}`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("played");
});

function removeTransition(event){
    if (event.propertyName !== 'transform') return;
    this.classList.remove("played");
}

const keys = document.querySelectorAll(".button");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

