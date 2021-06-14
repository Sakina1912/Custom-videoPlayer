const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress-bar')
const timestamp = document.getElementById('time-stamp')


function togglePlayPause(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function stopVideo(){
    video.currentTime=0
    video.pause()
}

function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play"></i>'
    }else{
        play.innerHTML = '<i class="fa fa-pause"></i>'
    }
}

function updateProgress(){
    progress.value = (video.currentTime/video.duration)*100

    let min = Math.floor(video.currentTime/60)
    if(min<10){
        min = '0' + String(min)
    }

    let sec = Math.floor(video.currentTime%60)
    if(sec<10){
        sec = '0' + String(sec)
    }

    timestamp.innerHTML =`${min}:${sec}`
}

function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration)/100
}


video.addEventListener('click',togglePlayPause)
video.addEventListener('pause',updatePlayIcon)
video.addEventListener('play',updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)


play.addEventListener('click',togglePlayPause)
stop.addEventListener('click',stopVideo)
progress.addEventListener('change',setVideoProgress)