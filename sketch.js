var destroyer1,destroyer2,destroyer3,destroyer4,destroyer5;
var ocean;

var oceanImg;
var destroyer1Img,destroyer2Img,destroyer3Img,destroyer4Img,destroyer5Img;

function preload(){

  destroyer1Img = loadImage("Destroyer1.png");
  destroyer2Img = loadImage("Destroyer2.png");
  destroyer3Img = loadImage("Destroyer3.png");
  destroyer4Img = loadImage("Destroyer4.png");
  destroyer5Img = loadImage("Destroyer5.png");
  oceanImg = loadImage("OceanBackground.png");
}

function setup() {
  createCanvas(1500,800);

  destroyer1 = createSprite(200,130);
  destroyer1.addImage("destroyer1",destroyer1Img);
  destroyer1.scale = 0.4;
  
  destroyer5 = createSprite(300,320);
  destroyer5.addImage("destroyer5",destroyer5Img);
  destroyer5.scale = 0.4;

  destroyer2 = createSprite(650,500);
  destroyer2.addImage("destroyer2",destroyer2Img);
  destroyer2.scale = 0.6; 
  
  destroyer3 = createSprite(720,100);
  destroyer3.addImage("destroyer3",destroyer3Img);
  destroyer3.scale = 0.3; 

  destroyer4 = createSprite(950,300);
  destroyer4.addImage("destroyer4",destroyer4Img);
  destroyer4.scale = 0.3;
 

}


function draw() {
  
   background(oceanImg);
 

drawSprites();
 

  
}