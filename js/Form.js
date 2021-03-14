class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
   
    title.html("Car Racing Game");
    title.position(displayWidth/2-80, 0);

    this.input.position(displayWidth/2-80, 160);
    this.button.position(displayWidth/2, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html(" HELLO " + player.name + " ,WAITING FOR OTHERS TO JOIN")
      this.greeting.position(displayWidth/2-200, 100);
    });

  }
}
