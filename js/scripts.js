var map = game.gameMap;
var player = game.players[0];
map[4].spawnMonster(0);
map[6].spawnMonster(1);
map[7].spawnMonster(2);
map[9].spawnMonster(3);
map[11].spawnMonster(4)
map[5].spawnItem(4);
map[7].spawnItem(4);
map[2].spawnFriendly(0);
map[12].spawnFriendly(1);
map[6].spawnFriendly(2);

$(function(){
  $("#startGame").click(function(){
  $("#titleScreen").hide();
  $("#preGameScreen").fadeIn();
});

$("#nameForm").submit(function(){
  event.preventDefault();
  var name = $("#userName").val();
  player.name = (name);
  $("#preGameScreen").hide();
  $("#gameScreen").fadeIn();
  game.displayAll();
});

$("#backButton").click(function(){
  player.move();
});

$("#forwardButton").click(function(){
  if(!map[player.location].monsters[0] || map[player.location].monsters[0].isDead()){
    player.move("forward");
  }
  else{
    $("#location").text("The " + map[player.location].monsters[0].name.toLowerCase() + " blocks your way.")
  }
});

$("#climbDownButton").click(function(){
  player.move();
  player.move();
});

$("#climbUpButton").click(function(){
  if(!map[player.location].monsters[0] || map[player.location].monsters[0].isDead()){
    player.move("forward");
    player.move("forward");
  }
  else{
    $("#location").text("The " + map[player.location].monsters[0].name.toLowerCase() + " blocks your way.")
  }
});

$("#getButton").click(function(){
  player.get();
});

$("#armButton").click(function(){
  player.armWeapon(player.inventory[0]);
});

$("#disarmButton").click(function(){
  player.disarmWeapon();
});

$("#useButton").click(function(){
  player.useItem(player.findConsumable())
});

$("#fightButton").click(function(){
  $("#forwardButton").hide();
  $("#backButton").hide()
  if(map[player.location].monsters[0]){
    player.fight(map[player.location].monsters[0]);
  }
  else if(map[player.location].friendlies[0]){
    player.fight(map[player.location].friendlies[0]);
  }
  else{
    console.log("You see nothing here to fight");
  }

});

$("#userInputForm").submit(function(){
  game.getUserInput();
});

$("#talkButton").click(function(){
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
    if(player.weapon[0] == sword || player.inventory.includes(sword)){
    player.getFortified();
    wizard.talk("Take my blessing upon your weapon young warrior, you'll need it for your next fight. And while you're here, why don't you drink from the spring?");
    $("#fightLog").append("Your sword begins to glow.<br><br>")
    $("#fightLog").append("You feel as though you could run through a tree.")
    sword.name = "Glowing sword"
    player.loseBonusDamage(sword);
    sword.damage = 20;
    player.addBonusDamage(sword);
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
  }
});

$("#yesButton").click(function(){
  player.sayYes();
});

$("#noButton").click(function(){
  player.sayNo();
});

$("#restButton").click(function(){
  player.rest();
});

$("#lookButton").click(function(){
  player.look();
});

  $("#titleScreen").fadeIn();
});
