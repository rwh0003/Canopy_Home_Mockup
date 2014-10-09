$(document).ready(function() {
	$('.left-nav').height($('.content-wrapper').height());
	
	$('#new-entry-button').click(function() {
		// bring up a lightbox to add a blog post
		$('.new-entry-cover').fadeIn(500);
		$('.new-entry-box').fadeIn(500);
	});

	$('#new-entry-close').click(function() {
		$('.new-entry-cover').fadeOut(500);
		$('.new-entry-box').fadeOut(500);
	});

	$('#new-entry-form').submit(function() {
		$('.new-entry-cover').fadeOut(500);
		$('.new-entry-box').fadeOut(500);
	});

	$('#new-entry-image').change(function(){
		var file = $(this).val().split('\\');
		file = file[file.length - 1];
		$('#selected-image').html(file);
	});
});

$(document).change(function() {
	$('.left-nav').height($('.content-wrapper').height());
});