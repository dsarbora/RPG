

function Game(players, monsters, items, gameMap, friendlies){
  this.players = [],
  this.monsters = [],
  this.items = [],
  this.gameMap = [],
  this.friendlies = []
}
//---------------GAME-GET-----------------
Game.prototype.getPlayer = function(){
  var warrior = new Player("You", 60, 25, 60, 35, 15, 50, 50, 50, 10);
  this.players.push(warrior);
};

Game.prototype.getMonster = function(monster){
  this.monsters.push(monster);
};

Game.prototype.getItem = function(item){
  this.items.push(item);
};

Game.prototype.getMap = function(mapLocation){
  this.gameMap.push(mapLocation);
};

Game.prototype.getFriendly = function(NPC){
  this.friendlies.push(NPC);
};
//------------FIND-PLAYER--------------------
Game.prototype.playerLocation = function(){
  return game.gameMap[player.location];
};
//------------DISPLAY-FUNCTIONS--------------
Game.prototype.clearDisplays = function(){
  $("#monsters").text('')
  $("#fightLog").text('')
  $("#items").text('')
  $(".monsterImg").hide();
  $("button").hide();
}

Game.prototype.displayAll = function(){

  this.clearDisplays();
  $("#startGame").show();
  $("#submitName").show();
  var player = this.players[0]
  var currentLocation = this.playerLocation()

  player.displayAll();
  player.displayHealthBar()
  $("#location").text(currentLocation.description);

  currentLocation.items.forEach(function(item){
    item.displayItem();
  });
  currentLocation.monsters.forEach(function(monster){
    monster.displayMonster();
  });
  currentLocation.friendlies.forEach(function(friendly){
    friendly.displayNPC();
    $("#talkButton").show()
  });
  if(!player.inCombat){
    currentLocation.getExits();
  }
  for (var i = 0; i < player.inventory.length; i++){
    if(player.inventory[i].weapon){
      $("#armButton").show();
      $("#weaponName").text(player.inventory[i].name);
      break;
    }
  };
  for (var i = 0; i < player.inventory.length; i++){
    if(player.inventory[i].consumable){
      $("#useButton").show();
      $("#itemName").text(player.inventory[i].name);
      break;
    }
  };

  if(player.weapon[1]){
    $("#disarmButton").show();
    $("#disarmName").text(player.weapon[0].name);
  };
  if(currentLocation.location == 2 || currentLocation.location == 12){
    $("#talkButton").show();
  }
  $("#inventory").text('')
  for (var i = 0; i < player.inventory.length; i++){
    $("#inventory").append(player.inventory[i].name + "<br>")
  }
  if(currentLocation.rest){
    $("#restButton").show();
  }
  // $("#lookButton").show();
  // if(this.playerLocation().monsters[0]){
  //   this.playerLocation().monsters[0].displayMonsterArt();
  // }
  // $("#backgroundPicture").html(`<img class = 'visual' src = "${this.playerLocation().imgKey}" />`)
};
//-------------WIN-SCREEN-----------------
Game.prototype.displayWinScreen = function(){
  if(this.monsters[4].hp < 1){
    $("#gameScreen").hide();
    $("#winScreen").fadeIn();
  }
}
//-------------GET-USER-INPUT--------------
Game.prototype.getUserInput = function(){
  event.preventDefault();
  var userInput = $("#userInput").val();
  $("#userInput").val('')
  alert(userInput);
}

//========================================================
var game = new Game();
