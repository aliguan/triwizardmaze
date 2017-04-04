var newTriwizard;
var getIsoMaze = document.getElementById('isometricMaze');
var ctx = getIsoMaze.getContext('2d');
// var harryx = 12;
// var harryy = 20;
var harryx = 8;
var harryy = 7;
function DementorPerson(dementorPosx, dementorPosy) {
    this.x = dementorPosx;
    this.y = dementorPosy;
}
var dementor =  {
    x: 11,
    y: 9,
};
var dementorPosx;
var dementorPosy;
var dead;
var tileH = 28;
var tileW = 50;
var mapX = 700;
var mapY = 70;
var cutout;
var maskCtx;
var maskCanvas;
var radius = 80;
var clicked = false;
var randomY;
var dementors = [];
var lives = 3;


function createDementor() {
    for (i = 0; i < 5; i++) {
        dementorPosx = Math.floor(Math.random() * 19) + 1;
        dementorPosy = Math.floor(Math.random() * 19) + 1;
        dementors[i] = new DementorPerson(dementorPosx, dementorPosy);
    }
}
setTimeout(createDementor,  1000);

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
    [1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1],
    [1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,4,0,1],
    [1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1],
    [1,0,1,0,0,0,0,6,1,1,0,0,0,0,0,1,0,1,1,1],
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
Maze.prototype._loadTiles =  function loadTiles() {
  var tileGraphicsToLoad = ["img/dirt.png", "img/isohedge.png","img/trophy.png", "img/harry.png", "img/goblin.png","img/dementor.png", "img/sphinx.png", "img/stag.png"];
    for (var i = 0; i < tileGraphicsToLoad.length; i++) {
      this.tileGraphics[i] = document.createElement("img");
      this.tileGraphics[i].src = tileGraphicsToLoad[i];
    }
};

