var map = game.gameMap;
var player = game.players[0];
map[4].spawnMonster(0);  //  GOBLIN
map[6].spawnMonster(1);  //  OGRE
map[7].spawnMonster(2);  //  SKELETON
map[9].spawnMonster(3);  //  GOLEM
map[11].spawnMonster(4); //  DRAGON

map[5].spawnItem(4);   //  POTION
map[7].spawnItem(4);  //  POTION

map[2].spawnFriendly(0);  // CRONE
map[12].spawnFriendly(1);  //  CAPTIVE
map[6].spawnFriendly(2);  //  WIZARD

$(function(){
  $("#startGame").click(function(){
  $("#titleScreen").hide();  //  TITLE SCREEN CLICKS TO PREGAME / CHOOSE NAME SCREEN
  $("#preGameScreen").fadeIn();
});

$("#nameForm").submit(function(){
  player.getName()  //  PLAYERS.JS LN 23
});

$("#backButton").click(function(){
  player.move();  //  PLAYERS.JS LN 161-178
});

$("#forwardButton").click(function(){
  player.move("forward");  //
});

$("#climbDownButton").click(function(){
  player.move();  //
  player.move();
});

$("#climbUpButton").click(function(){
  player.climbUp();  //  PLAYERS.JS LN 180-188
});

$("#getButton").click(function(){
  player.get();  //  PLAYERS.JS LN 190-194
});

$("#armButton").click(function(){
  player.armWeapon(player.inventory[0]); //  PLAYERS.JS LN 124-134
});

$("#disarmButton").click(function(){
  player.disarmWeapon();  //  PLAYERS.JS LN 141-146
});

$("#useButton").click(function(){
  player.useItem(player.findConsumable())
});

$("#fightButton").click(function(){
  player.fight(map[player.location].monsters[0])

});

$("#userInputForm").submit(function(){
  game.getUserInput();
});

$("#talkButton").click(function(){
  player.talk();
});

$("#yesButton").click(function(){
  player.sayYes();
});

$("#noButton").click(function(){
  player.sayNo();
});

$("#restButton").click(function(){
  player.rest();
});

$("#lookButton").click(function(){
  player.look();
});

  $("#titleScreen").fadeIn();
});
