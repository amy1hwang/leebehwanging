$(function() {
	console.log("page is loaded");
	$('a[href="#main"]').on('click', function(e) {
		console.log('arrow is clicked');
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $("#main").offset().top
		}, 500, 'linear');
	});
});