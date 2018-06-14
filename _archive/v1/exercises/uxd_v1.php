<?php include("../global/config.inc"); ?>
<?php $thisPage = "exercises"; ?>
<!--[if lt IE 7 ]><html lang="en" class="no-js ie6"><![endif]-->
<!--[if IE 7 ]><html lang="en" class="no-js ie7"><![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><!DOCTYPE html class="no-js"><!--<![endif]-->

<head>
<title><?php echo exercisesTitle ?></title>
<?php include("../global/inc/head.inc.php"); ?>
<link type="text/css" rel="stylesheet" href="uxd_animate.css">
<style type="text/css">

html, body { height: 100%; }
body { background: url(uxd_img/iStockLady.jpg) no-repeat center center; background-size: cover; }
.pane { height: 100%; box-sizing: border-box; outline: 1px solid #666; }
#lt_pane { background-color: rgba(255,0,0,.8); position: relative; top:0; left: -40%; width:100%; border-right: 1px solid #fff; }
#rt_pane { background-color: rgba(238,238,238,.8); position: relative; top: -100%; right: -60%; border-left: 1px solid #fff; }
#lt_pane:hover { background-color: #C91C0E; }
#rt_pane:hover { background-color: #ccc; }

.pane h1 { position:relative; padding:.25em 1em; color:#e9e9e9; cursor: pointer; }
.pane h1:hover { color: #999; }
#lt_pane h1 { top: 45%; left: 34em; width: 5em; z-index: 9; background: #333 url(uxd_img/lt_arrow.png) no-repeat .2em center; }
#rt_pane h1 { top: 55%; right: 1.25em; width: 7em; text-align: right; background: #333 url(uxd_img/rt_arrow.png) no-repeat 8em center; }
#rt_pane h1 + h1 { top: 60%; right: 4em; width: 9em; text-align: center; background-image: url(uxd_img/lt_arrow.png), url(uxd_img/rt_arrow.png); background-position: .2em center, 10em center; background-repeat: no-repeat; }
#logo{ position: absolute; bottom: 1em; left: 1em; z-index: 99; color: #fff; }

</style>
</head>
<body id="uxd">
        <h2 id="logo">ux direct</h2>
    <div id="lt_pane" class="pane ltPaneClose">
        <h1 id="identify">Identify</h1>
    </div>
    <div id="rt_pane" class="pane rtPaneClose">
        <h1 id="experiences">Experiences</h1>
        <h1 id="resources">Design Resources</h1>
    </div>
<script>
$(document).ready(function() {
	// Open Left Pane
	$('#identify').click(function() {
		if ( $('#lt_pane').hasClass('ltPaneClose') ) {
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneContentOpen');
			$('.rtPaneClose').removeClass('rtPaneClose').addClass('rtPaneOpen');
		}
		if ( $('#lt_pane').hasClass('ltPaneOpen') ) {
			$('.ltPaneOpen').removeClass('ltPaneOpen').addClass('ltPaneContentOpen');
			$('.rtPaneContentOpen').removeClass('rtPaneContentOpen').addClass('rtPaneOpen');
		}
	});
	// Open Right Pane
	$('#experiences').click(function() {
		if ( $('#rt_pane').hasClass('rtPaneClose') ) {
			$('.rtPaneClose').removeClass('rtPaneClose').addClass('rtPaneContentOpen');
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneOpen');
		}
		if ( $('#rt_pane').hasClass('rtPaneOpen') ) {
			$('.rtPaneOpen').removeClass('rtPaneOpen').addClass('rtPaneContentOpen');
			$('.ltPaneContentOpen').removeClass('ltPaneContentOpen').addClass('ltPaneOpen');
		}
	});
	
	// Open Both Pane
	$('#resources').click(function() {
		if ( $('#rt_pane').hasClass('rtPaneClose') ) {
			$('.rtPaneClose').removeClass('rtPaneClose').addClass('rtPaneOpen');
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneOpen');
		}
		if ( $('#rt_pane').hasClass('rtPaneOpen') ) {
			$('.rtPaneOpen').removeClass('rtPaneOpen').addClass('rtPaneOpen');
			$('.ltPaneContentOpen').removeClass('ltPaneContentOpen').addClass('ltPaneOpen');
		}
		if ( $('#rt_pane').hasClass('rtPaneContentOpen') ) {
			$('.rtPaneContentOpen').removeClass('rtPaneContentOpen').addClass('rtPaneOpen');
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneOpen');
		}
		
	});
	
});
</script>

</body>
</html>
