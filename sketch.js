function preload(){
  playerImage =   loadImage("superman.png");
  bgImage = loadImage("space.png");
  villainImage = loadImage("villain.png");
}

function setup() {
  createCanvas(500, 500);
  
  bg = createSprite(200,200,400,400);
  player = createSprite(50,300,20,20);
  villain =createSprite(460,50,20,20); 
  platform =createSprite(250,520,500,10);
}

function draw() {
   
   bg.addImage(bgImage);
   bg.velocityY=4;
  
   player.addImage(playerImage);
   villain.addImage(villainImage);
  
    if(keyDown("up") ) {
       player.velocityY = -10;
      }
    if(keyDown("left") ) {
      player.x = player.x-4;
      }
    if(keyDown("right") ) {
       player.x = player.x+4;
      }
    player.velocityY = player.velocityY + 1;
    
    if (bg.y >500 ){
       bg.y = 250;
      }
   if(player.isTouching(villain)){
       villain.destroy();
     }
   player.collide(platform);
   drawSprites();
}

  