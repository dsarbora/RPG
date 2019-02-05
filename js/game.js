

function Game(characters, monsters, gameMap){
  this.characters = [],
  this.monsters = [],
  this.gameMap = []
}

Game.prototype.getPlayer = function(){
  var warrior = new Character("You", 60, 25, 60, 35, 15, 50, 50, 50, 10);
  this.characters.push(warrior);
};

Game.prototype.getMonster = function(monster){
  this.monsters.push(monster);
};

Game.prototype.getMap = function(mapLocation){
  this.gameMap.push(mapLocation);
};

Game.prototype.isDead = function(){
  $("#gameScreen").hide();
  $("#deathScreen").fadeIn();
}

//========================================================
var game = new Game();
