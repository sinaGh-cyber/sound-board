
const sounds = document.querySelectorAll('audio');

sounds.forEach((sound) => {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('btn');

  buttonEl.innerText = sound.id;

  document.getElementById('buttons').append(buttonEl);
});
