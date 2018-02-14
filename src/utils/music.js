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

var musicControl = function musicVolume(audio) {
  
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

var button = document.getElementById("play");
button.addEventListener("click", musicControl ); 

if(button.addEventListener){
  button.addEventListener('click', musicControl);    
} else if(button.attachEvent){
  button.attachEvent('onclick', musicControl);
}
