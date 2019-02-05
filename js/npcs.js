//              MONSTER CONSTRUCTOR AND METHODS

function Monster(name, hp, damage, location){
  this.name = name,
  this.hp = hp,
  this.damage = damage,
  this.location = location
};

Monster.prototype.hit = function(target){
  target.takeDamage(this.damage);
}
Monster.prototype.takeDamage = function(damage){
  this.hp -= damage;
}
Monster.prototype.checkDead = function(){
  if(this.hp < 1){
    console.log("The monster is dead.");
    $("#fight").hide();
    return true;
  }
  else{
    return false;
  }
}

var caveRat = new Monster("cave rat", 17, 4);
var troll = new Monster("troll", 83, 15);
var ogre = new Monster("ogre", 64, 18);
var skeleton = new Monster("skeleton", 35, 9);
var ogreLord = new Monster("ogre lord", 109, 28);
game.getMonster(caveRat);
game.getMonster(troll);
game.getMonster(ogre);
game.getMonster(skeleton);
game.getMonster(ogreLord);
