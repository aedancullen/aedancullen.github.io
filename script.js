
function nukeClasses() {
	$('.toplink').each(function (index) {$(this).removeClass('toplinkselected');});
}

function nukeFaders() {
	$('.slidecontent').each(function (index) {$(this).css('opacity','0.3');$(this).css('top','750px');});
}

function slide(link, location) {
	$('#slider').css('left',location+'%');
	nukeClasses();
	$(link).addClass('toplinkselected');
	nukeFaders();
	$('.slidecontent.'+location).css('opacity','1');
	$('.slidecontent.'+location).css('top','500px');
}

window.onload = function() {
	slide($('#start'), '0');
	$('.slideitem').css('opacity','1');
}
