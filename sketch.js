var flag=0;
var score=0;
var frogselector=1;
function preload(){
  pondimage=loadImage("pondImage.jpg");
  frogImage=loadImage("frog.png");
  
  
}

function setup() {
  createCanvas(2000,800);
  pond1 = createSprite(1200, 500, 50, 50);
  pond1.addImage(pondimage);
  pond2 = createSprite(400,500,50,50);
  pond2.addImage(pondimage);

  frog1 = createSprite(1300,550,20,20);
  frog1.addImage(frogImage);
  frog1.scale=0.1;

  frog2 = createSprite(1100,550,20,20);
  frog2.addImage(frogImage);
  frog2.scale=0.1;
  
  frog3 = createSprite(1200,500,20,20);
  frog3.addImage(frogImage);
  frog3.scale=0.1;

  frog4 = createSprite(1000,500,20,20);
  frog4.addImage(frogImage)
  frog4.scale=0.1;

  frog5 = createSprite(1400,500,20,20);
  frog5.addImage(frogImage);
  frog5.scale=0.1;

}

function draw() {
  background(255,255,255);
  textSize(20);
  stroke("red")
  strokeWeight(2);
  text("Score:"+  score,1500,50);

if(frog1.x === World.mouseX && frog1.y === World.mouseY || frog2.x === World.mouseX && frog2.y === World.mouseY  ){
  score++;
}
if(frog3.x === World.mouseX && frog3.y === World.mouseY || frog4.x === World.mouseX && frog4.y === World.mouseY || frog5.x === World.mouseX && frog5.y === World.mouseY){
  score+=10;
}
  if(flag===0){
    frog1.velocityY=-15;
    frog2.velocityY=-15;   
    frog3.velocityY=-5;
    frog4.velocityY=-5;
    frog5.velocityY=-5;

  }
  if(frog1.y<250){
    flag=1;
  }
  if(frog2.y<250){
    flag=2;
  }

if(flag===1){
  frog1.velocityY=15;
}
if(flag===2){
  frog2.velocityY=15;
}

if(frog1.y>550||frog2.y>550){
  flag=0;
}

if(frog1.y>500){
  frog1.visible=false;
}
else{
frog1.visible=true;
}
if(frog2.y>500){
  frog2.visible=false;
}
else{
frog2.visible=true;
}
  drawSprites();
}
function mouseDragged(){
  if(World.mouseX<frog1.x+50&&World.mouseX>frog1.x-50){
frogselector=1;
  }
  if(frogselector===1){
    frog1.x=World.mouseX;
    frog1.y=World.mouseY; 
  }
  

  if(World.mouseX<frog2.x+50&&World.mouseX>frog2.x-50){
    frogselector=2; 
  }
  if(frogselector===2){
    frog2.x=World.mouseX;
    frog2.y=World.mouseY; 
  }
  if(World.mouseX<frog3.x+50&&World.mouseX>frog3.x-50){
    frogselector=3; 
  }
  if(frogselector===3){
    frog3.x=World.mouseX;
    frog3.y=World.mouseY; 
  }
  if(World.mouseX<frog4.x+50&&World.mouseX>frog4.x-50){
    frogselector=4; 
  }
  if(frogselector===4){
    frog4.x=World.mouseX;
    frog4.y=World.mouseY; 
  }
  if(World.mouseX<frog5.x+50&&World.mouseX>frog5.x-50){
    frogselector=5; 
  }
  if(frogselector===5){
    frog5.x=World.mouseX;
    frog5.y=World.mouseY; 
  }
}
