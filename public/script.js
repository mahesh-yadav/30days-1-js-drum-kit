window.addEventListener('keyup', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (audio) {
    audio.currentTime = 0; // rewind to start
    audio.play();

    key.classList.add('playing'); // animation
  }
});

const keys = document.querySelectorAll('.key');

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('transitionend', () => {
    keys[i].classList.remove('playing');
  });
}
