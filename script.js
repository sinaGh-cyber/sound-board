const sounds = document.querySelectorAll('audio');
const stopSongs = () => {
  sounds.forEach((sound) => {
    sound.pause;
    sound.currentTime = 0;
  });
};
sounds.forEach((sound) => {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('btn');
  buttonEl.addEventListener('click', () => {
    stopSongs();
    sound.play();
  });
  buttonEl.innerText = sound.id;

  document.getElementById('buttons').append(buttonEl);
});
