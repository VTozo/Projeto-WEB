$(document).ready(function(){

	var nav_visivel = false;

	$("#menu").click(function(){
		if(nav_visivel){
			$("nav").animate({width: "0"}, 500);
			$(".nav_item").animate({width: "0"}, 500);
			nav_visivel = false;
		}
		else{
			$("nav").animate({width: "100%"}, 500);
			$(".nav_item").animate({width: "100%"}, 500);
			nav_visivel = true;
		}
		
	});
	
});