<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../../assets/config.inc");
    $ROOT = '../../'; // Set root for relative paths
    $thisPage=customerAccountsTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo homeTitle ?></title>
    <?php include("../../assets/head.inc.php"); ?>
    <!-- Specific Workspace Styles -->
    <link rel="stylesheet" type="text/css" <?php echo 'href="' . $ROOT . 'assets/css/vss.css"' ?> >
  </head>
  <body>
    <!-- Navbar -->
    <?php include("../../vshell/navbar.inc.php"); ?>
    <?php include("../../vshell/navbar_menus.inc.php"); ?>
    <main class="cloudshellWork">
      <?php include("customer_accounts.inc.php"); ?>
      <?php include("customer_accounts_details.inc.php"); ?>
      <!-- //////////////// -->
      <!-- MODAL TOURS -->
      <?php include("../../vshell/tours/tours.inc.php"); ?>
      <!-- //////////////// -->
    </main>
    <?php include("../../assets/javascripts.inc.php"); ?>
    <!-- App: Customer Accounts -->
    <script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspaces/customer_accounts/customer_accounts_details.js"' ?>></script>
  </body>
</html>
