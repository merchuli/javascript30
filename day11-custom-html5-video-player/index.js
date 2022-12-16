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

