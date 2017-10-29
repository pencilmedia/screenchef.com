<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    $ROOT = '../../'; // Set root for relative paths
    include($ROOT . "assets/config.inc");
    $thisPage = "approval";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo vsnbTitle ?></title>
    <?php include($ROOT . "assets/head.inc.php"); ?>
  </head>
  <body>
    <main class="vsnb">
      <!-- Sidebar and Nav Content -->
      <?php include($ROOT . "vshell/left_pane.inc.php"); ?>
      <?php include($ROOT . "vshell/navbar.inc.php"); ?>

      <!-- BEGIN: Page Content -->
      <?php include($ROOT . "workspace/approval/approval.inc.php"); ?>
      <!-- END: Page Content -->

      <!-- VSN Includes -->
      <?php include($ROOT . "workspace/menus/vsn.popovers.inc.php"); ?>
      <?php include($ROOT . "workspace/menus/vsn.modals.inc.php"); ?>
    </main>
    <!-- VSN Javascript -->
    <?php include($ROOT . "assets/javascripts.inc.php"); ?>
    <!-- Page Specific JS -->
    <script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspace/approval/approval.js"' ?>></script>
  </body>
</html>
