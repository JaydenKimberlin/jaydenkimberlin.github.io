$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 80
	}, 500, 'linear');
});

document.getElementById("write").innerHTML = "Last Modified: " + document.lastModified;