//------COMMON-VARIABLES------------
var map = game.gameMap;
var player = game.players[0];
//----------MONSTERS----------------
map[4].spawnMonster(0);  //  GOBLIN
map[6].spawnMonster(1);  //  OGRE
map[7].spawnMonster(2);  //  SKELETON
map[9].spawnMonster(3);  //  GOLEM
map[11].spawnMonster(4); //  DRAGON
//------------ITEMS------------------
map[5].spawnItem(4);   //  POTION
map[7].spawnItem(4);  //  POTION
//-------------NPC------------------
map[2].spawnFriendly(0);  // CRONE
map[12].spawnFriendly(1);  //  CAPTIVE
map[6].spawnFriendly(2);  //  WIZARD
//---------START------------------
$(function(){
  $("#startGame").click(function(){
  $("#titleScreen").hide();
  $("#preGameScreen").fadeIn();
});

$("#nameForm").submit(function(){
  player.getName()  //  PLAYERS.JS LN 23
});

$("#userInputForm").submit(function(){
  game.getUserInput();
});
//----------MOVEMENT-----------------
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
//---------USE-OF-ITEMS------------
$("#getButton").click(function(){
  player.get();   //  PLAYERS.JS LN 190-194
});

$("#armButton").click(function(){
  player.armWeapon(); //  PLAYERS.JS LN 124-134
});

$("#disarmButton").click(function(){
  player.disarmWeapon();  //  PLAYERS.JS LN 141-146
});

$("#useButton").click(function(){
  player.useItem(player.findConsumable())
});
//---------FIGHT--------------------
$("#fightButton").click(function(){
  player.fight(map[player.location].monsters[0])

});


//-------TALK-TO-NPC-----------------
$("#talkButton").click(function(){
  player.talk();
});

$("#yesButton").click(function(){
  player.sayYes();
});

$("#noButton").click(function(){
  player.sayNo();
});
//----------REST---------------
$("#restButton").click(function(){
  player.rest();
});
//----------LOOK---------------
$("#lookButton").click(function(){
  player.look();
});

$("button").click(function(){
  game.displayAll();
  if(player.isTalking){
    $("#talkButton").hide();
    $("#yesButton").show();
    $("#noButton").show();
  };
});
//----------GAME---------------
$("#titleScreen").fadeIn();
});
