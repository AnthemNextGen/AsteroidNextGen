export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const soundPauseIcon = '<img src="assets/pauseVolumeIcon.png" height="42" width="42" />';
export const soundPlayIcon = '<img src="assets/playVolumeIcon.png" height="42" width="42" />';

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

export function musicVolume(audio) {
  var button = document.getElementById("play");
  if (audio && audio.paused) {
    playMusic(audioUrl);
    button.innerHTML = soundPauseIcon;
    return true;
  } else if (audio && audio.play) {
    pauseMusic(audioUrl);
    button.innerHTML = soundPlayIcon;
    return true;
  } else {
    return false;
  }
} 
