var newTriwizard;
var getIsoMaze = document.getElementById('isometricMaze');
var ctx = getIsoMaze.getContext('2d');
var harryx = 4;
var harryy = 0;


function Maze() {
    this.maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1],
    [1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1],
    [1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1],
    [1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1],
    [1,0,1,0,1,0,0,4,0,0,0,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,1,1,1,1,0,2,0,1,1,0,0,0,0,1,0,1],
    [1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0],
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
  var tileGraphicsToLoad = ["img/dirt.png", "img/isohedge.png","img/trophy.png", "img/harry.png", "img/goblin.png"];

    for (var i = 0; i < tileGraphicsToLoad.length; i++) {
      this.tileGraphics[i] = document.createElement("img");
      this.tileGraphics[i].src = tileGraphicsToLoad[i];
    }
};

Maze.prototype.drawMap = function() {
  var tileH = 25;
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

    for (var i = 0; i < this.maze.length; i++) {
      for (var j = 0; j < this.maze[i].length; j++) {
          if(harryx === i && harryy === j) {
              if(this.maze[i - 1][j] === 0) {
                  harryx--;
              } else {
                  return false;
              }
          }

      }
    }
};

Maze.prototype.movedown = function() {
    for (var i = 0; i < this.maze.length; i++) {
      for (var j = 0; j < this.maze[i].length; j++) {
          if(this.maze[i+1][j] === 0) {
              harryx++;
          } else {
              return false;
          }
      }
    }
};

Maze.prototype.moveleft = function() {
    for (var i = 0; i < this.maze.length; i++) {
      for (var j = 0; j < this.maze[i].length; j++) {
          if(this.maze[i][j-1] === 0) {
              harryy--;
          } else {
              return false;
          }
      }
    }
};

Maze.prototype.moveright = function() {
    for (var i = 0; i < this.maze.length; i++) {
      for (var j = 0; j < this.maze[i].length; j++) {
          if(harryx === i && harryy === j) {
              if(this.maze[i][j+1] === 0) {
                harryy ++;
              } else {
                return false;
              }
          }
      }
    }
};


function moveListeners (event) {
  event.preventDefault();
  var keys = [37, 38, 39, 40];

  if (keys.indexOf(event.keyCode) < 0)
    return;

  switch (event.keyCode) {
    case 38: newTriwizard.moveup(); console.log(harryx,harryy); break;
    case 40: newTriwizard.moveright(); console.log(harryx,harryy); break;
    case 37: newTriwizard.moveleft(); console.log(harryx,harryy); break;
    case 39: newTriwizard.movedown(); console.log(harryx,harryy); break;
  }
newTriwizard.drawMap();
}

document.addEventListener("keydown", moveListeners);

$( document ).ready(function() {
    newTriwizard = new Maze();
    newTriwizard._renderBoard();
    newTriwizard._loadTiles();
    newTriwizard.drawMap();
    console.log(harryx,harryy);
});
