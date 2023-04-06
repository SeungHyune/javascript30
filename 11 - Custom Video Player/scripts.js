const player = document.querySelectorAll('.player__button');
const video = document.querySelector('video');

let play = false;
player.forEach(btn => btn.addEventListener('click', function(e){
    let currentTime = video.currentTime;
    let fullTime = video.duration;

    if(!play && e.target.title.includes("Play")){
        video.play();
        play = true;
    } else if(e.target.title.includes("Play")) {
        video.pause();
        play = false;
    }

    if(e.target.dataset.skip === "-10"){
        if(currentTime - 10 > 0){
            currentTime = currentTime - 10;
        } else {
            currentTime = currentTime + 25;
        }
    } else if(e.target.dataset.skip === "25"){
        console.log(25)
    }
}))

const videoVolume = document.querySelector('input[name=volume]');
videoVolume.addEventListener('input', function(e){
    video.volume = e.target.value * 1;
})


const videoRate = document.querySelector('input[name=playbackRate]');
videoRate.addEventListener('input', function(e){
    video.playbackRate = e.target.value;
    console.log(video.playbackRate)
})

video.addEventListener('click', function(e){
    console.log(e, e.timeStamp)
})

