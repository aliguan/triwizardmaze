var newTriwizard;
var getIsoMaze = document.getElementById('isometricMaze');
var ctx = getIsoMaze.getContext('2d');
// var harryx = 12;
// var harryy = 20;
var harryx = 7;
var harryy = 18;
function DementorPerson() {
    this.x = dementorPosx;
    this.y = dementorPosy;
}
var dementorPosx = 11;
var dementorPosy = 9;
var dead;
var tileH = 28;
var tileW = 50;
var mapX = 700;
var mapY = 70;
var cutout;
var maskCtx;
var maskCanvas;
var radius = 75;
var clicked = false;
var randomY;

dementor = new DementorPerson();

// function createDementor() {
//
//     for (i = 0; i < 20; i++) {
//         dementorPosx = Math.floor(Math.random() * 19) + 1;
//         dementorPosxy = Math.floor(Math.random() * 19) + 1;
//         dementor = new DementorPerson();
//     }
// }
//

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
  var tileGraphicsToLoad = ["img/dirt.png", "img/isohedge.png","img/trophy.png", "img/harry.png", "img/goblin.png","img/dementor.png", "img/sphinx.png"];
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
          ctx.drawImage(this.tileGraphics[3], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      }
      if(dementor.x === i && dementor.y === j) {
          ctx.drawImage(this.tileGraphics[5], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
      }
    }
  }
  // spotlight();
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
  fluffy();
  sphinx();
  win();
}

document.addEventListener("keydown", moveListeners);


function moveDementor() {
    var direction = Math.floor(Math.random() * 4) + 1;
          //right
          if(newTriwizard.maze[dementor.x][dementor.y - 1] != 1 && direction === 1) {
              dementor.y--;
          }
          //left
          else if(newTriwizard.maze[dementor.x][dementor.y + 1] != 1 && direction === 2) {
               dementor.y++;
          }
          //up
          else if (newTriwizard.maze[dementor.x - 1][dementor.y] != 1 && direction === 3) {
              dementor.x--;
          }
          else if (newTriwizard.maze[dementor.x + 1][dementor.y] != 1 && direction === 4) {
              dementor.x++;
          }
    if(dementor.x === harryx && dementor.y === harryy) {
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
        radius = 150;
        clicked = false;
        decreaseRadius = setInterval(function() {
             radius -= 10;
             if(radius === 70) {
                window.clearInterval(decreaseRadius);
             }
        }, 700);
    }
}


document.getElementById('lumos').onclick = function() {
   clicked = true;
   spotlight();
};



$( document ).ready(function() {
    // $.getScript("js/threedog.js");
    newTriwizard = new Maze();
    newTriwizard._loadTiles();
    // newTriwizard._renderBoard();
    newTriwizard.drawMap();
    dead = setInterval(moveDementor, 100);
    $(document).keydown(function(e) {
        if(e === 75) {
            e.preventDefault();
            $('#win, #lose, #fluffy, #sphinx').style.width = 0;
            console.log('esc');
        }
    });
});
