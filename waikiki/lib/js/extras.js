jQuery(document).ready(function(){
    // Floating Filter button for mobile
    jQuery('.filter-button').click(function(){
      if ( jQuery('#genesis-sidebar-primary').css('visibility') == 'hidden' )
        jQuery('#genesis-sidebar-primary').css('visibility','visible');
      else
        jQuery('#genesis-sidebar-primary').css('visibility','hidden');
    });
    jQuery( ".mini-filter-close" ).click(function() {
        jQuery('#genesis-sidebar-primary').css('visibility','hidden');
    });
    /*
    // Load more button - for use with infinite scroll
    if (jQuery('.woocommerce-pagination')[0]) {
            jQuery('.load-more-button').show();
        } else if (jQuery('.woocommerce-pagination').css('display') == 'none'){
            jQuery('.load-more-button').hide();
        } else {
            jQuery('.load-more-button').hide();
    }
    */

    //Searchbox toggle
    jQuery( ".waikiki-search" ).click(function() {
        jQuery('.search-content, .searchwp-live-search-results').toggle();
        jQuery('input[type="search"]').get(0).focus();

    });
    //Searchbox dismiss - ESC key
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
    //show cart
    jQuery('.mini-cart-icon').click(function(){
      jQuery('.cart-dropdown,.cart-overlay').removeClass('cart-hidden');
    })
    //Hide cart
    jQuery('.close-cart-icon').click(function(){
      jQuery('.cart-dropdown,.cart-overlay').addClass('cart-hidden');
    })
});
/*
//after facetwp loads/refreshes, do following
jQuery(document).ready(function(){
    jQuery(document).on('facetwp-refresh', function() {
        //infiniteScroll ();
    })
});
*/


//Hide facetwp parent widget wrapper when no results are available
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
    contain: true,
    cellSelector: '.carousel-cell',
    pageDots: false,

  });
})

/*
jQuery(document).ready(function(){
 "use strict";
// Define the PHP function to call from here
 var data = {
   'action': 'mode_theme_update_mini_cart'
 };
 jQuery.post(
   woocommerce_params.ajax_url, // The AJAX URL
   data, // Send our PHP function
   function(response){
     jQuery('.cart-dropdown').html(response); // Repopulate the specific element with the new content
   }
 );
// Close anon function.
});
*/
