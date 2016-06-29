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
<title><?php echo hmpgTitle ?></title>
<?php include("../assets/inc/head.inc.php"); ?>
</head>
<body class="about">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div class="wrapper animated zoomInUp">
    <?php include("../assets/inc/nav.inc.php"); ?>
    
        <section>
            <article class="callout">
                <h1>Specialties</h1>
                <dl>
                    <dd class="graphic"><img src="http://placehold.it/70x70"></dd>
                    <dt><h2>Prototype</h2></dt>
                    <dd>W3C Web Standards,</dd>
                    <dd>Accessibiddty,</dd>
                    <dd>HTML5,</dd>
                    <dd>CSS3,</dd>
                    <dd>LESS &amp; SCSS Preprocessors,</dd>
                    <dd>JavaScript,</dd>
                    <dd>JQuery,</dd>
                    <dd>Bootstrap,</dd>
                    <dd>GIT,</dd>
                    <dd>Yeoman,</dd>
                    <dd>PHP,</dd>
                    <dd>XML/XSLT,</dd>
                    <dd>Flash &amp; Flex/AIR</dd>
                </dl>
                <dl>
                    <dd class="graphic"><img src="http://placehold.it/70x70"></dd>
                    <dt><h2>Design</h2></dt>
                    <dd>Cooper | U: Interaction Design Practicum,</dd>
                    <dd>User-centered Design (<a href="http://en.wikipedia.org/wiki/User-centered_design">UCD</a>),</dd>
                    <dd>Process-centered Design (<a href="http://en.wikipedia.org/wiki/Process-centered_design">PCD</a>),</dd>
                    <dd>Activity-centered Design (<a href="http://en.wikipedia.org/wiki/Activity-centered_design">ACD</a>),</dd>
                    <dd><a href="http://en.wikipedia.org/wiki/Design_Thinking">Design Thinking</a>,</dd>
                    <dd>Personas,</dd>
                    <dd>Scenarios,</dd>
                    <dd>Use Cases</dd>
                </dl>
                <dl>
                    <dd class="graphic"><img src="http://placehold.it/70x70"></dd>
                    <dt><h2>Tools</h2></dt>
                    <dd>Balsamiq,</dd>
                    <dd>Sketch,</dd>
                    <dd>Agile Development,</dd>
                    <dd>Scrum,</dd>
                    <dd>Adobe Photoshop,</dd>
                    <dd>Illustrator,</dd>
                    <dd>Fireworks,</dd>
                    <dd>Flash,</dd>
                    <dd>Drawing,</dd>
                    <dd>Graphic Design</dd>
                </dl>
            </article>
            <article>
                <!--mg src="../assets/img/akta_screen.png" id="ani1" class="slideRight" alt="AKTA Screen" /-->
            </article>
        </section>
        <?php include("../assets/inc/foot.inc.php"); ?>   
    </div> 
</body>
</html>
