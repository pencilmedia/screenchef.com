<?php 
require('./../wordpress/wp-blog-header.php'); 
?> 
<?php include("../global/config.inc"); ?>
<?php $thisPage = "journal"; ?>
<!DOCTYPE html class="no-js">
<head>
    <title><?php echo journalTitle ?></title>
    <?php include("../global/inc/head.inc.php"); ?>
</head>
<body id="journal">
    <div id="wrapper">
    <?php include("../global/inc/nav.inc.php"); ?>
        
        <section>
        	<h1>Journal</h1>
            <p>Random juicy bits of information.</p>
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
        
    <?php include("../global/inc/foot.inc.php"); ?>
    </div>
</body>
</html>
