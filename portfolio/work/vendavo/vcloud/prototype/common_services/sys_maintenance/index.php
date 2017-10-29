<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=sysMaintenance;
?>
<!doctype html>
<html lang="en-gb">
	<head>
		<?php echo sysMaintenanceTitle ?></title>
		<?php include("../../assets/head.inc.php"); ?>
		<link rel="stylesheet" type="text/css" href="all-issues.css">
	</head>
	<body class="internal-error">
		<article>
			<img src="img/logo_vendavo_icon_green.png" alt="Vendavo" id="logo" />
			<section>
				<h1>System Maintenance</h1>
				<p>We are currently doing scheduled maintenance on Vendavo Cloud. We will have it back up shortly.</p>
			</section>
		</article>
	</body>
</html>