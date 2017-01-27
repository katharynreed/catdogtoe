// define objects

function Game(){
  this.winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this.catPlays = [];
  this.dogPlays = [];
  this.isTurn="";
  this.availableMoves=[1,2,3,4,5,6,7,8,9];
};

Game.prototype.checkWin = function(player){
  var win = false;
  var plays = this[player+"Plays"].valueOf();
  for (i=0;i<this.winConditions.length;i++){
    if (
        ( plays.includes( (this.winConditions[i][0]) )    )&&
        ( plays.includes( (this.winConditions[i][1]) )    )&&
        ( plays.includes( (this.winConditions[i][2]) )    )
        )
    win =true;
  };
  return win;
};

// Function to update game values: add number to array of player moves, remove from available moves

Game.prototype.updateGameValue = function(activespace){
  this[this.isTurn+"Plays"].push(activespace);
  var remove = this.availableMoves.indexOf(activespace);
  this.availableMoves.splice(remove,1);
};



// Strategy function:
// Game.prototype.strategy = function () {
//   var availableMoves = [1,2,3,4,5,6,7,8,9]
//
// // if I have 2 in a row, win
//
// // If opponent has 2 in a row, block win
//
// // if I have fork, make fork
//
// // if opponent has fork, block fork (create 2 in row if possible)
//
// // center
//
// // corner opposite opponents mark
//
// // empty corner
//
// // empty side
//
// };

Game.prototype.togglePlayer = function(){
  if (this.isTurn === "cat"){
    this.isTurn = "dog";
  } else {
    this.isTurn = "cat";
  };
};

Game.prototype.callDraw = function() {
  if (this["catPlays"].length + this["dogPlays"].length === 9 && this.checkWin(this.isTurn) === false) {
    alert ("Cats and Dogs are locked in stalemate.  The struggle continues...");
    $(".show-reset").show();
  }
}


var winStop = function(player) { // stop for win
  if (game.checkWin(player)) {
    $(".space").off();
    $(".reset").show();
      if (player === "cat") {
        alert("Cats win, not that it's a big deal or whatever.")
      } else if (player === "dog") {
        alert("Dog is a Very Good Boy.")
      }
  }
};

var game = new Game;

//font end logic

$("document").ready(function() {

  $(".starterbuttons").click(function(event){
    event.preventDefault();
    if (this.id === "catStart") { // check for bug here
      game.isTurn = "cat"
    } else {
      game.isTurn = "dog"
    }
    $(".starterbuttons").hide();
    $(".show-reset").show();
  });

// click function to advance gameplay: records their play, removes clickable function, marks space, check for win, switches player.
  $(".space").click(function(){
    var spaceNumber = this.id.replace(/[a-z]*/gi,"");
    spaceNumber = parseInt(spaceNumber);
    game.updateGameValue(spaceNumber);
    $(this).off();
    var imgToAdd = game.isTurn + "img" + game[game.isTurn+"Plays"].length;
    $(this).addClass(imgToAdd);
    $(this).text(game.isTurn);
    winStop(game.isTurn);
    game.callDraw();
    game.togglePlayer();
  });
});
