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
        <h1 id="backToTop">Vendavo Profit Analyzer Mockups</h1>
        <article class="screenshots">
            <p>
                <a href="#1">Personas</a> | <a href="#2">Storyboards</a> | <a href="#3">Concepts</a> | <a href="#4">Mockups</a>
            </p>
            <section>
                <h2 id="1">Personas</h2>
                <?php 
                    $dirname = "1_personas/";
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
                <h2 id="2">Storyboards</h2>
                <?php 
                    $dirname = "2_storyboard/";
                    $images = glob($dirname."*.jpg");
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <p>
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <h2 id="3">Concepts</h2>
                <?php 
                    $dirname = "3_concepts/";
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
                <h2 id="4">Mockups</h2>
                <?php 
                    $dirname = "4_mockups/";
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
