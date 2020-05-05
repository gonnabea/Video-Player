const playBtn = document.getElementById("playBtn"),
stopBtn = document.getElementById("stopBtn"),
progressBar = document.getElementById("progressBar"),
videoPlayTime = document.getElementById("videoPlayTime");

let initTime = new Date(0);

function handlePlay(){
  setInterval(()=>{
      initTime+=1;
      videoPlayTime.innerHTML = initTime;
}
  
  ,1000);
    
}

function init(){
    playBtn.addEventListener("click", handlePlay);
    stopBtn.addEventListener("click", handleStop);
    progressBar.addEventListener("click", handleBar);
}

init();
