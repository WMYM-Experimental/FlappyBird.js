//variables and constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//game images
let bird = new Image(); //user
let background = new Image();
let floor = new Image();
let pipeBootom = new Image();
let pipeTop = new Image();

let scoreSound = new Audio(); //sound effect

//game variables
let distanceBetweenPipes = 80;
let gravity = 1;

//bird variables
let birdLocationX = 10;
let birdLocationY = 150;

//score
let score = 0;

//relative paths images
bird.src = "img/game_imgs/bird.png";
background.src = "img/game_imgs/background.png";
floor.src = "img/game_imgs/floor.png";
pipeBootom.src = "img/game_imgs/pipeBottom";
pipeTop.src = "img/game_imgs/pipeTop.png";

//relative paths sounds
scoreSound.src = "sounds/score.mp3";

//bird jump
function getRandomInt(min, max) {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);

  return randomInt;
}
