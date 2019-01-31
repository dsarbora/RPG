function Character(name, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, location){
this.name = name,
this.strength = strength,
this.dexterity = dexterity,
this.intelligence = intelligence,
this.courage = courage,
this.swordsmanship = swordsmanship,
this.tactics = tactics,
this.hiding = hiding,
this.weapon = []
this.inventory = []
this.location = location
};

Character.prototype.fight = function(){     //
  var hitChance = this.swordsmanship;
  var critChance = this.tactics;

};

Character.prototype.run = function(){     //

};

Character.prototype.changeWeapon = function(){   //

};

Character.prototype.move = function(){   //
  if(forward){
  this.location ++

  }
  else{
    this.location --

  }
}
