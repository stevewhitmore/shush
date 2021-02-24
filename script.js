const thunderAudioEl = document.querySelector('#storm');
const playButtonEl = document.querySelector('#play');
const pauseButtonEl = document.querySelector('#pause');

function toggleVisible() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(b => {
    b.classList.toggle('visible');
  });
}

function playSound() {
  thunderAudioEl.volume = 1;
  thunderAudioEl.play();
  toggleVisible();
}

function pauseSound() {
  thunderAudioEl.pause();
  toggleVisible();
}

playButtonEl.addEventListener('click', () => {
  playSound();
});

pauseButtonEl.addEventListener('click', () => {
  pauseSound();
});
