var newTriwizard;
var getIsoMaze = document.getElementById('isometricMaze');
var ctx = getIsoMaze.getContext('2d');
var harryx = 12;
var harryy = 20;
var dementorx = 11;
var dementory = 9;
var dead;

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
    [1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,4,0,1],
    [1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1],
    [1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1],
    [1,0,1,0,1,0,0,0,2,0,0,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1],
    [1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1],
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

// Maze.prototype._renderBoard = function () {
//   this.maze.forEach(function(row){ console.log(row); });
// };

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
      if(dementorx === i && dementory === j) {
          ctx.drawImage(this.tileGraphics[5], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      }
    }
  }

};


Maze.prototype.moveup = function() {
    if(this.maze[harryx - 1][harryy] === 0 || this.maze[harryx - 1][harryy] === 2) {
        harryx--;
      } else {
          return false;
      }
};

Maze.prototype.movedown = function() {
    if(this.maze[harryx + 1][harryy] === 0 || this.maze[harryx + 1][harryy] === 2) {
      harryx++;
      } else {
          return false;
      }
};

Maze.prototype.moveright = function() {
    if(this.maze[harryx][harryy-1] === 0 || this.maze[harryx][harryy-1] === 2) {
        harryy--;
    } else {
        return false;
    }
};

Maze.prototype.moveleft = function() {
    if(this.maze[harryx][harryy+1] === 0 || this.maze[harryx][harryy+1] === 2) {
        harryy ++;
    } else {
        return false;
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
  ctx.clearRect(0, 0, 1500, 700);
  newTriwizard.drawMap();
  win();
}

document.addEventListener("keydown", moveListeners);


function dementor() {
    var direction = Math.floor(Math.random() * 4) + 1;
          //right
          if(newTriwizard.maze[dementorx][dementory - 1] === 0 && direction === 1) {
              dementory--;
          }
          //left
          else if(newTriwizard.maze[dementorx][dementory + 1] === 0 && direction === 2) {
               dementory++;
          }
          //up
          else if (newTriwizard.maze[dementorx - 1][dementory] === 0 && direction === 3) {
              dementorx--;
          }
          else if (newTriwizard.maze[dementorx + 1][dementory] === 0 && direction === 4) {
              dementorx++;
          }
    if(dementorx === harryx && dementory == harryy) {
        console.log('dead');
        window.clearInterval(dead);
        document.getElementById("lose").style.width = "100%";
    }
    ctx.clearRect(0, 0, 1500, 700);
    newTriwizard.drawMap();
}

function win() {
    if(newTriwizard.maze[harryx][harryy] === 2) {
        console.log('win');
        document.getElementById("win").style.width = "100%";
    }
}


$( document ).ready(function() {
    newTriwizard = new Maze();
    // newTriwizard._renderBoard();
    newTriwizard._loadTiles();
    newTriwizard.drawMap();
    dead = setInterval(dementor, 100);

});
