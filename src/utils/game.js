import ioClient from 'socket.io-client';
export const splashScreen = document.getElementById('splash');
export const gameScreen = document.getElementById('game');

document.addEventListener('keyup', function(event){
    if(event.keyCode == 32){
      splashScreen.className += 'fadesplash';
      setTimeout(function(){
        splashScreen.style.display = 'none';
      }, 3000);

    }
});

export class Game{
  constructor(){
  let io = ioClient('localhost:5000');
  io.on('message', function(msg){
    //alert(msg);
  });
}

  play(){
    console.log('Game playing...');
  }
}
