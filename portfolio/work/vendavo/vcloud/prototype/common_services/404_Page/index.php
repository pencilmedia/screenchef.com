<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=pageNotFoundTitle;
?>
<!doctype html>
<html lang="en-gb">
	<head>
		<?php echo internalServerErrorTitle ?></title>
		<?php include("../../assets/head.inc.php"); ?>
		<link rel="stylesheet" type="text/css" href="all-issues.css">
	</head>
	<body class="internal-error">
		<article>
			<img src="img/logo_vendavo_icon_green.png" alt="Vendavo" id="logo" />
			<section>
				<h1>Page Not Found</h1>
				<p>It seems something has gone wrong. We apologize for the inconvenience. <br />If this issue persists, you may <a href="#">submit an error report</a>.</p>
			</section>
		</article>
	</body>
</html>