import { Game, splashScreen, gameScreen, gameCtx } from './utils/game';
import { audioUrl, playMusic, pauseMusic, audio, button, soundPauseIcon, soundPlayIcon, musicVolume } from './utils/music';

if (splashScreen || gameOverScreen) {
  playMusic(audioUrl);
}

document.addEventListener('keyup', (event) => {
  if (event.keyCode == 32) {
    splashScreen.className += 'fadesplash';
    setTimeout(function () {
      splashScreen.style.display = 'none';
      gameScreen.style.display = 'block';
     // pauseMusic(audioUrl);
    }, 2000);

    /* At this point we dont want the game to start playing before we see
        the game screen so we use a delay to give room for our transition
        to occur
    */
    //let playerName = prompt('Enter Player Name');  We can fetch player name
    setTimeout(function () {
      gameCtx.fillStyle = "teal";
      gameCtx.fillRect(0, 0, innerWidth, innerHeight);
      const game = new Game();
      game.play();
      pauseMusic(audioUrl);
      // game.pause(function(){
      //   console.log('Game Paused');
      // });
    }, 2000);
  }
});
