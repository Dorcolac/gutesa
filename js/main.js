// LOAD ALERT
function closeAlert() {
	// document.querySelector('.alert').css.display = "none";
	alert('asdas');
}

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
	var cert = $(this).find('img').attr('data-cert');
	$('.manufacturers').slick('slickGoTo', index);
	$('.man-info h3').html(name);
	$('.man-info p').html(desc);
	$('.man-info .side .catalogue a').attr('href', cat);
	$('.man-info .side .web a').attr('href', web);
	$('.man-info .side img').attr('src', src);
	if (cert) {
		$('.man-info .side .certif').css('display', 'block');
		$('.man-info .side .certif button').attr('data-cert', cert);
	} else {
		$('.man-info .side .certif').css('display', 'none');
	}
	$('.man-info').slideDown();
	$('.manufacturers').slick('slickPause');
});

$('.certif button').on('click', function() {
	var certificate = document.querySelector('img.certificate');
	var certSrc = $(this).attr('data-cert');
	certificate.classList.add('certificate');
	certificate.src = certSrc;
	document.querySelector('div.certificate .overlay').appendChild(certificate);
	$('div.certificate').addClass('active');
})

$('.certificate .overlay').on('click', function() {
	document.querySelector('div.certificate').classList.remove('active');
})

$('.close-info').on('click', function() {
	$('.man-info').slideUp();
	$('.manufacturers').slick('slickPlay');
})

$('.navTrigger').click(function(){
	$(this).toggleClass('active');
	$('nav').slideToggle();
});

// SMOOTH SCROLL
$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if( target.length ) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 800);
	}
});

$('nav a[href^="#"]').on('click', function(event) {
	$('.navTrigger').toggleClass('active');
	$('nav').slideToggle();
})

// SHRINK NAV
document.addEventListener("scroll", myFunction);

function myFunction() {
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.querySelector('header').classList.add('shrink');
	} else {
		document.querySelector('header').classList.remove('shrink');
	}
}



// navigator.geolocation.getCurrentPosition(function(position) {
//   console.log(position.coords.latitude, position.coords.longitude);
// });