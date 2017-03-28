//FLUFFY

var fluffycanvas = document.getElementById('dancefluffy');
var fluffyctx = fluffycanvas.getContext('2d');
var loadimgs = [];
var speed;
var distance;
var randomNums;
var arrowUp;

function loadArrows() {
    var arrows = ['img/up.png', 'img/down.png', 'img/right.png', 'img/left.png'];
    for (var i = 0; i < arrows.length; i++) {
        loadimgs[i] = document.createElement('img');
        loadimgs[i].src = arrows[i];
    }
}
loadArrows();

//Generate random distance and speed of Arrow to move in Fluffy game
randomNums = setInterval(function() {
    speed = Math.floor(Math.random()*(10 - 1 + 1 ) + 1);
    distance = Math.floor(Math.random()*(600 - 300+1)+ 300);
for(i = 0; i < 50; i ++) {
    if (distance - (speed * i) === 50) {
        console.log(speed, distance);
        console.log('divisible');
        arrowUp = {
            x: 0,
            y: distance,
        };
        window.clearInterval(randomNums);
        console.log(arrowUp.y);
        console.log(i);
        }
    }
}, 50);

function drawArrows() {
    fluffyctx.drawImage(loadimgs[0], 0, 100, 200, 200);
    fluffyctx.drawImage(loadimgs[1], 275, 100, 200, 200);
    fluffyctx.drawImage(loadimgs[2], 570, 100, 200, 200);
    fluffyctx.drawImage(loadimgs[3], 850, 100, 200, 200);
}


function movingArrows() {
    console.log(arrowUp.y);
    arrowUp.y -= speed;
    fluffyctx.setTransform(1,0,0,1,arrowUp.x, arrowUp.y);
    fluffyctx.drawImage(loadimgs[0], arrowUp.x, arrowUp.y, 200, 200);
    if(arrowUp.x === 0 && arrowUp.y === 50) {
        console.log('hi');
        return;
    }
    window.requestAnimationFrame(movingArrows);

}

$( document ).ready(function() {
    drawArrows();

});
