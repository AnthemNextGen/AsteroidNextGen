import {Game,splashScreen, gameScreen, gameCtx} from './utils/game';
import menu from './utils/menu';
import {controls} from './utils/controls';
import { musicControl } from './utils/music';

document.body.addEventListener('keyup', (event)=>{
    if(event.keyCode == controls.startKey){
      splashScreen.className += 'fadesplash';
      setTimeout(function(){
        splashScreen.style.display = 'none';
        gameScreen.style.display = 'block';
      }, 2000);

      /* At this point we dont want the game to start playing before we see
          the game screen so we use a delay to give room for our transition
          to occur
      */
      //let playerName = prompt('Enter Player Name');  We can fetch player name
      setTimeout(function(){
        // gameCtx.fillStyle = "teal";
        // gameCtx.fillRect(0,0,innerWidth,innerHeight);
        splashScreen.className = "";
        const game = new Game();
          game.play();
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
      // game.pause(function(){
      //   console.log('Game Paused');
      // });
    }, 2000);
  }
});
