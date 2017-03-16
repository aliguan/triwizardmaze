var newTriwizard;
var getIsoMaze = document.getElementById('isometricMaze');
var ctx = getIsoMaze.getContext('2d');
var harryx = 12;
var harryy = 20;


function Maze() {
    // this.maze = [
    // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    // [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
    // [1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1],
    // [1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    // [0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1],
    // [1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1],
    // [1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1],
    // [1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1],
    // [1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1],
    // [1,0,1,0,1,0,0,4,0,0,0,0,1,1,1,1,0,1,0,1],
    // [1,0,0,0,1,1,1,1,0,2,0,1,1,0,0,0,0,1,0,1],
    // [1,1,1,0,0,0,0,1,0,5,0,0,1,0,1,1,1,1,0,1],
    // [1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
    // [1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1],
    // [1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1],
    // [1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1],
    // [1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1],
    // [1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1],
    // [1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
    // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    // ];

    this.maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1],
    [1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1],
    [1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1],
    [1,0,1,0,0,0,0,4,1,1,0,0,0,0,0,1,0,1,1,1],
    [1,0,1,0,1,0,0,0,2,0,0,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1],
    [1,1,1,0,0,0,0,1,0,5,0,0,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1],
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

//Preload images
Maze.prototype._loadTiles =  function() {
  var tileGraphicsToLoad = ["img/dirt.png", "img/isohedge.png","img/trophy.png", "img/harry.png", "img/goblin.png","img/sphinx.png"];
    for (var i = 0; i < tileGraphicsToLoad.length; i++) {
      this.tileGraphics[i] = document.createElement("img");
      this.tileGraphics[i].src = tileGraphicsToLoad[i];
    }
};

Maze.prototype.drawMap = function() {
  var tileH = 28;
  var tileW = 50;

  var mapX = 700;
  var mapY = 70;
  var drawTile;
  //Loop through 2D Array

  for (var i = 0; i < this.maze.length; i++) {
    for (var j = 0; j < this.maze[i].length; j++) {
      drawTile = this.maze[i][j];
      //Implement isometric view
      ctx.drawImage(this.tileGraphics[drawTile], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      //Add in Harry Sprite
      if(harryx === i && harryy === j) {
          ctx.drawImage(this.tileGraphics[3], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      }
    }
  }

};

Maze.prototype.moveup = function() {
    if(this.maze[harryx - 1][harryy] === 0) {
        harryx--;
      } else {
          return;
      }
};

Maze.prototype.movedown = function() {
    if(this.maze[harryx + 1][harryy] === 0) {
      harryx++;
      } else {
          return;
      }
};

Maze.prototype.moveright = function() {
    if(this.maze[harryx][harryy-1] === 0) {
        harryy--;
    } else {
        return;
    }
};

Maze.prototype.moveleft = function() {
    if(this.maze[harryx][harryy+1] === 0) {
        harryy ++;
    } else {
        return;
    }
};


function moveListeners (event) {
  event.preventDefault();
  var keys = [37, 38, 39, 40];

  if (keys.indexOf(event.keyCode) < 0)
    return;

  switch (event.keyCode) {
    case 38: newTriwizard.moveup(); break;
    case 39: newTriwizard.moveright(); break;
    case 37: newTriwizard.moveleft(); break;
    case 40: newTriwizard.movedown(); break;
  }
  console.log(harryx, harryy);
  ctx.clearRect(0, 0, 1500, 700);
  newTriwizard.drawMap();
}

document.addEventListener("keydown", moveListeners);

$( document ).ready(function() {
    newTriwizard = new Maze();
    newTriwizard._renderBoard();
    newTriwizard._loadTiles();
    newTriwizard.drawMap();
});
