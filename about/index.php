<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../assets/config.inc");
    $ROOT = '../'; // Set root for relative paths
    $thisPage="about"; 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<title><?php echo aboutTitle ?></title>
<?php include("../inc/head.inc.php"); ?>
</head>
<body class="secondary about">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main>
        <?php include("../inc/nav.inc.php"); ?>
        <h1><? echo $thisPage ?></h1>
        <article>
            <section>
                <p>
                    I am a interaction designer and prototyper with <?php echo (string)$yearsExperience->y; ?> years of experience in visual and interaction design, information architecture, web development, graphic design, and hand drawing. 
                </p>
                <h3>Specialties</h3>
                  
                <h4>Design:</h4>
                <p>User-Centered Design, User Interface Design, User Experience Design, Information Architecture, Sketch, Material Design (Google), Balsamiq, Adobe Photoshop, Illustrator, InDesign, Fireworks, Flash, Hand Drawing, Visual/Graphic Design</p></p>

                <h4>Prototype:</h4>
                <p>HTML5, CSS3, SCSS, LESS, W3C Web Standards &amp; Usability, Grunt, Angular, JavaScript, JQuery, Bootstrap, Foundation, PHP, XML/XSLT, Flash &amp; Flex/AIR</p>

                <p>
                    <a href="https://www.linkedin.com/in/garciaralph/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i> Visit my LinkedIn Profile</a>
                </p>
            </section>
        </article>
        <?php include("../inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
