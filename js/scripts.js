

var map = [];

function MapLocation(name, description, location, items, monsters){
  this.name = name,
  this.description = description,
  this.location = location,
  this.items = [],
  this.monsters = []
}
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
function Monster(name, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, location){
  this.name = name,
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
function Character(name, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, location, previousLocations){
  this.name = name,
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
}

Character.prototype.move = function(){   //       !!! NEEDS A BUTTON ON THE PAGE TO GIVE AN ID FOR FORWARD, NO ID NEEDED FOR BACK- STATEMENT WILL READ IF(ID)
  if(){
  this.location ++

  }
  else{
    this.location --

  }
}
