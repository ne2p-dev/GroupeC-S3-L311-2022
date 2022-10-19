$(document).ready(function(){

/* variable declaration */
var jours = $('.jour');
var puces = $('.bullets .entypo-record');

/* function init declaration */
function init(){
	setTimeout(function(){
		$('body').addClass('isok');
		jours.hide();
		$('.wrapper').fadeIn('slow', function(){
			jours.first().fadeIn('slow');
			puces.removeClass('active').first.addClass('active');
		});
	}, 2000);
}

/* bullets click event */
puces.click(function(){
	var cible = $(this).attr('data-cible');
	jours.hide();
	$(jours.get(cible)).fadeIn();
	puces.removeClass('active');
	this.addClass('active');
});

/* function init */
init();

});  