Maze.prototype.drawMap = function() {

  var drawTile;
  //Loop through 2D Array

  for (var i = 0; i < this.maze.length; i++) {
    for (var j = 0; j < this.maze[i].length; j++) {
      drawTile = this.maze[i][j];
      //Implement isometric view
      ctx.drawImage(this.tileGraphics[drawTile], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      //Add in Harry Sprite
      if(harryx === i && harryy === j) {
          if(callPatronus === true) {
              ctx.drawImage(this.tileGraphics[7], (i - j) * tileH + mapX - 30, (i + j) * tileH / 2 + mapY - 25);
          }
          ctx.drawImage(this.tileGraphics[3], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      }
      if(dementor.x === i && dementor.y === j ) {
           ctx.drawImage(this.tileGraphics[5], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
       }
      for(k = 0; k < dementors.length; k++) {
          if(dementors[k].x === i && dementors[k].y === j && this.maze[i][j] != 1 && dementors[k].x != harryx && dementors[k].y != harryy ) {
              ctx.drawImage(this.tileGraphics[5], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
          }
      }
    }
  }
  spotlight();
};


Maze.prototype.moveleft = function() {
    if(this.maze[harryx - 1][harryy] != 1 ) {
        harryx--;
      } else {
          return false;
      }
};

Maze.prototype.moveright = function() {
    if(this.maze[harryx + 1][harryy] != 1) {
      harryx++;
      } else {
          return false;
      }
};

Maze.prototype.moveup = function() {
    if(this.maze[harryx][harryy-1] != 1) {
        harryy--;
    } else {
        return false;
    }
};

Maze.prototype.movedown = function() {
    if(this.maze[harryx][harryy+1] != 1) {
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
  // fluffy();
  sphinx();
  win();
}

document.addEventListener("keydown", moveListeners);


function moveDementor() {
    for(i = 0; i < dementors.length; i ++) {
    var direction = Math.floor(Math.random() * 4) + 1;
          //right

          if(newTriwizard.maze[dementors[i].x][dementors[i].y - 1] != 1 && direction === 1) {
              dementors[i].y--;
          }
          //left
          else if(newTriwizard.maze[dementors[i].x][dementors[i].y + 1] != 1 && direction === 2) {
               dementors[i].y++;
          }
          //up
          else if (newTriwizard.maze[dementors[i].x - 1][dementors[i].y] != 1 && direction === 3) {
              dementors[i].x--;
          }
          else if (newTriwizard.maze[dementors[i].x + 1][dementors[i].y] != 1 && direction === 4) {
              dementors[i].x++;
          }

          if(dementors[i].x === harryx && dementors[i].y === harryy) {
             lose();
          }
    }
    ctx.clearRect(0, 0, 1500, 700);
    newTriwizard.drawMap();
}

function moveHardCodedDementor() {
    var direction = Math.floor(Math.random() * 4) + 1;

    if(newTriwizard.maze[dementor.x][dementor.y - 1] != 1 && direction === 1) {
        dementor.y --;
    }
    else if (newTriwizard.maze[dementor.x][dementor.y + 1] != 1 && direction === 2)
    {
        dementor.y++;
    }
    else if (newTriwizard.maze[dementor.x - 1][dementor.y] != 1 && direction === 3) {
        dementor.x--;
    }
    else if (newTriwizard.maze[dementor.x + 1][dementor.y] != 1 && direction === 4) {
        dementor.x ++;
    }

    if(dementor.x === harryx && dementor.y === harryy) {
        lose();
    }
    ctx.clearRect(0, 0, 1500, 700);
    newTriwizard.drawMap();
}

function win() {
    if(newTriwizard.maze[harryx][harryy] === 2) {
        console.log('win');
        document.getElementById("win").style.width = "100%";
        playVid();
    }
}

function playVid() {
    var video = document.getElementById('bgvid');
    video.play();
}
function lose () {
    if(callPatronus === true) {
        return;
    } else if (callPatronus === false) {
        lives--;
        if(lives === 2) {
            document.getElementById('heart1').style.display = "none";
        }
        else if(lives === 1) {
            document.getElementById('heart2').style.display = "none";
        }
        else if (lives === 0) {
          document.getElementById('heart3').style.display = "none";
          document.getElementById('lose').style.width = "100%";
          window.clearInterval(dead);
          window.clearInterval(deadagain);
        }
    }
}

function fluffy() {
    if(newTriwizard.maze[harryx][harryy] === 4 ) {
        console.log('dog');
        document.getElementById("fluffy").style.width = "100%";
        movingArrows();
    }
}





function spotlight() {
    maskCanvas = document.createElement('canvas');
    // Ensure same dimensions
    maskCanvas.width = getIsoMaze.width;
    maskCanvas.height = getIsoMaze.height;
    maskCtx = maskCanvas.getContext('2d');

   // This color is the one of the filled shape
    maskCtx.fillStyle = "#121212";
    // Fill the mask
    maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
    // Set xor operation
    maskCtx.globalCompositeOperation = 'xor';


    // draw shape you wanna take out
    cutout = maskCtx.arc((harryx - harryy) * (tileH - 2) + mapX,(harryx + harryy) * (tileH + 1.5) / 2 + mapY, radius, 0, 2 * Math.PI);

    maskCtx.fill();
    // Draw mask on the image, and done !
    ctx.drawImage(maskCanvas, 0, 0);
    shrink();
}

function shrink() {
    if(clicked === true) {
        radius = 170;
        clicked = false;
        decreaseRadius = setInterval(function() {
             radius -= 10;
             if(radius === 80) {
                window.clearInterval(decreaseRadius);
             }
        }, 700);
    }
}




$( document ).ready(function() {
    // $.getScript("js/threedog.js");
    newTriwizard = new Maze();
    newTriwizard._loadTiles();
    // newTriwizard._renderBoard();
    newTriwizard.drawMap();
    dead = setInterval(moveDementor, 300);
    deadagain = setInterval(moveHardCodedDementor, 100);
});
