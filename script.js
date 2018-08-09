
function nukeClasses() {
	$('.toplink').each(function (index) {$(this).removeClass('toplinkselected');});
}

function nukeFaders() {
	$('.slidecontent').each(function (index) {$(this).css('opacity','0.0');$(this).css('top','1000px');$(this).css('transition-delay','0.0s, 0.0s');$(this).css('transition-property','opacity, top');});
}

function slide(link, location) {
	$('#slider').css('left',location+'%');
	nukeClasses();
	$(link).addClass('toplinkselected');
	nukeFaders();
	$('.slidecontent.'+location).css('transition-delay','0.4s, 0.0s');
	$('.slidecontent.'+location).css('transition-property','opacity, top');
	$('.slidecontent.'+location).css('opacity','1');
	$('.slidecontent.'+location).css('top','500px');
}

window.onload = function() {
	slide($('#start'), '0');
	$('.slideitem').css('opacity','1');
}
