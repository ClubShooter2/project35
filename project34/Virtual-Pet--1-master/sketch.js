//Create variables here 
var dogImg;
var happydogImg;
var food;
var milk;
var milkImg;
var database;
var canvas;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/a.png");
  milkImg = loadImage("images/Milk.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  
  food = new Food();
  dog = createSprite(displayWidth/2 - 200, displayHeight - 100);
  food.getfood();
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happydogImg);
  button = createButton("feed the pet");
    button1 = createButton("add food");
    button.position(100,100);
    button.mousePressed(feedDog);
    button1.position(20,100);
    button1.mousePressed(addFood);
}
function feedDog() {
  
  food.deductFood();
}
function addFood() {
  milk = milk + 10;
  food.update(milk);
  
}
function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
 
  text("Feed your pet and make him feel happy"+ milk, 250, 50);
  fill("red");
  stroke(20);
}



