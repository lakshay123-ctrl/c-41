var mario,mario_img;
var background_Img,ground;
var ground_img;
var stone_ground;

function preload(){
  mario_img = loadAnimation("images/m1.png","images/m2.png","images/m3.png");
  background_Img = loadImage("images/background.png");
  ground_img = loadImage("images/ground.png");
};

function setup() {
  createCanvas(1000,600);
  mario = createSprite(70,460,20,50);
  mario.addAnimation("running",mario_img);
  mario.scale = 0.4;

  ground = createSprite(500,520,1200,20);
 
 
  ground.visible = false;

  stone_ground = createSprite(500,555,1000,80);
  stone_ground.addImage(ground_img);
  //stone_ground.scale = 4;
  stone_ground.velocityX = -4;
  stone_ground.x = stone_ground.width/2;

}

function draw() {
  background(background_Img); 
  
  mario.collide(ground);
  
 if (keyDown("UP_ARROW")){
   mario.velocityY = -12;
 }

 mario.velocityY = mario.velocityY+0.5;

 if (stone_ground.x<0){
   stone_ground.x = stone_ground.width/2;
 }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount%400 === 0){
  var enemy = createSprite(1000,500,20,20);
  enemy.velocityX = -6;
  }
}