<?php get_header(); ?>
 
<!-- SPECIFIC PAGE CONTENT BEGINS HERE -->

<?php
/* Run the loop to output the post.
 * If you want to overload this in a child theme then include a file
 * called loop-single.php and that will be used instead.
 */
get_template_part( 'loop', 'single' );
?>

<!-- SPECIFIC PAGE CONTENT ENDS HERE -->
   
<?php get_footer(); ?>