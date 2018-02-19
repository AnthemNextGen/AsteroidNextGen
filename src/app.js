import {Game,splashScreen, gameScreen, gameCtx, gameOver} from './utils/game';
import {controls} from './utils/controls';

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
        splashScreen.className = "";
        const game = new Game();
          game.play();
      }, 2000);


    } else if(event.keyCode == controls.endKey){
      //show third (game over) screen
       gameScreen.style.display = 'none';
       gameOver.style.display ="block"


    }
});

export  function startGame(){
  alert("show");
  
}


