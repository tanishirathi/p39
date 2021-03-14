var canvas, backgroundImage;
var car1,car2,car3,car4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars;
var form, player, game;

function preload(){
  p1Image = loadImage("images/player.png");
  p2Image = loadImage("images/player.png");
  p3Image = loadImage("images/player.png");
  p4Image = loadImage("images/player.png");
  groundImage = loadImage("images/ground.png");
  trackImage = loadImage("images/track.jpg");
  
  }


function setup(){
  canvas = createCanvas(displayWidth-60,displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white")
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
