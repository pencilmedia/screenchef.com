<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("assets/config.inc");
    $ROOT = '/'; // Set root for relative paths
    $thisPage="home"; 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("inc/head.inc.php"); ?>
</head>
<body class="hmpg">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main>
    <?php include("inc/nav.inc.php"); ?>
        <article>
            <section class="animated zoomInUp">
                  <!-- Sweet nested columns cleared with a clearfix class -->
                  <div class="colonnade cards">
                    <!-- In nested columns give the first column a class of alpha
                    and the second a class of omega -->
                    <div class="card lt-column animated fadeInLeftBig">
                        <h1>UI Design</h1>
                        <p>
                            Making empathetic, informed decisions and paying incredible attention to detail regarding the aesthetics of digital products including branding, logo, graphic design and animation. 
                        </p>
                        <footer>
                            <a href="https://www.styleguide.io" target="_blank">Design Systems &amp; Styleguides <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
                        </footer>
                    </div>
                    <div class="card mid-column animated fadeInUpBig">
                        <h1>User Experience</h1>
                        <p>
                            The ability to be empathetic and inquisitive are essential components to designing a successful experience for people. 
                            User experience design encompasses traditional human-computer interaction (HCI) design and extends it by addressing all aspects of a product or service as perceived by users. 
                        </p>
                        <footer>
                            <a href="https://www.uxchecklist.github.io/" target="_blank">User Experience Designer Checklist <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
                        </footer>
                    </div>
                    <div class="card rt-column animated fadeInRightBig">
                        <h1>Front End Development</h1>
                        <p>
                            A combination of programming skills and designing with empathy for the end user. Knowledge about accessibility, browser nuances, semantic markup, CSS techniques negating the need for JavaScript solutions.
                        </p>
                        <footer>
                            <a href="https://www.upwork.com/hiring/development/beginners-guide-to-front-end-development/" target="_blank">Guide to Front End Development <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
                        </footer>
                    </div>
                  </div>
            </section>
        </article> 
        <?php include("inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
