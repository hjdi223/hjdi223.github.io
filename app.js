//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face
function FunnyFace(x,y){
  stroke(0,0,0,255);
  fill(199,0,100,255);
  ellipse(x, y, 60, 60);

  line(x-30,y+5,x+29,y+5)
  line(x-30,y-5,x+29,y-5)
  line(x-5,y-30,x-5,y+29)
  line(x+5,y-30,x+5,y+29)


  ellipse(x+25,y+35, 30, 30);
}

function setup() {
  createCanvas(600,600);
  background(0,167,201,200); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){
      for(var y=0;y<8;y++){   //play with modulo operator
        FunnyFace(1+x*80, y*80);

    }
}
}
