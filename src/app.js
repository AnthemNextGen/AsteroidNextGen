import {Game,splashScreen, gameScreen, gameCtx} from './utils/game';
import menu from './utils/menu';
import {controls} from './utils/controls';
import { musicControl } from './utils/music';

document.body.addEventListener('keyup', (event)=>{
    if(event.keyCode == controls.startKey){
      splashScreen.className += 'fadesplash';
      setTimeout(()=>{
        splashScreen.style.display = 'none';
        gameScreen.style.display = 'block';
      }, 2000);
      // Delay for splash to fade away
      setTimeout(()=>{
        splashScreen.className = "";
        const game = new Game();
          game.play();
      }, 2000);
    }
});
