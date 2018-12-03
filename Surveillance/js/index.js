
//landscape mode
function testOrientation() {
  document.getElementById('block_land').style.display = (screen.width>screen.height) ? 'none' : 'block';
}


function resize_video(popup_name) {
    var video = $("#" + popup_name).find('video').get(0);
    video.play();
    setTimeout(function() {
        video.pause();
    }, 300);
}

$(function() {

    // setup event handlers for carousel rotations
    $('#carousel').bind('slide.bs.carousel', function(e) {
        $(e.relatedTarget).find('video').get(0).play();
    });

    $('#carousel').bind('slide.bs.carousel', function(e) {
        $('video').not('.active > div > video').each(function() {
            $(this).get(0).pause();
        });
    });

    $('a.carousel-control').click(function() {
        $('.slide-content video').each(function(index, e) {
            e.pause();
        });
    })

    $('.popup__close').click(function() {
        $('.slide-content video').each(function(index, e) {
            e.pause();
        });
    });
});


