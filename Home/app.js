//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face
var mr_dragon; //this is global variable

function preload() {
  //mr_dragon = loadImage("./dragon.png");
}

function setup() {
  createCanvas(800,800);
  background(1,136,163,300);
  fill(222,0,93,300);}

function draw(){
  //keep on keeping on = infinite loop

  ellipse(mouseX, mouseY, 7+(1/5000*mouseX*mouseY), 7+(1/5000*mouseX*mouseY));
  //line(mouseX, mouseY,1000-mouseX,1000-mouseY)
}

function mouseClicked() {

    ellipse(mouseX,mouseY,60,60)
  //image(mr_dragon,mouseX,mouseY,100,100);
}
