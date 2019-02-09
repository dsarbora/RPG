//              PLAYER CHARACTER CONSTRUCTOR AND METHODS
function Player(name, hp, damage, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, inCombat, quest, isFortified, takeDamageMultiplier, location, previousLocations){
  this.name = name,
  this.hp = hp,
  this.damage = damage,
  this.strength = strength,
  this.dexterity = dexterity,
  this.intelligence = intelligence,
  this.courage = courage,
  this.swordsmanship = swordsmanship,
  this.tactics = tactics,
  this.hiding = hiding,
  this.weapon = [bareHands],
  this.inventory = [],
  this.inCombat = !!inCombat,
  this.quest = !!quest,
  this.isFortified = !!isFortified,
  this.takeDamageMultiplier = 1;
  this.location = 0,
  this.previousLocations = []
};

Player.prototype.getName = function(){
  event.preventDefault();
  var name = $("#userName").val();
  player.name = (name);
  $("#preGameScreen").hide();
  $("#gameScreen").fadeIn();
  game.displayAll();
}

Player.prototype.hit = function(target){
  target.takeDamage(this.damage);
};

Player.prototype.FIGHT = function(opponent){
  this.inCombat = true;
  this.hit(opponent);
  console.log("You hit the monster for " + this.damage + " leaving him with " + opponent.hp + " hp");
  if(!opponent.isDead()){
    opponent.hit(this);
    console.log("The monster swings for " + opponent.damage + ". You have " + this.hp + "hp.");
    this.isDead();
  }
  else{
    opponent.dropLoot();
    game.displayWinScreen();
  }
game.displayAll()
};

Player.prototype.fight = function(opponent){
  $("#forwardButton").hide();
  $("#backButton").hide()
  if(map[player.location].monsters[0]){
    this.inCombat = true;
    this.hit(opponent);
    console.log("You hit the monster for " + this.damage + " leaving him with " + opponent.hp + " hp");
    if(!opponent.isDead()){
      opponent.hit(this);
      console.log("The monster swings for " + opponent.damage + ". You have " + this.hp + "hp.");
      this.isDead();
    }
    else{
      opponent.dropLoot();
      game.displayWinScreen();
    }
  game.displayAll()
  }
  else if(game.playerLocation().friendlies[0]){
    opponent = game.playerLocation().friendlies[0];
    this.inCombat = true;
    this.hit(opponent);
    console.log("You hit the monster for " + this.damage + " leaving him with " + opponent.hp + " hp");
    if(!opponent.isDead()){
      opponent.hit(this);
      console.log("The monster swings for " + opponent.damage + ". You have " + this.hp + "hp.");
      this.isDead();
    }
    else{
      opponent.dropLoot();
      game.displayWinScreen();
    }
  game.displayAll()
  }
  else{
    console.log("You see nothing here to fight");
  }
}


Player.prototype.isDead = function(){
  if(this.hp < 1){
    console.log("You are dead.");
    $("#gameScreen").hide();
    $("#deathScreen").fadeIn();
  }
};

Player.prototype.takeDamage = function(damage){ //  PLAYER TAKE DAMAGE FUNCTION
  this.hp -= (damage * this.takeDamageMultiplier);
  this.displayAll();
};

Player.prototype.heal = function(healing){   //  PLAYER HEALING FUNCTION
  if(this.hp + healing > 100){
    this.hp = 100;
  }
  else{
    this.hp += healing;
  }
  game.displayAll();
};

Player.prototype.flee = function(){     //
  this.takeDamage(5);
  this.move();
};

Player.prototype.displayWeapon = function(){  // DISPLAYS ARMED WEAPON IN HTML
  $("#displayWeapon").text(this.weapon[0].name)
}

Player.prototype.armWeapon = function(weapon){    //  ARM WEAPON, ONE WEAPON AT A TIME
  if(this.weapon[0] == bareHands){
    this.weapon.unshift(weapon);
    this.inventory.shift();
    this.addBonusDamage(weapon);
  }
  else{
    this.changeWeapon(weapon)
  }
  game.displayAll();
};

Player.prototype.changeWeapon = function(weapon){   //  CHANGE WEAPON, GETS CALLED IF WEAPON [] ALREADY HAS AN ITEM - PUSHES CURRENT WEAPON TO INVENTORY
  this.disarmWeapon();
  this.armWeapon(weapon);
};

Player.prototype.disarmWeapon = function(){      //  DISARMS WEAPON, PUSHES TO INVENTORY
  this.loseBonusDamage(this.weapon[0]);
  this.inventory.push(this.weapon[0])
  this.weapon.shift();
  game.displayAll();
};

Player.prototype.giveItem = function(npc){
  if(this.findQuestItem()){
    this.inventory.splice(this.inventory.indexOf(this.findQuestItem()), 1)
    npc.giveItem();
  }
};

Player.prototype.findQuestItem = function(){
  for(var i = 0; i < this.inventory.length; i++){
    if(this.inventory[i].questItem){
      return this.inventory[i];
    };
  };
  return false;
};

Player.prototype.displayAll = function(){
  $("#showName").text(this.name)
  $("#showHitPoints").text(this.hp)
  $("#showStrength").text(this.strength)
  $("#showDexterity").text(this.dexterity)
  $("#showIntelligence").text(this.intelligence)
  $("#showSwordsmanship").text(this.swordsmanship)
  $("#showTactics").text(this.tactics)
  $("#showHiding").text(this.hiding)
  $("#showLocationName").text(game.gameMap[this.location].name)
};

