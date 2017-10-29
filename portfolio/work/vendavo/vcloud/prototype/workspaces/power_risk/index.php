<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=powerRiskTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo usersTitle ?></title>
    <?php include("../../assets/head.inc.php"); ?>
    <!-- Specific Workspace Styles -->
    <link rel="stylesheet" type="text/css" <?php echo 'href="' . $ROOT . 'assets/css/power_risk.css"' ?> >
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../../vshell/navbar.inc.php"); ?>
    <?php include("../../vshell/navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("sunburst.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../../vshell/tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include("../../assets/javascripts.inc.php"); ?>
    <!-- App: Powe & Risk -->
    <script src="http://d3js.org/d3.v3.min.js"></script>
    <script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspaces/power_risk/sunburst.js"' ?>></script>
  </body>
</html>
