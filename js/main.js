/* MANUFACTURERS CAROUSEL */
$('.manufacturers').slick({
	accessibility: true,
	autoplay: true,
	autoplaySpeed: 1500,
	speed: 200,
	slidesToShow: 3,
	arrows: true,
	centerMode: true,
	slidesToScroll: 2,
	mobileFirst: true,
	centerPadding: "0",
	infinite: true,
	responsive: [
	{
		breakpoint: 450,
		settings: {
			slidesToShow: 3,
			arrows: true
		}
	},
	{
		breakpoint: 900,
		settings: {
			slidesToShow: 5,
			arrows: true
		}
	}
	]
});

$('.manufacturers').on('click', '.slick-slide', function (e) {
	e.stopPropagation();
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#proizvodjaci").offset().top
    }, 200);
	var index = $(this).data("slick-index");
	if ($('.manufacturers').slick('slickCurrentSlide') !== index) {
		var name = $(this).find('img').attr('title');
		var desc = $(this).find('img').attr('data-desc');
		$('.manufacturers').slick('slickGoTo', index);
		$('.man-info h3').html(name);
		$('.man-info p').html(desc);
		$('.man-info').slideDown();
		console.log($(this).find("img").attr('src'));
	} else {
		var name = $(this).find('img').attr('title');
		var desc = $(this).find('img').attr('data-desc');
		$('.man-info h3').html(name);
		$('.man-info p').html(desc);
		$('.man-info').slideToggle();
	}
});

$('.parallax-window').parallax({imageSrc: 'img/engine.jpg'});