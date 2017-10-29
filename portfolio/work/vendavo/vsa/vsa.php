<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../../../assets/config.inc");
    $ROOT = '../../../../'; // Set root for relative paths
    $thisPage="portfolio"; 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("../../../../inc/head.inc.php"); ?>
</head>
<body class="secondary portfolio">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main>
        <?php include("../../../../inc/nav.inc.php"); ?>
        <h1 id="backToTop">Vendavo Sales Advisor Mockups</h1>
        <article class="screenshots">
            <p>
                <a href="#specVisuals">Jump to Spec Visuals</a>
            </p>
            <section>
                <?php 
                    $dirname = "4_mockups/";
                    $images = glob($dirname."*.png");
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <h3 id="specVisuals">Spec Visuals</h3>
            <section>
                <?php 
                    $dirname = "4_mockups/spec_visuals/";
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

        <?php include("../../../../inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>