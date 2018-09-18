/* MANUFACTURERS CAROUSEL */
$('.manufacturers').slick({
	accessibility: true,
	autoplay: true,
	autoplaySpeed: 1500,
	speed: 200,
	slidesToShow: 1,
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
		scrollTop: $(".manufacturers").offset().top
	}, 200);
	var index = $(this).data("slick-index");
	var name = $(this).find('img').attr('title');
	var src = $(this).find('img').attr('src');
	var desc = $(this).find('img').attr('data-desc');
	var web = $(this).find('img').attr('data-web');
	var cat = $(this).find('img').attr('data-cat');
	$('.manufacturers').slick('slickGoTo', index);
	$('.man-info h3').html(name);
	$('.man-info p').html(desc);
	$('.man-info .side .catalogue a').attr('href', cat);
	$('.man-info .side .web a').attr('href', web);
	$('.man-info .side img').attr('src', src);
	$('.man-info').slideDown();
	$('.manufacturers').slick('slickPause');
});

$('.close-info').on('click', function() {
	$('.man-info').slideUp();
	$('.manufacturers').slick('slickPlay');
})

$('.navTrigger').click(function(){
	$('nav').slideToggle();
	$(this).toggleClass('active');
});


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 800);
    }
});