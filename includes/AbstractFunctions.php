<?php

class AbstractFunctions
{
    public $cartItems = array();

    public function __construct()
    {
        show_admin_bar( false );
        remove_action('wp_head', 'wp_generator');
        add_action('init', array($this,'head_cleanup'));
        add_action('the_generator', array($this,'rss_version'));
        add_action('init', array($this, 'wdl_register_menus'));
        add_action('init', array($this, 'create_post_type'));
        add_filter('rewrite_rules_array', array($this, 'add_rewrite_rules'));
        add_filter('query_vars', array($this, 'add_query_vars'));
    }

    function add_query_vars($aVars) {
        $aVars[] = "cat"; // represents the name of the product category as shown in the URL
        return $aVars;
    }
    function add_rewrite_rules($aRules) {
        $aNewRules = array('works/([^/]+)/?$' => 'index.php?pagename=works&cat=$matches[1]');
        $aRules = $aNewRules + $aRules;
        return $aRules;
    }
    function create_post_type()
    {
//        register_post_type('work',
//            array(
//                'labels' => array(
//                    'name' => __('work'),
//                    'singular_name' => __('work')
//                ),
//                'public' => true,
//                'has_archive' => true,
//                'taxonomies' => array('category'),
//                'show_in_nav_menus' => true,
//                'supports' => array( 'title', 'editor', 'thumbnail' ),
//                'query_var' => true
//            )
//        );
    }

    function wdl_register_menus() {
        register_nav_menus(
            array(
                'main-menu' => __('Header menu'),
                'footer-menu' => __('Footer menu')
            )
        );
    }

    public function head_cleanup() {
        remove_action( 'wp_head', 'feed_links_extra', 3 );                      // Category Feeds
        remove_action( 'wp_head', 'feed_links', 2 );                            // Post and Comment Feeds
        remove_action( 'wp_head', 'rsd_link' );                                 // EditURI link
        remove_action( 'wp_head', 'wlwmanifest_link' );                         // Windows Live Writer
        remove_action( 'wp_head', 'index_rel_link' );                           // index link
        remove_action( 'wp_head', 'parent_post_rel_link', 10 );              // previous link
        remove_action( 'wp_head', 'start_post_rel_link', 10);               // start link
        remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10);   // Links for Adjacent Posts
        remove_action( 'wp_head', 'wp_generator' );                             // WP version
        if (!is_admin()) {
            wp_deregister_script('jquery');                                     // De-Register jQuery
            wp_register_script('jquery', '', '', '', true);                     // Register as 'empty', because we manually insert our script in header.php
        }
    }

    public function rss_version() {
        return '';
    }

}

$AbstractFunctions = new AbstractFunctions();
