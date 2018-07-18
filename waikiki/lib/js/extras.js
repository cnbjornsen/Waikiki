//jQuery( "div.filter-dropdown" ).addClass( "active" );
//(function($){
    //$('.mini-filter').on('click', function(){
      //  $(".filter-dropdown").removeClass("active focus hide");
        //$(this).toggleClass("active");
    //});
//}(jQuery));

jQuery(document).ready(function(){
    /*jQuery( ".filter-button" ).click(function() {
        jQuery('.filter-dropdown').toggle();
    });
    jQuery( ".mini-filter-close" ).click(function() {
        jQuery('.filter-dropdown').toggle();
    });*/
    /*jQuery( ".filter-button" ).click(function() {
        jQuery('#genesis-sidebar-primary').toggle();
        jQuery('#genesis-sidebar-primary').focus();
    }); */
    jQuery('.filter-button').click(function(){
      if ( jQuery('#genesis-sidebar-primary').css('visibility') == 'hidden' )
        jQuery('#genesis-sidebar-primary').css('visibility','visible');
      else
        jQuery('#genesis-sidebar-primary').css('visibility','hidden');
    });
    jQuery( ".mini-filter-close" ).click(function() {
        //jQuery('#genesis-sidebar-primary').toggle();
        jQuery('#genesis-sidebar-primary').css('visibility','hidden');
    });
    if (jQuery('.woocommerce-pagination')[0]) {
            jQuery('.load-more-button').show();
        } else if (jQuery('.woocommerce-pagination').css('display') == 'none'){
            jQuery('.load-more-button').hide();
        } else {
            jQuery('.load-more-button').hide();
    }
    jQuery( ".waikiki-search" ).click(function() {
        jQuery('.search-content, .searchwp-live-search-results').toggle();
        jQuery('input[type="search"]').get(0).focus();

    });
    jQuery(".search-content").keyup(function(event){
		if (event.keyCode == 27){
			// Close the modal/menu
			jQuery(".search-content, .searchwp-live-search-results").toggle();

	        	//  Return focus to the element that invoked it
			jQuery('.site-container').focus();
		}
	});
    // Show/hide the main navigation
    jQuery('.nav-toggle').click(function() {
        if ( jQuery('.nav-primary').hasClass('activated'))
            jQuery('.nav-primary, .menu-toggle, .nav-toggle').removeClass('activated');
        else
            jQuery('.nav-toggle').addClass('activated');
    });
    jQuery('.menu-toggle').click(function() {
            jQuery('.nav-toggle').addClass('activated');
    });
});

//after facetwp loads/refreshes, do following
jQuery(document).ready(function(){
    jQuery(document).on('facetwp-refresh', function() {
        //infiniteScroll ();
    })
})

//Hide containing widget wrapper when no results are available from facetwp
jQuery(document).on('facetwp-loaded', function() {
    jQuery.each(FWP.settings.num_choices, function(key, val) {
        var $parent = jQuery('.facetwp-facet-' + key).closest('.widget');
        (0 === val) ? $parent.hide() : $parent.show();
    });
});

//Flickity Initialize featured frontpage
jQuery(document).ready(function () {
  jQuery('.flickity-featured').flickity({
    // options
    cellAlign: 'left',
    //contain: true,
    cellSelector: '.carousel-cell',
    

  });
})

//Initialize SlickJS slider - featured products frontpage
/*jQuery(document).ready(function () {
    jQuery('.slick-featured').slick({
        slide: 'li',
        //dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        //slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    //slidesToScroll: 3,
                    infinite: false,
                    //dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    //slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    //slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
})*/
