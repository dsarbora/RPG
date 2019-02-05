var map = game.gameMap;
var character = game.characters[0]

$(function(){
  map[4].spawnMonster(2);
  map[6].spawnMonster(1);
  map[9].spawnMonster(3);
  map[8].spawnMonster(0);
  map[7].spawnMonster(4);

  map[character.location].getExits();

  character.askName();
  $("#gameWrapper").fadeIn();

  $("#location").text(map[character.location].description);

  character.displayAll();
  $("button").hide()
  map[character.location].getExits();
  map[character.location].displayExtras();

  $("#backButton").click(function(){
    character.move();
  });


  $("#forwardButton").click(function(){
    character.move("forward");
  });

  $("#climbDownButton").click(function(){
    character.move();
    character.move();
  });


  $("#climbUpButton").click(function(){
    character.move("forward");
    character.move("forward");
  });

  $("#fightButton").click(function(){
    character.fight(map[character.location].monsters[0]);
  });
});
