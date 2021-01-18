var dog; 
var happyDog;
var database;
var food;
var foodStock;

function preload(){
  dogImg = loadImage("Dog.png","happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
   Dog = createSprite(250,300,10,10);
   Dog.addImage("running",dogImg);
   Dog.scale = 0.1;


}


function draw() {  

  

  drawSprites();
 }

 




