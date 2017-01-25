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
  this.catPlays = [1,2,3];
  this.dogPlays = [4,5];
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

// define global variables
var board = new Board;
var game = new Game;
// create loop to fill spaces

for(i=1;i<=9;i++) {
  var space = new Space(i);
  board[i] = space;
};




//font end logic

$("document").ready(function() {
  var game = new Game;
  $("#starterbuttons").click(function(event){
    event.preventDefault();
    if (this.id === "CatStart") {
      game.isTurn = "cat"
    } else {
      game.isTurn = "dog"
    }
    $("#starterbuttons").hide();
  });
});
