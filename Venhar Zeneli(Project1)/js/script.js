$(function(){
    $('nav ul').hide;
    $('.nav-toggle').click(function(){
        $('nav ul').slideToggle();
    });
    $('nav ul li a').click(function(){
        $('nav ul').hide
    })
    	$('a[href*=\\#]:not([href=\\#])').click(function(){
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length){
				$('html, body').animate({
					scrollTop: target.offset().top}, 1000);
			}
		}
	});
    var viewHeight = $(window).height();
	
})