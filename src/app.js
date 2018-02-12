import {Game,splashScreen, gameScreen} from './utils/game';
document.addEventListener('keyup', function(event){
    if(event.keyCode == 32){
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
        const game = new Game();
        game.play();
      }, 3000);


    }
});
