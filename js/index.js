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
