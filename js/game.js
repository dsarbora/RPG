

function Game(characters, gameMap, monsters){
  this.characters = [],
  this.gameMap = [],
  this.monsters = []
}

Game.prototype.createWarrior = function(){
  var warrior = new Character("You", 60, 60, 35, 15, 50, 50, 50, 10);
  this.characters.push(warrior);

}

Game.prototype.addMonster = function(monster){
  this.monsters.push(monster)
}

var game = new Game();
