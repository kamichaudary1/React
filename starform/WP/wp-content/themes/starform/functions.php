<?php
/**
 * starform functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package starform
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function starform_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on starform, use a find and replace
		* to change 'starform' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'starform', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'starform' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'starform_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'starform_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function starform_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'starform_content_width', 640 );
}
add_action( 'after_setup_theme', 'starform_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function starform_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'starform' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'starform' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'starform_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function starform_scripts() {
	wp_enqueue_style( 'starform-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'starform-style', 'rtl', 'replace' );

	wp_enqueue_script( 'starform-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'starform_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

// Global Options
if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page();
    acf_add_options_sub_page('Header');
    acf_add_options_sub_page('Footer');
}

/*----------SVG Support------*/
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');
function add_svg_to_upload_mimes( $upload_mimes ) { 
    $upload_mimes['svg'] = 'image/svg+xml'; 
    $upload_mimes['svgz'] = 'image/svg+xml'; 
    return $upload_mimes; 
} 
add_filter( 'upload_mimes', 'add_svg_to_upload_mimes', 10, 1 ); 


add_action( 'rest_api_init', 'create_ACF_meta_in_REST' );
// ACF restful API Hook
 function create_ACF_meta_in_REST() {
    $postypes_to_exclude = ['acf-field-group','acf-field'];
    $extra_postypes_to_include = ["page"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

    array_push($post_types, $extra_postypes_to_include);

    foreach ($post_types as $post_type) {
        register_rest_field( $post_type, 'ACF', [
            'get_callback'    => 'expose_ACF_fields',
            'schema'          => null,
       ]
     );
    }

}

// callback function to register rest field
function expose_ACF_fields( $object ) {
    $ID = $object['id'];
    return get_fields($ID);
}


// Global Option Field HOOK API
add_filter( 'rest_prepare_post', function( $response ) {
	$response->data['acf'] = get_fields( $response->data['id'] );
	return $response;
} );

/**
 * Add Options for Pages.
 */
add_filter( 'rest_prepare_page', function( $response ) {
	$response->data['acf'] = get_fields( $response->data['id'] );
	return $response;
} );