<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("global/config.inc");
    $ROOT = ''; // Set root for relative paths
    $thisPage="hmpg"; 
?>
<!DOCTYPE html class="no-js">
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("global/inc/head.inc.php"); ?>
<script>
$(document).ready(function() {
	$('#slideright').click(function() {
		$('#ani1').removeClass().addClass('slideRight');
		return false;
	});
	$('#slideleft').click(function() {
		$('#ani1').removeClass().addClass('slideLeft');
		return false;
	});
});
</script>
</head>
<body id="hmpg">
    <div id="wrapper">
    <?php include("global/inc/nav.inc.php"); ?>
    
        <section>
        	<h1>What's going on?</h1>
            <p>HTML5 and CSS3 is (not you, IE). Animation utilizing CSS3 transitions. jQuery used to show/hide animation classes.</p> 
            <p><a href="#" id="slideright" class="button"><span>Slide Right</span></a><a href="#" id="slideleft" class="button"><span>Slide Left</span></a></p>
            <img src="global/img/akta_screen.png" id="ani1" class="slideRight" alt="AKTA Screen" />
        </section>
            
    </div>
	<?php include("global/inc/foot.inc.php"); ?>    
</body>
</html>
