class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1= loadImage("sprites/smoke.png");
    this.trajectory=[];
    // nested array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
    var x1=this.body.position.x
    var y1=this.body.position.y 
    var vel1=this.body.velocity.x
    var pointA=[x1, y1] // element of the array

     if ((x1>200) && (vel1>10) ){

      this.trajectory.push(pointA);
     }


    

    var len = this.trajectory.length;

    for(var i=0; i<len; i++)
{
image (this.image1,this.trajectory[i][0],this.trajectory[i][1]);
}


  }
}
