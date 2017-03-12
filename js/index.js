var newTriwizard;
var createRow;
var ctx = document.getElementById('isometricMaze').getContext('2d');

function Maze() {
    this.maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1],
    [1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1],
    [1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1],
    [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1],
    [1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1],
    [1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1],
    [1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1],
    [1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1],
    [1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1],
    [1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];
    this.tileGraphics = [];
}

Maze.prototype._renderBoard = function () {
  this.maze.forEach(function(row){ console.log(row); });
};

Maze.prototype._loadTiles =  function() {
  var tileGraphicsToLoad = ["img/none.png", "img/isohedge.png","img/magic.png"];

    for (var i = 0; i < tileGraphicsToLoad.length; i++) {
      this.tileGraphics[i] = document.createElement("img");
      this.tileGraphics[i].src = tileGraphicsToLoad[i];
    }
};

Maze.prototype._drawMap = function() {
  var harryx = 4;
  var harryy = 0;
  var tileH = 25;
  var tileW = 50;

  var mapX = 700;
  var mapY = 70;
  var drawTile;

  for (var i = 0; i < this.maze.length; i++) {
    for (var j = 0; j < this.maze[i].length; j++) {
      drawTile = this.maze[i][j];
      ctx.drawImage(this.tileGraphics[drawTile], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      if(harryx === i && harryy === j) {
          ctx.drawImage(this.tileGraphics[2], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      }
    }

  }

};




$( document ).ready(function() {
    newTriwizard = new Maze();
    newTriwizard._renderBoard();
    newTriwizard._loadTiles();
    newTriwizard._drawMap();
});
