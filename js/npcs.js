//              MONSTER CONSTRUCTOR AND METHODS

function Troll(name, hitPoints, damage){
  this.name = "troll",
  this.hitPoints = 85,
  this.damage = 15
}

function Monster(name, hitPoints, damage, location){
  this.name = name,
  this.hitPoints = hitPoints,
  this.damage = damage,
  this.location = location
};

var caveRat = new Monster("cave rat", 17, 4);
var troll = new Monster("troll", 83, 15);
var ogre = new Monster("ogre", 64, 18);
var skeleton = new Monster("skeleton", 35, 9);
var ogreLord = new Monster("ogre lord", 109, 28);
game.addMonster(caveRat);
game.addMonster(troll);
game.addMonster(ogre);
game.addMonster(skeleton);
game.addMonster(ogreLord);
