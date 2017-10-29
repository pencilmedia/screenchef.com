<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("assets/config.inc");
    $ROOT = ''; // Set root for relative paths
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo homeTitle ?></title>
    <?php include("assets/head.inc.php"); ?>
    <!-- Specific Workspace Styles -->
    <link rel="stylesheet" type="text/css" <?php echo 'href="' . $ROOT . 'assets/css/authenticate.css"' ?> >
  </head>
  <body>
	<!-- /////////////// -->
	<!-- Sign In -->
	<!-- /////////////// -->
	<?php include("common_services/authenticate/authenticate.inc.php"); ?>
	<?php include("common_services/shell/javascripts.inc.php"); ?>
     <?php include("assets/javascripts.inc.php"); ?>
     <script src="vshell/progress_indicator/progress.js" type="text/javascript"></script> <!-- PROTO JS -->
  </body>
</html>