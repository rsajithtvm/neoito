$(document).ready(function(){
	$('.tab-nav li:eq(0)').addClass('active');
	$('.tab-content:eq(0)').show();
	$('body').on('click','.tab-nav li',function(){
		$('.tab-nav li').removeClass('active');
		$(this).addClass('active');
		var getID = $(this).attr('data-tab');
		$('.tab-content').hide();
		$('#'+getID).fadeIn('150');
	})
});