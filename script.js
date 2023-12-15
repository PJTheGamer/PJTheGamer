// Add these variables
let missedDucks = 3;
const maxMissedDucks = 3; // Adjust as needed

// Modify the gameLoop function
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ducks.forEach((duck) => {
    duck.move();
    duck.draw();
    
    // Check if duck has reached the top without being shot
    if (duck.y + duck.height < 3) {
      missedDucks++;
      if (missedDucks >= maxMissedDucks) {
        endGame();
      }
    }
  });

  requestAnimationFrame(gameLoop);
}

// Add the endGame function
function endGame() {
  alert('Game Over! Your score: ' + score);
  resetGame();
}

// Add the resetGame function
function resetGame() {
  score = 0;
  missedDucks = 0;
  ducks.forEach((duck) => duck.reset());
  updateScoreboard();
}