Player.prototype.displayHealthBar = function(){
  $("#HP").text('');
  $("#missingHP").text('');
  this.displayWeapon()
  for(var i = 0; i<100; i++){
    if(this.hp > i){
      $("#HP").append("|");
    }
    else{
      $("#missingHP").append("|");
    };
    $("#HP").removeClass();
    if(this.hp > 50){
      $("#HP").addClass("green");
    }
    else if(this.hp > 30){
      $("#HP").addClass("yellow");
    }
    else{
      $("#HP").addClass("red");
    };
  };
};

Player.prototype.move = function(input){
  this.previousLocations.push(this.location);
  if(input == "forward"){
    if((!game.gameMap[this.location].monsters[0] || game.gameMap[this.location].monsters[0].isDead()) || (this.location == 11 || this.location == 9)){
      this.location ++
    }
    else{
      $("#monsters").text("The " + game.gameMap[this.location].monsters[0].name.toLowerCase() + " blocks your way.");
      return;
    }
  }
  else{
    this.location --
  };
  this.heal(3);
  game.displayAll();  //  game.js line 36
};

Player.prototype.climbUp = function(){
  if(!map[player.location].monsters[0] || game.gameMap[this.location].monsters[0].isDead()){
    player.move("forward");
    player.move("forward");
  }
  else{
    $("#location").text("The " + game.gameMap.monsters[0].name.toLowerCase() + " blocks your way.")
  };
};

Player.prototype.get = function(){
  player.inventory.push(map[player.location].items[0]);
  map[player.location].items.shift();
  game.displayAll();
};

Player.prototype.addBonusDamage = function(item){
  this.damage += item.damage;
};

Player.prototype.loseBonusDamage = function(item){
  this.damage -= item.damage;
};

Player.prototype.useItem = function(item){
  this.heal(item.damage);
  this.inventory.splice(this.inventory.indexOf(item), 1);
  game.displayAll();
};

Player.prototype.findConsumable = function(){
  for(var i = 0; i < this.inventory.length; i++){
    if(this.inventory[i].consumable){
      return this.inventory[i];
    };
  };
};

Player.prototype.rest = function(){
  this.hp = 100;
  $("#location").text("You feel well rested and healthy again.")
  game.displayAll();
};

Player.prototype.look = function(){
  game.displayAll();
  if(game.playerLocation().location == 10){
    $("#forwardButton").show();
    $("#location").append("<br>You move some bushes and see a hidden entrance leading into a cave.");
  };
};

Player.prototype.getFortified = function(){
  this.hp = 100;
  if(!this.isFortified){
    this.takeDamageMultiplier = .5;
  }
  game.displayAll();
}

Player.prototype.sayYes = function (){
  if(this.location == 2){
    this.quest = true;
    $("#yesButton").hide();
    $("#noButton").hide();
    npc.talk("Thank you! I knew someone would come along that I could count on!");
  }
  else if(player.location == 6){
    $("#location").text("You reach down and untie the captive.");
    captive.talk("Thank you!! If you're going to go any further, you'll want to pay my friend a visit at the top of the mountain.");
  };
};

Player.prototype.sayNo = function(){
  if(this.location == 2){
    npc.talk("Some help you are. Take some time to think about it... will you change your mind?");
  }
  else if(this.location == 6){
    captive.talk("I never knew someone to be so unhelpful. Please change your mind?")
  };
};

Player.prototype.talk = function(){
  if(game.playerLocation().friendlies[0] == npc){
    if(!player.quest){
      npc.talk("Help! I've lost my walking stick! Will You help me get it back?");
      $("#yesButton").show();
      $("#noButton").show();
      $("#fightButton").hide();
      $("#talkButton").hide();
    }
    else if(player.quest == "complete"){
      npc.talk("Thank you for your help!!");
    }
    else{
      if(player.findQuestItem().name == "Quarterstaff"){
        player.giveItem(npc);
        npc.talk("This is great! I was using this sword but it's too heavy as a walking stick. Here, you take it instead.")
      }
      else if(player.findQuestItem().name == "walking stick"){
        player.giveItem(npc)
        npc.talk("This is even better than the one I had!")
      }
      else{
        if(player.weapon[0].name == "Quarterstaff"){
          npc.talk("That's fine staff you have in your hands... looks nice and light, much lighter than what I've been using...")
        }
        else if(player.weapon[0].name == "walking stick"){
          npc.talk("That looks just like the one I used to have!")
        }
        else{
        npc.talk("Where's my walking stick?");
        };
      };
    };
  }
  else if(game.playerLocation().friendlies[0] == wizard){
    if(this.weapon[0] == sword || this.inventory.includes(sword)){
    this.getFortified();
    wizard.talk("Take my blessing upon your weapon young warrior, you'll need it for your next fight. And while you're here, why don't you drink from the spring?");
    $("#fightLog").append("Your sword begins to glow.<br><br>")
    $("#fightLog").append("You feel as though you could run through a tree.")
    sword.name = "Glowing sword"
    this.loseBonusDamage(sword);
    sword.damage = 20;
    this.addBonusDamage(sword);
    $("#location").text("The wizard beckons you to drink from a spring and fortify your bones. You do so and feel stronger than ever!")
    }
    else{
      wizard.talk("Bring me a sword, I have a trick or two up my sleeve.")
    }
  }
  else if(game.playerLocation().friendlies[0] == captive){
    captive.talk("Will you please untie me?");
    $("#yesButton").show();
    $("#noButton").show();
  };
};



game.getPlayer();
