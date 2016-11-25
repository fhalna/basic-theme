<?php //wp_footer(); ?>
<footer class="main-footer">
    
</footer>
<script>
    window['templateDir'] = '<?php bloginfo('template_directory');?>';
    window['ajaxUrl'] = '<?php echo admin_url('admin-ajax.php'); ?>';
    window['homeUrl'] = '<?php echo get_home_url(); ?>';
</script>
<script data-no-instant src="<?php bloginfo('template_directory'); ?>/script/app/config/requirejs.config.js"></script>
<script data-no-instant src="<?php bloginfo('template_directory'); ?>/script/lib/require/require.js" data-main="app/Main"></script>
</body>
</html>
