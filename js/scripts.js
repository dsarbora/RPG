function Game(characters, gameMap){
  this.characters = [],
  this.gameMap = []
}

Game.prototype.createWarrior = function(){
  var warrior = new Character("You", 60, 60, 35, 15, 50, 50, 50, 10);
  this.characters.push(warrior);

}

var game = new Game();

function MapLocation(name, description, location, items, monsters, exits){
  this.name = name,
  this.description = description,
  this.location = location,
  this.items = [],
  this.monsters = [],
  this.exits = []
}

MapLocation.prototype.addMapLocation = function (){
    game.gameMap.push(this);
};

var city1 = new MapLocation ("Citadel", "You are standing in a large town square. All around people are cheering for you.", 0);
var city2 = new MapLocation ("City Limits", "Behind you is a large gate leading into town. Two large guards stand on either side of the path. Ahead a well established trail leads into the forest.", 1);
var forest1 = new MapLocation ("Forest Path", "You are standing in a forest. To the west is the village, ahead the forest thickens. ", 2);
var forest2 = new MapLocation ("Dense Forest", "You make your way into the dense forest. An east-west path", 3);
var forest3 = new MapLocation ("Forest Clearing", "Here is a forest clearing.", 4);
var riverCrossing = new MapLocation ("River", "There is a river to cross.", 5);
var footHills1 = new MapLocation ("Foothills", "The forest trail appears less worn as the land begins to slope upward ahead.", 6);
var footHills2 = new MapLocation ("Mountain Viewpoint", "You stand in awe of the size of the mountain in front of you. A vast upward sloping field lies ahead and a majestic mountain peak reveals itself from behind a hill.", 7);
var mountainBase = new MapLocation ("Base of Mountain", "You stand at the shore of an alpine lake and admire the severity of the surrounding ridges. You see an opening in the rocks behind a waterfall that feeds the lake", 8);
var mountainInterior1 = new MapLocation ("Mountain Cave", "You are standing in a massive cave that smells of rotting flesh. You can see a flickering firelight in the distance, but you'll have to climb to get there.", 9);
var mountainLedge = new MapLocation ("Mountain Ledge", "You admire the beauty of the valley below from a ledge halfway up the mountain. You think you see a way to climb up.", 10)
var mountainInterior2 = new MapLocation("Lair of the Dragon" , "Bones are strewn throughout this great hall, and a large fire burns in the center.", 11)
var mountainTop = new MapLocation("Top of the mountain", "You look down on the clouds from the top of the mountain and feel strangely invigorated.", 12);

city1.addMapLocation();
city2.addMapLocation();
forest1.addMapLocation();
forest2.addMapLocation();
forest3.addMapLocation();
riverCrossing.addMapLocation();
footHills1.addMapLocation();
footHills2.addMapLocation();
mountainBase.addMapLocation();
mountainInterior1.addMapLocation();
mountainLedge.addMapLocation();
mountainInterior2.addMapLocation();
mountainTop.addMapLocation();


//              WEAPON CONSTRUCTOR AND METHODS
function Weapon(name, magic, base, bonus, speed, slayer){
  this.name = name,
  this.magic = magic
  this.base = base,
  this.bonus = bonus,
  this.speed = speed,
  this.slayer = slayer
}
//              ARMOR CONSTRUCTOR AND METHODS
function Armor(name, rating, dexPenalty){
  this.name = name,
  this.rating = rating,
  this.dexPenalty = dexPenalty
}
//             HEALING ITEM CONSTRUCTOR AND METHODS
function Item(name, number, healing){
  this.name = name,
  this.number = number,
  this.healing = healing
}
//              MONSTER CONSTRUCTOR AND METHODS
function Monster(name, hitPoints, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, location){
  this.name = name,
  this.hitPoints = hitPoints,
  this.strength = strength,
  this.dexterity = dexterity,
  this.intelligence = intelligence,
  this.courage = courage,
  this.swordsmanship = swordsmanship,
  this.tactics = tactics,
  this.hiding = hiding,
  this.weapon = [],
  this.inventory = [],
  this.location = location
};

//              PLAYER CHARACTER CONSTRUCTOR AND METHODS
function Character(name, hitPoints, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, location, previousLocations){
  this.name = name,
  this.hitPoints = hitPoints,
  this.strength = strength,
  this.dexterity = dexterity,
  this.intelligence = intelligence,
  this.courage = courage,
  this.swordsmanship = swordsmanship,
  this.tactics = tactics,
  this.hiding = hiding,
  this.weapon = [],
  this.inventory = [],
  this.location = 0,
  this.previousLocations = previousLocations
};

Character.prototype.fight = function(){     //
  var hitChance = this.swordsmanship;
  var critChance = this.tactics;
};

Character.prototype.takeDamage = function(){ //

};

Character.prototype.run = function(){     //

};

Character.prototype.armWeapon = function(weapon){    //    ARM WEAPON, ONE WEAPON AT A TIME
  if(!this.weapon[0]){
    this.weapon.unshift(weapon);
  }
  else{
    this.changeWeapon(weapon)
  }
}
Character.prototype.changeWeapon = function(weapon){   //    CHANGE WEAPON, GETS CALLED IF WEAPON [] ALREADY HAS AN ITEM - PUSHES CURRENT WEAPON TO INVENTORY
  this.inventory.push(this.weapon[0]);
  this.weapon.shift();
  this.weapon.unshift(weapon);
};

Character.prototype.disarmWeapon = function(){       //DISARMS WEAPON, PUSHES TO INVENTORY
  this.inventory.push(this.weapon[0])
  this.weapon.shift();
};

Character.prototype.displayAll = function(){
  $("#showName").text(this.name)
  $("#showHitPoints").text(this.hitPoints)
  $("#showStrength").text(this.strength)
  $("#showDexterity").text(this.dexterity)
  $("#showIntelligence").text(this.intelligence)
  $("#showSwordsmanship").text(this.swordsmanship)
  $("#showTactics").text(this.tactics)
  $("#showHiding").text(this.hiding)
  $("#showLocationName").text(game.gameMap[this.location].name)

};

Character.prototype.askName = function(){
  this.name = prompt("What is your name traveller?");
}

/*Character.prototype.move = function(){   //       !!! NEEDS A BUTTON ON THE PAGE TO GIVE AN ID FOR FORWARD, NO ID NEEDED FOR BACK- STATEMENT WILL READ IF(ID)
  if(){
  this.location ++

  }
  else{
    this.location --

  }
}*/
game.createWarrior()
$(function(){

  var map = game.gameMap;
  var character = game.characters[0]

  character.askName();
  $("#location").text(map[character.location].description);
  character.displayAll();
  $("#backButton").click(function(){
    event.preventDefault();
    character.location --;
    $("#location").text(map[character.location].description);
    character.displayAll();
  });

  $("#forwardButton").click(function(){
    event.preventDefault();
    character.location ++;
    $("#location").text(map[character.location].description);
    character.displayAll();
  });
});
