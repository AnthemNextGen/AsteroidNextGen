import {splashScreen } from '../utils/game';
export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const button = document.getElementById('play');
var isSound = false;

export function playMusic(audioUrl) {
  if (audioUrl && audio.paused) {
   audio.play(),
    audio.loop = true,
    isSound = true;
    return true;
  } else if(audioUrl && audio.play) {
   audio.pause(),
    isSound = false;
    return true;
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
  isSound == true;
} else if (game.play){
  playMusic(audioUrl);
  isSound == false;
}

button.addEventListener('click', (event) => {
  if (isSound == true) {
    playMusic(audioUrl);
  }else if (isSound == false){
    playMusic(audioUrl)
  }
})




