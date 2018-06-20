<?
	
//* AL NEDENSTÅENDE ER TIL TEST AF NY MEGA MENU. Der er ligeledes tilføjet nyew CSS styles neders i Style.css https://github.com/marioloncarek/megamenu-js/

//* Disable the superfish script
add_action( 'wp_enqueue_scripts', 'sp_disable_superfish' );
function sp_disable_superfish() {
	wp_deregister_script( 'superfish' );
	wp_deregister_script( 'superfish-args' );
}

// Enqueue Mega-Menu.js.
add_action( 'wp_enqueue_scripts', 'custom_load_megamenu' );
function custom_load_megamenu() {
    wp_enqueue_script( 'Megamenu', get_stylesheet_directory_uri() . '/lib/js/megamenu.js', array(), null );
}


//* Remove all nav wrappers
// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}
// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes
add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID
add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's

//*Add new menu markup
add_action( 'genesis_after_title_area', 'waikiki_add_menu' );
    function waikiki_add_menu() {
        echo '<div class="menu-container">';
        echo '<div class="menu">';
        wp_nav_menu(array (
            'menu' => 'Waikiki'
        ));
		echo '</div>';
		echo '</div>';
}