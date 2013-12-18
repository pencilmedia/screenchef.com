<?php 
require('./wordpress/wp-blog-header.php'); 
?> 

<!DOCTYPE html>
<head>
<meta name="description" content="Personal Website of Ralph A. Garcia" />
<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
<meta name="author" content="Ralph A. Garcia" />
<meta charset="UTF-8" />
<title>Screenchef - Not meant for your eyes.</title>
<style>
	@import 'global/css/all.css';
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="global/js/modernizr.custom.67983.js"></script>
<script>
	Modernizr.load([
	  {
		load: '//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js',
		complete: function () {
		  if ( !window.jQuery ) {
				Modernizr.load('js/libs/jquery-1.6.1.min.js');
		  }
		}
	  },
	  {
		// This will wait for the fallback to load and
		// execute if it needs to.
		load: 'needs-jQuery.js'
	  }
	]);
</script>
</head>
<body id="journal">
    <div id="wrapper">
    
        <header>
            <?php include("global/inc/masthead.inc.php"); ?>
            <?php include("global/inc/global_nav.inc.php"); ?>
        </header>
        
        <section>
        	<h1>Journal</h1>
        
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            
            <?php echo"<article>"; ?>
                
            <div class="post" id="post-<?php the_ID(); ?>">
                 <h3 class="storytitle"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h3>
                <div class="meta"><?php _e("Filed under:"); ?> <?php the_category(',') ?> &#8212; <?php the_author() ?> @ <?php the_date('','<span>','</span>'); the_time(); ?> <?php edit_post_link(__('Edit This')); ?></div>
                
                <div class="storycontent">
                    <?php the_content(__('(more...)')); ?>
                </div>
                
                <div class="feedback">
                        <?php wp_link_pages(); ?>
                        <?php comments_popup_link(__('Comments (0)'), __('Comments (1)'), __('Comments (%)')); ?>
                </div>
            
            </div>
            
            <?php comments_template(); // Get wp-comments.php template ?>
            
            <?php echo "</article>"; endwhile; else: ?>
            <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
            <?php endif; ?>
        
        
        </section>
    </div>
</body>
</html>
