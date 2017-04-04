$( document ).ready(function() {
    $('.title').addClass('magictime spaceInUp');
    $('#instruct').on('click', function () {

        $('.instructions').removeClass('hide');
        $('.instructions').addClass('magictime vanishIn');

    });
});
