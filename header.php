<?php
global $post;
$AF = new AbstractFunctions();
?>
<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
    <meta name="theme-color" content="#ffffff">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage"
          content="<?php bloginfo('template_directory'); ?>image/favicon/mstile-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <title><?php wp_title('Punch |', true, 'left'); ?></title>
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/style/screen.css?v=20">
    <link rel="icon" href="<?php bloginfo('template_directory'); ?>/image/favicon.ico">
    <!-- from wordpress -->
    <?php wp_head(); ?>
</head>
<body <?php body_class("$post->post_name loading"); ?> data-bind="css: {'project-overview-open': projectOverlayOpen(), 'mobile-menu-open': mobileMenuOpen(), 'is-mobile': isMobile}">
  <header class="main-header">
      <div class="inner">
          <a href="<?php echo get_home_url();?>" class="logo">
              <img src="<?php bloginfo('template_directory'); ?>/image/logo1.svg" alt="Logo">
              <img src="<?php bloginfo('template_directory'); ?>/image/logo2.svg" alt="Logo">
          </a>
          <nav>
              <div class="center">
                  <?php if(is_single()):?>
                      <span class="icon-toggle-work" data-bind="tap: function(){projectOverlayOpen(true)}"></span>
                  <?php endif;?>
                  <?php
                  $menu_name = 'main-menu';
                  if (($locations = get_nav_menu_locations()) && isset($locations[$menu_name])):
                      $menu = wp_get_nav_menu_object($locations[$menu_name]);
                      $menu_items = wp_get_nav_menu_items($menu->term_id);
                      foreach ($menu_items as $key => $menu_item):?>
                          <a href="<?php echo $menu_item->url; ?>"
                             class="<?php if (get_permalink($post->ID) == $menu_item->url) {
                                 echo 'active';
                             } ?>">
                              <span>
                                <?php echo $menu_item->title; ?>
                              </span>
                          </a>
                      <?php endforeach; ?>
                  <?php endif; ?>
              </div>
          </nav>
          <span class="icon-menu-mobile" data-bind="tap: toggleMenu"></span>
      </div>
  </header>
	