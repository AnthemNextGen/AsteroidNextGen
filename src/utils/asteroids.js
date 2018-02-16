import {gameCtx} from './game';

export function drawAsteroids() {

        // Draw asteroids.
        for (let i = 0; i <= 20; i++) {
          // Get random positions for asteroids.
          var a = Math.floor(Math.random() * innerWidth);
          var b = Math.floor(Math.random() * innerHeight);

          // Make the asteroids red
          gameCtx.fillStyle = "teal";

          // Keep the asteroids far enough away from
          // the beginning or end.
          if (a > 40 && b > 40 && a < 270 && b < 270) {

            // Draw an individual asteroid.
            gameCtx.beginPath();
            setInterval(function(){
              gameCtx.arc(a, b, 10, 0, Math.PI * 2, true);
            }, 1000);
            gameCtx.closePath();
            gameCtx.fill();
          }
          else --i;
    }

}
