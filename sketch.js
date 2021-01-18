var dog; 
var happyDog;
var database;
var food;
var foodStock;

function preload(){
  dogImg = loadImage("Dog.png");
  happydogImg = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  
   Dog = Bodies.circle(50,250,320);
  World.add(world,dog);

}


function draw() {  

  

  imageMode(CENTER) ;
  image(dogImg,Dog.position.x, Dog.position.y,60,60);

 
}



