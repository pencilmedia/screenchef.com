<meta name="description" content="Personal Website of Ralph A. Garcia" />
<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
<meta name="author" content="Ralph A. Garcia" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">

<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<?php 
	echo '<link rel="stylesheet" href="' . $ROOT . 'global/css/all.css">
	<link rel="stylesheet" href="' . $ROOT . 'global/css/animate.css">'; 
?>

<!--[if IE 9 ]>
<link rel="stylesheet" href="<?php echo path ?>/global/css/ie9.css">
<!--<![endif]-->

<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<?php echo '<script src="' . $ROOT . 'global/js/modernizr.2.0.6.js"></script>'?>