/* MANUFACTURERS CAROUSEL */
$('.manufacturers').slick({
	accessibility: true,
	autoplay: true,
	autoplaySpeed: 1500,
	slidesToShow: 1,
	arrows: false,
	centerMode: true,
	slidesToScroll: 1,
	mobileFirst: true,
	centerMode: true,
	centerPadding: "0",
	arrows: true,
	responsive: [
	{
		breakpoint: 900,
		settings: {
			slidesToShow: 5

		}
	},
	{
		breakpoint: 450,
		settings: {
			slidesToShow: 3

		}
	}
	]
});

$('.parallax-window').parallax({imageSrc: 'img/engine.jpg'});