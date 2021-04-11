class Paper extends base{
    constructor(x,y,width,height){
      super(x,y,50,50);
      this.image = loadImage("paper.png");
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }