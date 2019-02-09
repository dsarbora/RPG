//              MONSTER CONSTRUCTOR AND METHODS

function Monster(name, damage, hp, description, action, location){
  this.name = name,
  this.damage = damage,
  this.hp = hp,
  this.description = monsterDescriptions[Math.floor(Math.random()*monsterDescriptions.length)]
  this.action = monsterActions[Math.floor(Math.random()*monsterActions.length)]
  this.location = location
};

Monster.prototype.getHP = function(){
  for(var i = 0; i < monsterBaseHP.length; i++){
    if(this.name == monsterBaseHP[i][0]){
      this.hp = monsterBaseHP[i][1];
      this.hp += Math.floor(Math.random()*monsterBonusHP[i][1]);
      break;
    };
  };
};

Monster.prototype.hit = function(target){
  target.takeDamage(this.damage);
}
Monster.prototype.takeDamage = function(damage){
  this.hp -= damage;
}
Monster.prototype.isDead = function(){
  if(this.hp < 1){
    console.log("The monster is dead.");
    $("#fightButton").hide();
    game.players[0].inCombat = false;
    return true;
  }
  else{
    return false;
  }
}

Monster.prototype.dropLoot = function(){
  if(game.playerLocation().location == 4){
    if(player.quest == true){
      game.playerLocation().spawnItem(2);
    }
    else{
      game.playerLocation().spawnItem(3);
    }
  }
  else if(game.playerLocation().monsters[0].name == "Ogre"){
    $("#talkButton").show();
  }
  game.displayAll();
};

Monster.prototype.displayMonster = function(){
  if(this && !this.isDead()){
      $("#fightButton").show();
      $("#fightLog").append(this.name +  ": " + this.hp + "HP" + "<br><br>");
      $("#monsters").append(this.description + this.name.toLowerCase() + this.action + "<br><br>")
  }
  else if(this && this.isDead()){
    $("#fightLog").append(this.name +  ": corpse"  + "<br><br>");
    $("#monsters").append("A " + this.name.toLowerCase() + " is dead. <br><br>")

  }
  //game.displayAll();
};

Monster.prototype.displayMonsterArt = function(){
  if(this && !this.isDead()){
    if(this.name == "Goblin"){
      $("#goblin").show()
    }
    else if(this.name == "Ogre"){
      $("#ogre").show()
    }
    else if(this.name == "Skeleton"){
      $("#skeleton").show()
    }
    else if(this.name == "Golem"){
      $("#golem").show()
    }
    else if(this.name == "Dragon"){
      $("#dragon").show()
    }
  }
  else{
    if(this.name == "Goblin"){
      $("#deadGoblin").show()
    }
    else if(this.name == "Ogre"){
      $("#deadOgre").show()
    }
    else if(this.name == "Skeleton"){
      $("#deadSkeleton").show()
    }
    else if(this.name == "Golem"){
      $("#deadGolem").show()
    }
    else if(this.name == "Dragon"){
      $("#deadDragon").show()
    };
  };
};

var goblin = new Monster("goblin", 18);
var ogre = new Monster("ogre", 15);
var skeleton = new Monster("skeleton", 9);
var golem = new Monster("golem", 17);
var dragon = new Monster("dragon", 40)
game.getMonster(goblin);
game.getMonster(ogre);
game.getMonster(skeleton);
game.getMonster(golem);
game.getMonster(dragon);

function NPC(name, hp, damage, description, action, inventory, location,){
  this.name = name,
  this.hp = hp,
  this.damage = damage,
  this.description = description,
  this.action = action,
  this.inventory = [],
  this.location = location,
  this.friendly = true
};

NPC.prototype.takeDamage = function(damage){
  this.hp -= damage/2;
  console.log(this.name + ": 'Ouch! Why would you do that?''")
  this.friendly = false;
};

NPC.prototype.hit = function(target){
  console.log("Hit message");
  target.takeDamage(this.damage);
};

NPC.prototype.isDead = function(){
  if(this.hp < 1){
    return true;
  }
  else{
    return false;
  };
};

NPC.prototype.displayNPC = function(){
  if(this && !this.isDead()){
      //$("#fightButton").show();
      //$("#fightLog").append(this.name);
      $("#monsters").append(this.description + this.name.toLowerCase() + this.action+ "<br><br>")
  }
  else if(this && this.isDead()){
    $("#fightLog").append(this.name +  ": corpse"  + "<br><br>");
    $("#monsters").append("A " + this.name.toLowerCase() + " is dead. <br><br>")
  }
};

NPC.prototype.giveItem = function(){
  game.players[0].inventory.unshift(this.inventory[0])
  this.inventory.shift()
  game.players[0].quest = "complete";
  game.displayAll();
}

NPC.prototype.talk = function(output){
  $("#monsters").text(this.name + ": " +output);
}


var npc = new NPC("Crone", 100, 5, "A haggard old ", " waves you to come over.");
var wizard = new NPC("Wizard", 100, 5, "What appears to be a ", " greets you at the mountain top.");
var captive = new NPC("Captive", 100, 5, "A ", " lies tied up behind the ogre.");
npc.inventory.push(sword);
npc.location = 3;
wizard.location = 12;
game.getFriendly(npc);
game.getFriendly(wizard);
game.getFriendly(captive);
