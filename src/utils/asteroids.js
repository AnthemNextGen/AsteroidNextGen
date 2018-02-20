import { gameCtx, gameScreen } from '../utils/game';
export function drawAsteroid() {
  //gameCtx.fillStyle = 'black';
  // for(var i = 0; i < 5; i++){
  //   var x = Math.random()* window.innerWidth;
  //   var y = Math.random()* window.innerHeight;
    gameCtx.beginPath();
    gameCtx.moveTo(2*x, 3*y);
    gameCtx.lineTo(60, 30);
    gameCtx.lineTo(70, 50);
    gameCtx.lineTo(70, 60);
    gameCtx.lineTo(60, 70);
    gameCtx.lineTo(60, 80);
    gameCtx.lineTo(40, 80);
    gameCtx.lineTo(40, 70);
    gameCtx.lineTo(30, 70);
    gameCtx.closePath();
    gameCtx.strokeStyle = 'blue';
    gameCtx.stroke();
  // }
}
