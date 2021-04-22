var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  
  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor="grey";

  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
}


function draw() {
background("black"); 
if (hasCollided(bullet,wall)) {
  bullet.velocityX=0;
    var damage=0.5 * speed * speed/(thickness * thickness * thickness);
  
    if (damage>10) {
      wall.shapeColor=color("green");
    }
  
    if(damage<10){
      wall.shapeColor=color("red");
    }
  }
  
   //hasCollided();
  

  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
  return false;
}




