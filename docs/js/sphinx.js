function sphinx() {
    if(newTriwizard.maze[harryx][harryy] === 6 ) {
        console.log('sphinx');
        document.getElementById("sphinx").style.width = "100%";
        $('.sphinxpicture').css('position','fixed');
        typeRiddle();

    }
}

function typeRiddle() {

        $('.clues, .answer').addClass('hide');
        $(".riddle").typed({
            strings: ["First think of the person who lives in disguise,<br>" + "Who deals in secrets and tells naught but lies.<br> ^1600", "Next, tell me what's always the last thing to mend,<br>" + "The middle of the middle and the end of the end? ^1600","And finally give me the sound often heard,<br> During the search for a hard-to-find word. ^1600", "Now string them together, and answer me this,<br> Which creature would you be unwilling to kiss? ^1600"],


            typeSpeed: -5,
            backDelay: 0,
            callback: function() {
                $('.riddle, .typed-cursor').addClass('hide');
                $('.clues, .answer').removeClass('hide');
                $('.clues, .answer').fadeIn('2000');
            },

        });
    }

$( document ).ready(function() {


});
