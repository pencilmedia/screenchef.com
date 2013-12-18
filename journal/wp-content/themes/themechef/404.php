<?php get_header(); ?>
 
<!-- SPECIFIC PAGE CONTENT BEGINS HERE -->
 
<div id="post-0" class="post error404 not-found">
	<h1 class="entry-title"><?php _e( 'Not Found', 'twentyten' ); ?></h1>
	<div class="entry-content">
		<p><?php _e( 'Apologies, but the page you requested could not be found. Perhaps searching will help.', 'twentyten' ); ?></p>
		<?php get_search_form(); ?>
	</div><!-- .entry-content -->
</div><!-- #post-0 -->
   
<!-- SPECIFIC PAGE CONTENT ENDS HERE -->
   
<?php get_footer(); ?>