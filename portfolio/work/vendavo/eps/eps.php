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
        <h1 id="backToTop">Vendavo Profit Analyzer <button class="btn btn-primary pull-right" onclick="history.go(-1);"><i class="fa fa-chevron-left"></i> Back to Portfolio</button></h1>
        <article class="screenshots">
            <p>
                <a href="#1">Personas</a> | <a href="#2">Storyboards</a> | <a href="#3">Concepts</a> | <a href="#4">Mockups</a> | <a href="#5">Prototype</a> | <a href="#6">Case Study</a>
            </p>
            <section>
                <h2 id="1">Personas</h2>
                <?php 
                    $dirname = "1_personas/";
                    $images = glob($dirname."*.{jpg,gif,png}", GLOB_BRACE);
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <p class="back_top">
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <h2 id="2">Storyboards</h2>
                <?php 
                    $dirname = "2_storyboard/";
                    $images = glob($dirname."*.{jpg,gif,png}", GLOB_BRACE);
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <p class="back_top">
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <h2 id="3">Concepts</h2>
                <?php 
                    $dirname = "3_concepts/";
                    $images = glob($dirname."*.{jpg,gif,png}", GLOB_BRACE);
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
                <h3>PDF Format</h3>
                <p>
                    <?php 
                        $dirname = "3_concepts/";
                        $pdf_files = glob($dirname."*.pdf", GLOB_BRACE);
                        foreach($pdf_files as $pdf_file) {
                            $shortname = basename($pdf_file);
                            echo '<br />PDF Link:<br /><a href="'.$pdf_file.'" target="_blank" />'.$shortname.'</a>&nbsp;';
                        }
                    ?>
                </p>
            </section>
            <p class="back_top">
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <h2 id="4">Mockups</h2>
                <?php 
                    $dirname = "4_mockups/";
                    $images = glob($dirname."*.{jpg,gif,png}", GLOB_BRACE);
                    foreach($images as $image) {
                    echo '<p><img src="'.$image.'" /></p>';
                    }
                ?>
            </section>
            <p class="back_top">
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <h2 id="5">Prototype</h2>
                <p>
                    <a href="5_prototype/dist/app/explorer/" target="_blank">Visit the prototype</a>
                </p>
            </section>
            <p class="back_top">
                <a href="#backToTop">Back To Top</a>
            </p>
            <section>
                <h2 id="6">Case Study</h2>
                <p>
                    <a href="6_case_study/" target="_blank">View the case study</a>
                </p>
            </section>
            <p class="back_top">
                <a href="#backToTop">Back To Top</a>
            </p>
        </article>

        <?php include("../../../../inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
