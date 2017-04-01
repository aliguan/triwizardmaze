var width = 90;
var expectowidth = 90;
var callPatronus = false;
var keypress = false;

document.getElementById('lighten', 'expecto').className += " disable";
lumosInterval = setInterval(lumos, 1000);

function domLumos() {
    clicked = true;
    keypress = true;
    document.getElementById('lumos').className -= "hvr-pulse";
    document.getElementById('lighten').className += " disable";
    spotlight();
    width = 10;
    document.getElementById('lighten').style.width = width + '%';
    lumosInterval = setInterval(lumos, 2000);

}

function lumos() {
        document.getElementById('lighten').style.width = width + '%';
        width += 10;

        if(document.getElementById('lighten').style.width === "100%") {
            document.getElementById('lighten').className -= " disable";
            document.getElementById('lumos').className += " hvr-pulse";
            document.getElementById('lighten').addEventListener('click', domLumos);
            window.addEventListener('keydown', function(e) {
               if(e.keyCode === 76) {
                   domLumos();
                   keypress = false;
                   
               }
           });
            window.clearInterval(lumosInterval);
       }
}

expectoInterval = setInterval(expecto, 500);

function expecto() {
        document.getElementById('shield').style.width = expectowidth + '%';
        expectowidth += 10;

        if(document.getElementById('shield').style.width === "100%") {
            document.getElementById('shield').className -= " disable";
            document.getElementById('expecto').className += " hvr-pulse";
            document.getElementById('shield').onclick = function() {
               callPatronus = true;
               patronus();
               document.getElementById('expecto').className -= "hvr-pulse";
               document.getElementById('shield').className += " disable";
               expectowidth = 10;
               document.getElementById('shield').style.width = expectowidth + '%';
               expectoInterval = setInterval(expecto, 500);
           };
            window.clearInterval(expectoInterval);
       }
}

function patronus() {
    if(callPatronus === true) {
        newTriwizard.drawMap();
        setTimeout(function () {
            callPatronus = false;
            newTriwizard.drawMap();
        }, 5000 );

    }
}
