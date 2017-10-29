<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=customerUsersTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo customerUsersTitle ?></title>
    <?php include("../../assets/head.inc.php"); ?>
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../../vshell/navbar.inc.php"); ?>
    <?php include("../../vshell/navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("customer_user.inc.php"); ?>
      <?php include("customer_user_details.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../../vshell/tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include("../../assets/javascripts.inc.php"); ?>
    <!-- App: CUSTOMER USERS -->
    <script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspaces/customer_users/customer_user_details.js"' ?>></script>
  </body>
</html>
