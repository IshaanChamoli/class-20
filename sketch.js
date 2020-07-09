
var fixedrect ; 
var movingrect;
var rect1, rect2
function setup() {
  createCanvas(800,400);
  
 fixedrect =  createSprite(400, 200, 50, 50) ;
 movingrect = createSprite (200, 200, 50, 30) ;
 rect1 =  createSprite(100, 200, 50, 50) ;
 rect2 =  createSprite(300, 200, 50, 50) ;
 rect1.shapeColor = "yellow";
rect2.shapeColor = "green" ;
rect1.velocityX = 5 ;
rect2.velocityX = -5 ;
}



function draw() {
  background(0);  
movingrect.x = mouseX
movingrect.y = mouseY

movingrect.debug = true ;
fixedrect.debug = true ;

if (

  movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2
  &&
  fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2
  &&
  movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2
  &&
  fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2
) {

movingrect.shapeColor = "red"
fixedrect.shapeColor = "red"
text ("The two boxes ARE touching", 400, 100)

}

else

{
  movingrect.shapeColor = "blue"
fixedrect.shapeColor = "blue"
text ("The two boxes ARE NOT touching", 400, 100)
}


if (

  rect1.x - rect2.x <= rect1.width/2 + rect2.width/2
  &&
  rect2.x - rect1.x <= rect1.width/2 + rect2.width/2
  
) {

rect1.velocityX = rect1.velocityX * (-1) ;
rect2.velocityX = rect2.velocityX * (-1) ;
}

if (

  rect1.y - rect2.y <= rect1.height/2 + rect2.height/2
  &&
  rect2.y - rect1.y <= rect1.height/2 + rect2.height/2
  
) {

  rect1.velocityY = rect1.velocityY * (-1) ;
  rect2.velocityY = rect2.velocityY * (-1) ;
}

drawSprites();
}
