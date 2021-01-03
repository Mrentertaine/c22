var bullet,wall, thickness
var speed,weight,deformation

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  thickness= random(22,83)
  speed= random(223,321)
  weight= random(30,52)
 bullet= createSprite(700,200,30,10)
 //bullet.shapeColor("white")
  wall= createSprite(1200,200,thickness,800)
  //wall.shapeColor(80,80,80)

}



function draw() {
  background(0);
  bullet.velocityX= - speed

  if (bullet.x - wall.x < bullet.width/2 + wall.width/2)
{bullet.velocityX = 0;
deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
} 
if (deformation > 180)
 { bullet.shapeColor = rgb(255, 0, 0); }
  if (deformation > 10 ) 
  { bullet.shapeColor="green" } 
  if (deformation < 10) 
  { bullet.shapeColor="red"; }
  
 // bullet.collide(wall) 
  drawSprites();
}