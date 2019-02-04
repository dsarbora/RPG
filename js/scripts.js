game.createWarrior()
$(function(){

  var map = game.gameMap;
  var character = game.characters[0]

  character.askName();
  $("#location").text(map[character.location].description);
  character.displayAll();
  $("#backButton").click(function(){
    event.preventDefault();
    character.move();
  });

  $("#forwardButton").click(function(){
    event.preventDefault();
    character.move("forward");
  });
});
