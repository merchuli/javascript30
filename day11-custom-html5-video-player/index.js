/** 
 * 1. Get out elements
 * 2. Build out functions
 * 3. Hook up the event listeners
 **/

/** Get out elements */
const player = document.querySelector('.player');
const video = player.querySelector('video');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggleBtn = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



/** Build out functions */
function togglePlay() {
  if (video.paused) {
    video.play();
    return;
  }

  video.pause();

  // Another way to toggle play
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

function updateToggleBtn() {
  toggleBtn.textContent = this.paused ? '►' : '❚❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}


/** Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleBtn);
video.addEventListener('pause', updateToggleBtn);

toggleBtn.addEventListener('click', togglePlay);
skipBtns.forEach((element) => element.addEventListener('click', skip));
ranges.forEach((element) => element.addEventListener('change', handleRangeUpdate));
