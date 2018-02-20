import { gameCtx, gameScreen } from '../utils/game';
export function drawAsteroid() {
  gameCtx.fillStyle = 'black';
  gameCtx.beginPath();
  gameCtx.moveTo(30, 50);
  gameCtx.lineTo(60, 30);
  gameCtx.lineTo(70, 50);
  gameCtx.lineTo(70, 60);
  gameCtx.lineTo(60, 70);
  gameCtx.lineTo(60, 80);
  gameCtx.lineTo(40, 80);
  gameCtx.lineTo(40, 70);
  gameCtx.lineTo(30, 70);
  gameCtx.closePath();
  gameCtx.stroke();
}