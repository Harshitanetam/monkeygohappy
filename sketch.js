
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,invisibleGround,groundImage;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  obstacleImage0=loadImage("sprite_0.png");
  obstacleImage1=loadImage("sprite_1.png");
  obstacleImage2=loadImage("sprite_2.png");
  obstacleImage3=loadImage("sprite_3.png");
  obstacleImage4=loadImage("sprite_4.png");
  obstacleImage5=loadImage("sprite_5.png");
  obstacleImage6=loadImage("sprite_6.png");
  obstacleImage7=loadImage("sprite_7.png");
  obstacleImage8=loadImage("sprite_8.png");
  
}



function setup() {
  createCanvas(600,350);
 //creating monkey 
  monkey=createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,20);
  ground.velocityY=3;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  //create Obstace and banana Groups
   bananaGroup = createGroup();
   obstacleGroup= createGroup();
  
  invisibleGround=createSprite(0,300,600,10);
  invisibleGround.visible=false;
  
}


function draw() {

background("lightblue")
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime,100,50);
  
   if(obstacleGroup.isTouching(monkey)){
     gameState=END;
     }
   if(ground.x<0){
    ground.x=ground.width/2;
   }
  
 if(keyDown("space")&& monkey.y >=100) { 
   monkey.velocityY=-10;
 }
 monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(invisibleGround); 
  
  //spown banana
   spownbanana();
  
  //spown obstace
  spownobstace();
  
drawSprites();
}

//function to spawn the banana
 function spownbanana(){
   //write your code here 
   
   if(frameCount%100==0){
   banana=createSprite(600,400,40,20);
     banana.velocityX=-3;
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.y=Math.round(random(1,200));
     banana.depth=monkey.depth
     monkey.depth=monkey.depth+1;
   }
 }

//funtion to spown the obstace
function spownobstace(){
//write your code here
  
  if (frameCount%80==0){
    var obstacle=createSprite(600,280,40,10);
    obstacle.velocityX=-6;
    var number=Math.round(random(1,6));
    obstacle.scale=0.2;
    obstacle.lifetime=200;
    obstacle.addImage(obstacleImage);
    
    switch(number){
     
      
    }
  }
  
}

