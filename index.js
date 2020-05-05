const playBtn = document.getElementById("playBtn"),
stopBtn = document.getElementById("stopBtn"),
progressBar = document.getElementById("progressBar"),
videoPlayTime = document.getElementById("videoPlayTime"),
video = document.getElementById("video");

function playVid(){
    const seconds = Math.ceil(video.currentTime);
    const minutes = Math.floor(seconds/60);
    videoPlayTime.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function handlePlay(){

  setInterval(playVid,1000);
video.play();    
}

function init(){
    playBtn.addEventListener("click", handlePlay);
    stopBtn.addEventListener("click", handleStop);
    progressBar.addEventListener("click", handleBar);
}

init();
