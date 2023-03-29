/*$(document).ready(function() {
	var s = $("#header");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos >=200) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
	$('#heroSlider').carousel({
	  interval: 10000
	});
});

*/
$(document).ready(function(){

    $(".filter_menu li a").click(function(e){
    	e.preventDefault();
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});