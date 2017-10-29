<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=settingsTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo settingsTitle ?></title>
    <?php include("../../assets/head.inc.php"); ?>
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../../vshell/navbar.inc.php"); ?>
    <?php include("../../vshell/navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("account_settings.inc.php"); ?>
      <?php include("account_settings_details.inc.php"); ?>
      <?php include("sharing_settings_details.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../../vshell/tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include("../../assets/javascripts.inc.php"); ?>
    <!-- App: Customer Accounts -->
    <script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspaces/account_settings/account_settings.js"' ?>></script>
  </body>
</html>
