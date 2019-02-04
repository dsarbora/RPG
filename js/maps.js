
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

MapLocation.prototype.displayExtras = function(){
  $("#fightLog").text('');
  $("#additionalMapFeatures").text('');
  for (var i = 0; i<this.monsters.length; i++){
  $("#fightLog").append(this.monsters[i].name +  ": " + this.monsters[i].hitPoints + "HP" + "<br>");
  $("#additionalMapFeatures").append("A " + this.monsters[i].name + " lurks around you. <br>")
  };



};


MapLocation.prototype.spawnMonster = function(number){
  if (number == 0){
    this.monsters.push(game.monsters[0])
  }
  else if (number == 1){
    this.monsters.push(game.monsters[1]);
  }
  else if (number == 2){
    this.monsters.push(game.monsters[2]);
  }
  else if (number == 3){
    this.monsters.push(game.monsters[3]);
  }
  else if (number == 4){
    this.monsters.push(game.monsters[4]);
  };
  this.displayExtras();
};
