<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../../assets/config.inc");
    $ROOT = '../../../'; // Set root for relative paths
    $thisPage="portfolio"; 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("../../../inc/head.inc.php"); ?>
</head>
<body class="secondary portfolio">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main>
        <?php include("../../../inc/nav.inc.php"); ?>
        <h1 id="backToTop">New Material Requests <button class="btn btn-primary pull-right" onclick="history.go(-1);"><i class="fa fa-chevron-left"></i> Back to Portfolio</button></h1>
        <article class="screenshots nmr">
            <!-- <p>
                <a href="#specVisuals">Jump to Spec Visuals</a>
            </p> -->
            <section>
                <?php 
                    $dirname = "projects/4_nmr/3final_screens/";
                    $images = glob($dirname."*.png");
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <p>
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <?php 
                    $dirname = "projects/4_nmr/3final_screens/workflow/";
                    $images = glob($dirname."*.png");
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <p>
                <a href="#backToTop">Back To Top</a>
            </p>
        </article>

        <?php include("../../../inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
