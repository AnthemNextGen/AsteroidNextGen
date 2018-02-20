import { splashScreen } from '../utils/game';
import {controls} from '../utils/controls';
export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const button = document.getElementById('play');
var isSound = false;
var soundPauseIcon = '<img src="assets/pauseVolumeIcon.png"height="40" width="40" />';
var soundPlayIcon = '<img src="assets/playVolumeIcon.png" height="40" width="40" />';

export function musicControl(audioUrl) {
  if (audioUrl && audio.paused) {
    audio.play(),
      audio.loop = true,
      isSound = true;
    return true;
  } else if (audioUrl && audio.play) {
    audio.pause(),
      isSound = false;
    return true;
  }
}

if (splashScreen || gameOverScreen) {
  musicControl(audioUrl);
}

if (audio.play) {
  document.addEventListener('keyup', (event) => {
    if (event.keyCode == controls.startKey) {
      setTimeout(() => {
        audio.pause();
      }, 2000);
    }
  })
}

button.addEventListener('click', (event) => {
  if (isSound == true) {
    musicControl(audioUrl);
    button.innerHTML = soundPlayIcon;
  } else if (isSound == false) {
    musicControl(audioUrl);
    button.innerHTML = soundPauseIcon;
  }
})




