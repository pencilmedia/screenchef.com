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
            Redesign of Vendavo’s bread-and-butter enterprise application. A high-visibility project, the Vendavo pricing suite is used by hundreds of Fortune 500 companies. The initial design concept and wireframes received praise when revealed during Vendavo’s European Profit Summit.
            </p>
            <h4>Goals</h4>
            <ul>
                <li>Decrease application complexity and redundancy</li>
                <li>Expose the power of the application while making it easy to use</li>
                <li>Modernize the interactions and visual design</li>
            </ul>
            <h4>User Research</h4>
            <ul>
                <li>Understanding customers' pain points with the current application</li>
                <li>Creating personas and user journeys</li>
                <li>Iterative testing of the product from low-fidelity paper sketches to high-fidelity prototypes</li>
            </ul>
            <p>
            Decisions were informed by 21 interviews, 28 contextual inquiries, 9 design feedback sessions, 7 design sprint sessions, and 25 usability tests.
            </p>
            <p>&nbsp;</p>
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
                <ol>
                        <li>KPI Dashboard - User taps on hamburger menu to go to:</li>
                        <li>Price Explorer - User can filter down results or taps:</li>
                        <li>Recent Analysis Dropdown - Recent and pre-canned analysis packs shown; User searches and this area swaps for:</li>
                        <li>Search Results Dropdown - User can search for keywords in analyses; User taps View All to view:</li>
                        <li>All analyses</li>
                </ol> 
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
