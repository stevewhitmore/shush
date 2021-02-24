const thunderAudio = document.querySelector('#storm-audio');

function playSound() {
    thunderAudio.volume = 1;
    thunderAudio.play();
    toggleVisible();
}

function pauseSound() {
  thunderAudio.pause();
  toggleVisible();
}

function toggleVisible() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(b => {
    b.classList.toggle('visible');
  })
}