$(document).ready(function(){
	$('.tab-nav li:eq(0)').addClass('active');
	$('.tab-content:eq(0)').show();
	$('body').on('click','.tab-nav li',function(){
		$('.tab-nav li').removeClass('active');
		$(this).addClass('active');
		var getID = $(this).attr('data-tab');
		$('.tab-content').hide();
		$('#'+getID).fadeIn('150');
	});

	$('body').on('click','.icon-mob',function(){
		$('.overlay').fadeToggle();
		$('.main-nav').fadeToggle(150);
	});

	$(document).on('click', function (e) {
		if ($(e.target).closest('.icon-mob, .main-nav').length === 0) {
			$('.main-nav').hide();
			$('.overlay').fadeOut();
		}
	});
	
	$('body').on('click','.footer-links h3',function(){
		$(this).toggleClass('active');
		$(this).next('ul').slideToggle(100);
	});
});