<?php get_header(); ?>
 
<!-- SPECIFIC PAGE CONTENT BEGINS HERE -->

<h1 class="page-title"><?php
	printf( __( 'Tag Archives: %s', 'twentyten' ), '<span>' . single_tag_title( '', false ) . '</span>' );
?></h1>

<?php
/* Run the loop for the tag archive to output the posts
 * If you want to overload this in a child theme then include a file
 * called loop-tag.php and that will be used instead.
 */
 get_template_part( 'loop', 'tag' );
?>

<!-- SPECIFIC PAGE CONTENT ENDS HERE -->
   
<?php get_footer(); ?>