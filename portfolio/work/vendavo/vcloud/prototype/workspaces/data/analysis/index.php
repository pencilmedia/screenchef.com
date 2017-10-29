<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../../assets/config.inc");
    $ROOT = '../../../'; // Set root for relative paths
    $thisPage=dataTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo dataTitle ?></title>
    <?php include("../../../assets/head.inc.php"); ?>
    <!-- Specific Workspace Styles -->
    <link rel="stylesheet" type="text/css" <?php echo 'href="' . $ROOT . 'assets/css/data_upload.css"' ?> >
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../../../vshell/navbar.inc.php"); ?>
    <?php include("../../../vshell/navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("analysis.inc.php"); ?>
      <?php include("rt_panel_data.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../../../vshell/tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include("../../../assets/javascripts.inc.php"); ?>
    <!-- App: Data Price -->
    <script type="text/javascript" src="data_upload.js"></script>
  </body>
</html>
