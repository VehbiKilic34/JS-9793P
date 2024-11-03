const countButton = document.getElementById("count-button")
countButton.addEventListener("click", function () {
    const count = document.getElementById("count")
    let countNumber = Number(count.innerHTML)
    countNumber++;
    count.innerHTML = countNumber;
    if (countNumber % 5 === 0)
        alert("Git 5 dk dinlen.")

});

const birdAudioPlay = document.getElementById("birdaudioplay")
const birdIcon = document.getElementById("birdIcon")
birdIcon.addEventListener("click", function () {
    if (birdAudioPlay.paused) {
        birdAudioPlay.play()
        birdIcon.className = "fa-sharp fa-solid fa-music"
    }
    else {
        birdAudioPlay.pause()
        birdIcon.className = "fa-solid fa-dove"
    }
});

const rainAudioPlay = document.getElementById("rainaudioplay")
const rainIcon = document.getElementById("rainIcon")
rainIcon.addEventListener("click", function () {
    if (rainAudioPlay.paused) {
        rainAudioPlay.play()
        rainIcon.className = "fa-sharp fa-solid fa-music"
    }
    else {
        rainAudioPlay.pause()
        rainIcon.className = "fa-solid fa-cloud-rain"
    }
});

const pianoAudioPlay = document.getElementById("pianoaudioplay")
const pianoIcon = document.getElementById("pianoIcon")
pianoIcon.addEventListener("click", function () {
    if (pianoAudioPlay.paused) {
        pianoAudioPlay.play()
        pianoIcon.className = "fa-sharp fa-solid fa-music"
    }
    else {
        pianoAudioPlay.pause()
        pianoIcon.className = "fa-solid fa-headphones"
    }
});

const relaxAudioPlay = document.getElementById("relaxaudioplay")
const relaxIcon = document.getElementById("relaxIcon")
relaxIcon.addEventListener("click", function () {
    if (relaxAudioPlay.paused) {
        relaxAudioPlay.play()
        relaxIcon.className = "fa-sharp fa-solid fa-music"
    }
    else {
        relaxAudioPlay.pause()
        relaxIcon.className = "fa-solid fa-leaf"
    }
});

const volumeInput = document.getElementById("volume-input");
volumeInput.addEventListener("input", function(){
    birdAudioPlay.volume = volumeInput.value / 100;
    rainAudioPlay.volume = volumeInput.value / 100;
    pianoAudioPlay.volume = volumeInput.value / 100;
    relaxAudioPlay.volume = volumeInput.value / 100;

})