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
}

// define global variables
var winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var catPlays = [1,2,3];
var dogPlays = [4,5];
var board = new Board;

// create loop to fill spaces

for(i=1;i<=9;i++) {
  var space = new Space(i);
  board[i] = space;
};


// create game functions

// Check win conditions: track cat and dog plays, check each against array of win conditions.

var checkWin = function(playsArray) {
  var win = false;
  for (i=0;i<3;i++){
    if (    (playsArray.includes(winConditions[i][0]))&&(playsArray.includes(winConditions[i][1]))&&(playsArray.includes(winConditions[i][2]))  ) 
    win =true;
  };
  return win;
};





//font end logic
