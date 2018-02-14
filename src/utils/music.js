export const audioUrl = "./assets/Videogame2.wav";
export const audio = document.createElement('audio');
audio.src = audioUrl;
export const soundPauseIcon = '<img src="assets/pauseVolumeIcon.png" height="40" width="40" />';
export const soundPlayIcon = '<img src="assets/playVolumeIcon.png" height="40" width="40" />';

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

window.onload = function musicVolume(audioUrl) {
  var button = document.getElementById("play");
  button.ondblclick = function () {
    if (!playMusic(audioUrl)) {
      playMusic(audioUrl);
      return true;
    }
    button.innerHTML = soundPauseIcon;
  };
  button.onclick = function () {
    if (!pauseMusic(audioUrl)) {
      pauseMusic(audioUrl);
      return true;
    };
    button.innerHTML = soundPlayIcon;
  }
}



