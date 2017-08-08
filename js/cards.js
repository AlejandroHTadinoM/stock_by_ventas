function resizeCards () {
	var heights = $(".size").map(function() {		        
			return $(this).height();		   
		}).get(),
	maxHeight = Math.max.apply(null, heights);
	$(".card").height(maxHeight);
}

$(window).resize(resizeCards());
