var offset;

$(document).ready(function(){
	
	offset = $("#barraNav").offset();
	
	$(window).scroll(function(){

		if (window.pageYOffset >= offset.top) {
			$("#barraNav").addClass("sticky");
			$("#principal").css("padding-top","70px");
		} else {
			$("#barraNav").removeClass("sticky");
			$("#principal").css("padding-top","0px");
		}

	});
	
});
