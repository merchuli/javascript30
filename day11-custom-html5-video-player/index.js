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

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


/** Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleBtn);
video.addEventListener('pause', updateToggleBtn);
video.addEventListener('timeupdate', handleProgress);

toggleBtn.addEventListener('click', togglePlay);
skipBtns.forEach((element) => element.addEventListener('click', skip));
ranges.forEach((element) => element.addEventListener('change', handleRangeUpdate));

let progressMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => progressMouseDown && scrub(e));
progress.addEventListener('mousedown', () => progressMouseDown = true);
progress.addEventListener('mouseup', () => progressMouseDown = false);
