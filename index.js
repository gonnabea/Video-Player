const playBtn = document.getElementById("playBtn"),
stopBtn = document.getElementById("stopBtn"),
progressBar = document.getElementById("progressBar"),
videoPlayTime = document.getElementById("videoPlayTime"),
video = document.getElementById("video");


function playVid(){
    const seconds = Math.floor(video.currentTime%60),
    minutes = Math.floor(seconds/60);
    videoPlayTime.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    progressBar.value = video.currentTime;
}

function handlePlay(){
  setInterval(playVid,1000);
  video.play();
  playBtn.innerHTML="일시정지";
  playBtn.removeEventListener("click", handlePlay);
  playBtn.addEventListener("click", handlePause);    
}

function handlePause(){
    clearInterval(playVid,1000);
    video.pause();
    playBtn.innerHTML="재생";
    playBtn.removeEventListener("click", handlePause);
    playBtn.addEventListener("click", handlePlay);
}

function handleStop(){
  handlePause();
  video.currentTime = 0;
}

function handleBar(){
    video.currentTime = progressBar.value;
    const seconds = Math.floor(video.currentTime%60),
    minutes = Math.floor(seconds/60);
    videoPlayTime.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    playBtn.addEventListener("click", handlePlay);
    stopBtn.addEventListener("click", handleStop);
    progressBar.addEventListener("input", handleBar);
}

init();
