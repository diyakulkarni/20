var movingrect ,  fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(100, 200, 50, 50);
  movingrect.shapeColor =("green");

  fixedrect = createSprite(200,200,50,50);

  fixedrect.shapeColor = ("green");
}

function draw() {
  background(0,0,0);  

  movingrect.x = mouseX;

  movingrect.y = mouseY;

 console.log(movingrect.x-fixedrect.x);
 console.log(movingrect.width/2+fixedrect.width/2);

 if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
  fixedrect.x - movingrect.x < movingrect.width/2+ fixedrect.width/2){
   movingrect.shapeColor=("red");
fixedrect.shapeColor=("red");
 }
 else{
  movingrect.shapeColor=("green");
  fixedrect.shapeColor=("green");
 }
  drawSprites();
}