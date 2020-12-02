var fixRect,movingRect;

function setup() {
  createCanvas(1200,800);

fixRect=createSprite(100, 400, 50, 80);
fixRect.shapeColor="green";
fixRect.velocityX=+5;
 
movingRect=createSprite(800,400,80,30);
movingRect.shapeColor="green";
movingRect.velocityX=-5;
}

function draw() {
  background(0,0,0); 

 bounce(movingRect,fixRect);

  
   drawSprites();
}

