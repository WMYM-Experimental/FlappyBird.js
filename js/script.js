//variables and constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innnerWidth;
canvas.height = window.innnerHeight;

function getRandomInt(min, max) {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);

  return randomInt;
}
