function Maze() {
    this.maze = [
    [1,1,1,1,1,1,1,1],
    [1,null,null,null,null,null,null,1],
    [1,null,null,null,null,null,null,1],
    [1,null,null,null,null,null,null,1],
    [1,null,null,null,null,null,null,1],
    [1,null,null,null,null,null,null,1],
    [1,null,null,null,null,null,null,1],
    [1,1,1,1,1,1,1,1],
    ];
}

Maze.prototype._renderBoard = function () {
  this.maze.forEach(function(row){ console.log(row); });
};

var newTriwizard;
var createRow;

Maze.prototype._createMaze = function() {
    for(var i = 0; i < this.maze.length; i++) {
        for(var j = i+1; j < this.maze.length; j++) {
            if(this.maze[i][1] === 1) {

               createRow = document.createElement('div');
               createRow.className = 'row';
               $('#maze').append(createRow);

               createCol = document.createElement('div');
               createCol.className = 'col-sm-7 column';
               $('.row').append(createCol);
            }

        }
     }
};

Maze.prototype._addHedges = function () {
    for(var i = 0; i < this.maze.length; i++) {
        for(var j = i+1; j < this.maze.length; j++) {
            if(this.maze[i][j] === 1) {
                $('.column').append('<img src="img/hedge.png"/>');
            }
        }
    }
};


$( document ).ready(function() {
    newTriwizard = new Maze();
    newTriwizard._renderBoard();
    for(var i = 0; i < newTriwizard.maze.length; i++) {
        for(var j = i+1; j < newTriwizard.maze.length; j++) {
         if(newTriwizard.maze[i][1] === 1) {
            createRow = document.createElement('div');
            createRow.className = 'row';
            $('#maze').append(createRow);
            }
        }
     }
});
