
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
});


