<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("assets/config.inc");
    $ROOT = ''; // Set root for relative paths
    $thisPage="home"; 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("assets/inc/head.inc.php"); ?>
</head>
<body class="hmpg">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main class="animated zoomInUp">
    <?php include("assets/inc/nav.inc.php"); ?>
        <section>
            <article>
                  <!-- Sweet nested columns cleared with a clearfix class -->
                  <div class="colonnade cards">
                    <!-- In nested columns give the first column a class of alpha
                    and the second a class of omega -->
                    <div class="lt-column animated fadeInLeftBig"><h1>Visual Design</h1><p><?php echo $yearsExperience; ?> years experience creating digital products including branding, logo, graphic design and animation. While I enjoy all these, my focus is making easy to use, beautiful human interfaces.</p></div>
                    <div class="mid-column animated fadeInUpBig"><h1>User Experience</h1><p>I strive to improve the usability, ease of use, and pleasure provided in the interaction between the customer and the product. User experience design encompasses traditional human-computer interaction (HCI) design, and extends it by addressing all aspects of a product or service as perceived by users. </p></div>
                    <div class="rt-column animated fadeInRightBig"><h1>Front End Development</h1><p>A combination of programming skills and designing with empathy for the end user. One challenge is the constant evolution regarding the tools and techniques used to create digital products.</p></div>
                  </div>
            </article>
            <article>
                <!--mg src="assets/img/akta_screen.png" id="ani1" class="slideRight" alt="AKTA Screen" /-->
            </article>
        </section>
        <?php include("assets/inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
