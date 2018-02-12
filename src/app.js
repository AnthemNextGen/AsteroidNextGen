import {Game,splashScreen, gameScreen} from './utils/game';
document.addEventListener('keyup', function(event){
    if(event.keyCode == 32){
      splashScreen.className += 'fadesplash';
      setTimeout(function(){
        splashScreen.style.display = 'none';
      }, 3000);
    }
});

const game = new Game();
game.play();
