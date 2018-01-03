<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("assets/config.inc");
    $ROOT = ''; // Set root for relative paths
    $thisPage=pageNotFoundTitle;
?>
<!doctype html>
<html lang="en-gb">
	<head>
    <title>
		<?php echo internalServerErrorTitle ?></title>
		<?php include("assets/head.inc.php"); ?>
		<link rel="stylesheet" type="text/css" href="assets/css/all-issues.css">
	</head>
	<body class="internal-error">
		<article>
			<img src="assets/img/logo_vendavo_icon_green.png" alt="Vendavo" id="logo" />
			<section>
				<h1>Page Not Found</h1>
				<p>It seems something has gone wrong. We apologize for the inconvenience. If this issue persists, you may <a href="#">submit an error report</a>
				or try your request again by <a href="javascript:window.location.reload()">refreshing this page</a>.</p>
			</section>
		</article>
	</body>
</html>