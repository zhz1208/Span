

$(function() {

    // setup event handlers for carousel rotations
    $('#carousel').bind('slide.bs.carousel', function(e) {
        $(e.relatedTarget).find('video').get(0).play();
    });

    $('#carousel').bind('slid.bs.carousel', function(e) {
        $('video').not('.active > div > video').each(function() {
            $(this).get(0).pause();
        });
    });
});


