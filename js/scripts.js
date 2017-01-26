// define objects
function Player(mark,img,message) {
  this.mark = mark;
  this.img = img;
  this.message= message;
};

function Space(coordinate) {
  this.coordinate = coordinate;
  this.myMark = "";
  this.myImage = "";
};

function Board() {
  this.space1;
  this.space2;
  this.space3;
  this.space4;
  this.space5;
  this.space6;
  this.space7;
  this.space8;
  this.space9;
};

function Game(){
  this.winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this.catPlays = [];
  this.dogPlays = [];
  this.isTurn="";
};

Game.prototype.checkWin = function(player){
  var win = false;
  for (i=0;i<this.winConditions.length;i++){
    if (
        ( (this[player+"Plays"][i]) === (this.winConditions[i][0])     )&&
        ( (this[player+"Plays"][i+1]) === (this.winConditions[i][1])     )&&
        ( (this[player+"Plays"][i+2]) === (this.winConditions[i][2])     )
        )
    win =true;
  };
  return win;
};
var game = new Game;

// define global variables
// var board = new Board;
// var game = new Game;
// create loop to fill spaces

// for(i=1;i<=9;i++) {
//   var space = new Space(i);
//   board[i] = space;
// };




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
  });

// click function to advance gameplay: records their play, removes clickable function, marks space, check for win, switches player.
  $(".space").click(function(){
    var spaceNumber = this.id.replace(/[a-z]*/gi,"");
    spacenumber = parseInt(spaceNumber);
    var currentPlayer = game.isTurn;
    game[currentPlayer+"Plays"].push(spacenumber);
    $(this).off();
    game.checkWin(currentPlayer);
    // need to stop play here if someone wins
    console.log(game.checkWin("dog"));
    if (currentPlayer === "cat") {
      game.isTurn = "dog"
    } else {
      game.isTurn = "cat"
    }


    console.log(game);

  });
});
