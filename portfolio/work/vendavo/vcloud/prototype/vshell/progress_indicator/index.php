<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo homeTitle ?></title>
    <?php include($ROOT."assets/head.inc.php"); ?>
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../navbar.inc.php"); ?>
    <?php include("../navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("progress.inc.php"); ?>
      <?php include("progress_details.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include($ROOT."assets/javascripts.inc.php"); ?>
    <script src="progress.js" type="text/javascript"></script> <!-- PROTO JS -->
  </body>
</html>