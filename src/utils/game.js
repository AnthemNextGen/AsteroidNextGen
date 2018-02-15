import ioClient from 'socket.io-client';
export const splashScreen = document.getElementById('splash');
export const gameScreen = document.getElementById('game');
export const gameCtx = gameScreen.getContext('2d');
gameScreen.width = innerWidth;
gameScreen.height = innerHeight;
var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // A to move Left
      movement.left = true;
      break;
    case 87: // W  to move Up
      movement.up = true;
      break;
    case 68: // D to move right
      movement.right = true;
      //console.log(movement.right);
      break;
    case 83: // S to move down
      movement.down = true;
      break;
    case 37:
      console.log('Rotate anti-clockwise');
      break;
    case 38:
      movement.up = true;
      console.log('Move up');
      break;
    case 39:
      console.log('Rotate Clockwise');
      break;
    case 40:
      movement.down = true;
      console.log('Move down');
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
    case 32:
      alert('Shoot...');
      break;
    case 37:
        console.log('Rotate anti-clockwise');
        break;
    case 38:
        movement.up = false;
        console.log('Move up');
        break;
    case 39:
        console.log('Rotate Clockwise');
        break;
    case 40:
        movement.down = false;
        console.log('Move down');
        break;
  }
});


export class Game{
  constructor(){
    this.io = ioClient('localhost:5000');
  }

  play(){
    // Game Code goes Here
    const sock = this.io;
    this.io.emit('new player');
    this.io.emit('join', "A player Joinned");

    setInterval(function(){
      sock.emit('movement', movement);
    }, 1000/60);

    this.io.on('state', function(players) {
        console.log(players);
        gameCtx.clearRect(50, 50, innerWidth, innerHeight);
        gameCtx.fillStyle = 'teal';
        gameCtx.strokeRect(10,10, innerWidth - 50, innerHeight-50);
        for (var id in players) {
          var player = players[id];
          gameCtx.beginPath();
          gameCtx.arc(player.x+20, player.y, 10, 0, 2 * Math.PI);
          gameCtx.fill();
        }
      });
  }
}
