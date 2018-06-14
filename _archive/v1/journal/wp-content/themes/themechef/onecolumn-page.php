<?php get_header(); ?>
 
<!-- SPECIFIC PAGE CONTENT BEGINS HERE -->
 
<?php
/* Run the loop to output the page.
 * If you want to overload this in a child theme then include a file
 * called loop-page.php and that will be used instead.
 */
 get_template_part( 'loop', 'page' );
?>
   
<!-- SPECIFIC PAGE CONTENT ENDS HERE -->
   
<?php get_footer(); ?>