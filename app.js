var video = document.getElementById("flameVideo");
var audio = document.getElementById("sheamusAudio");
var btn1 = document.getElementById("flameButton");
var btn2 = document.getElementById("audioButton");
        
function flamesFunction() {
    if (video.paused) {
    video.play();
    btn1.innerHTML = "Pause Flames";
    } else {
    video.pause();
    btn1.innerHTML = "Play Flames";
    }
};

function audioFunction() {
    if (audio.paused) {
    audio.play();
    btn2.innerHTML = "Pause Audio";
    } else {
    audio.pause();
    btn2.innerHTML = "Play Audio";
    }
};