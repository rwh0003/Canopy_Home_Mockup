$(document).ready(function() {
	// $('.content-wrapper').css('height', ($(window).height() - 320));

	var yay = 0, text = $('.content').text();
	$('#new-post-button').click(function() {
		if ( !yay ) {
			$('.content').append('<h2>Yay!</h2>');
			yay = 1;
		}
		$('.content').append('<p>'+text+'</p>');
	});
});