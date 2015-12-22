<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../assets/config.inc");
    $ROOT = '../'; // Set root for relative paths
    $thisPage="work"; 
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
            <article>
                <h1>Visit <a href="http://www.pencilmedia.com" target="_blank">pencilmedia.com</a></h1>
                <p>One day when I have time, I will revisit this with some awesomeness.</p>
            </article>
        </section>
        <?php include("../assets/inc/foot.inc.php"); ?>   
    </div> 
</body>
</html>
