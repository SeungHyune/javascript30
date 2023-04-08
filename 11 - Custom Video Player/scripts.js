const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(e){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateBtnton(){
    const icon = video.paused ? '►' : '❚ ❚';
    console.log(icon)
    toggle.textContent = icon;
}

function skip(){
    // if(this.dataset['skip'] === "-10"){
    //     video.currentTime -= 10;
    // } else if(this.dataset['skip'] === "25"){
    //     video.currentTime += 25;
    // }
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime)
}

function handleRangeUpdate(){
    // console.log(this.value)
    // console.log(video.volume)

    // this.name === 'volume' ? video.volume = Number(this.value) : null;
    // this.name === 'playbackRate' ? video.playbackRate = Number(this.value) : null;
    video[this.name] = this.value;
}

function handleProgress(e){
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log(scrubTime)
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtnton);
video.addEventListener('pause', updateBtnton);
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));

progress.addEventListener('mousemove', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);