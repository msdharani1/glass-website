<?php
    
function your_theme_enqueue_scripts() {
    wp_enqueue_script('your-script-handle', get_template_directory_uri() . '/script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'your_theme_enqueue_scripts');

function add_favicon() {
    echo '<link rel="shortcut icon" href="' . get_stylesheet_directory_uri() . '/images/fav.png" type="image/x-icon" />';
}
add_action('wp_head', 'add_favicon');

?>

