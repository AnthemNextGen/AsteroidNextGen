import {splashScreen } from '../utils/game';
export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const button = document.getElementById('play');

export function playMusic(audioUrl) {
  if (audioUrl) {
    audio.play();
    audio.loop = true;
    return true;
  } else {
    return false
  }
}

export function pauseMusic(audioUrl) {
  if (audioUrl) {
    audio.pause();
    return true;
  } else {
    return false;
  }
}

if (splashScreen || gameOverScreen) {
  playMusic(audioUrl);
}

button.addEventListener('click', (event) => {
  if (audio.play) {
    pauseMusic(audioUrl);
  };
})

button.addEventListener('dblclick', (event) => {
  if (audio.paused) {
    playMusic(audioUrl);
  };
})


