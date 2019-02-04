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
  this.weapon = ["Bare Hands"],
  this.inventory = [],
  this.location = 0,
  this.previousLocations = previousLocations
};

Character.prototype.fight = function(){     //
  var hitChance = this.swordsmanship;
  var critChance = this.tactics;
};

Character.prototype.takeDamage = function(damage){ //  PLAYER TAKE DAMAGE FUNCTION
  this.hitPoints -= damage;
  this.displayAll();
};

Character.prototype.heal = function(healing){   //  PLAYER HEALING FUNCTION
  if(this.hitPoints + healing > 100){
    this.hitPoints = 100;
  }
  else{
    this.hitPoints += healing;
  }
  this.displayAll();
};

Character.prototype.run = function(){     //

};

Character.prototype.displayWeapon = function(){  // DISPLAYS ARMED WEAPON IN HTML
  $("#displayWeapon").text(this.weapon[0])
}

Character.prototype.armWeapon = function(weapon){    //  ARM WEAPON, ONE WEAPON AT A TIME
  if(this.weapon[0] == "Bare Hands"){
    this.weapon.unshift(weapon);
  }
  else{
    this.changeWeapon(weapon)
  }
  this.displayWeapon();
}
Character.prototype.changeWeapon = function(weapon){   //  CHANGE WEAPON, GETS CALLED IF WEAPON [] ALREADY HAS AN ITEM - PUSHES CURRENT WEAPON TO INVENTORY
  this.inventory.push(this.weapon[0]);
  this.weapon.shift();
  this.weapon.unshift(weapon);
};

Character.prototype.disarmWeapon = function(){       //  DISARMS WEAPON, PUSHES TO INVENTORY
  this.inventory.push(this.weapon[0])
  this.weapon.shift();
  this.displayWeapon();
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
  $("#HP").text('');
  $("#missingHP").text('');
  this.displayWeapon()
  for(var i = 0; i<100; i++){
    if(this.hitPoints > i){
      $("#HP").append("|");
    }
    else{
      $("#missingHP").append("|");
    };
    $("#HP").removeClass();
    if(this.hitPoints > 50){
      $("#HP").addClass("green");
    }
    else if(this.hitPoints > 30){
      $("#HP").addClass("yellow");
    }
    else{
      $("#HP").addClass("red");
    };
  };

};

Character.prototype.askName = function(){
  this.name = prompt("What is your name?");
}

Character.prototype.move = function(input){   //       !!! NEEDS A BUTTON ON THE PAGE TO GIVE AN ID FOR FORWARD, NO ID NEEDED FOR BACK- STATEMENT WILL READ IF(ID)
  if(input == "forward"){
  this.location ++

  }
  else{
    this.location --

  };
  $("#location").text(game.gameMap[game.characters[0].location].description);
  game.gameMap[game.characters[0].location].displayExtras();
  game.characters[0].heal(5);
};
