<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=accountTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo accountTitle ?></title>
    <?php include("../../assets/head.inc.php"); ?>
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../../vshell/navbar.inc.php"); ?>
    <?php include("../../vshell/navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("account_profile.inc.php"); ?>
      <?php include("account_profile_details.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../../vshell/tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include("../../assets/javascripts.inc.php"); ?>
    <!-- App: Customer Accounts -->
    <script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspaces/account_profile/account_profile.js"' ?>></script>
  </body>
</html>
