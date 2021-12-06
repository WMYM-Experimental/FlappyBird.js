//variables and constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//game images
let bird = new Image(); //user
let background = new Image();
let floor = new Image();
let pipeBottom = new Image();
let pipeTop = new Image();

let scoreSound = new Audio(); //sound effect

//game variables
let pipes = [];
pipes[0] = {
  x: canvas.width,
  y: 0,
};
let distanceBetweenPipes = 100;
let gravity = 0.9;
let distance = 0;

//bird variables
let birdLocationX = 8;
let birdLocationY = canvas.width / 2;

//score
let score = 0;

//relative paths images
bird.src = "img/game_imgs/bird.png";
background.src = "img/game_imgs/background.png";
floor.src = "img/game_imgs/floor.png";
pipeBottom.src = "img/game_imgs/pipeBottom.png";
pipeTop.src = "img/game_imgs/pipeTop.png";

canvas.width = background.width;
canvas.height = background.height;

//relative paths sounds
scoreSound.src = "sounds/score.mp3";

//bird jump
document.addEventListener("keydown", function jump(event) {
  if (event.code === "Space") {
    birdLocationY -= 40;
  }
});

function getRandomInt(min, max) {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInt;
}

function draw() {
  ctx.drawImage(background, 0, 0);

  for (let i = 0; i < pipes.length; i++) {
    distance = pipeTop.height + distanceBetweenPipes;

    ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y);
    ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y + distance);

    pipes[i].x--;

    if (pipes[i].x === 125) {
      pipes.push({
        x: canvas.width,
        y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height,
      });
    }

    if (
      (birdLocationX + bird.width >= pipes[i].x &&
        birdLocationX <= pipes[i].x + pipeTop.width &&
        (birdLocationY <= pipes[i].y + pipeTop.height ||
          birdLocationY + bird.height >= pipes[i].y + distance)) ||
      birdLocationY + bird.height >= canvas.height - floor.height
    ) {
      location.reload();
    }

    // detect collision
    if (pipes[i] === 5) {
      score++;
      scoreSound.play();
    }
  }
  ctx.drawImage(floor, 0, canvas.height - floor.height);
  ctx.drawImage(bird, birdLocationX, birdLocationY);
  birdLocationY += gravity;
  ctx.fillStyle = "#000";
  ctx.font = "20px 'Roboto', sans-serif";
  ctx.fillText("Score : " + score, 10, canvas.height - 25);
  requestAnimationFrame(draw);
}

draw();
