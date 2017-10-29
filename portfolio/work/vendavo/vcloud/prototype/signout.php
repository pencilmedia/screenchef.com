<?php
    // SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("assets/config.inc");
    $ROOT = ''; // Set root for relative paths
    $thisPage=homeTitle;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo homeTitle ?></title>
    <?php include("assets/head.inc.php"); ?>
    <!-- Specific Workspace Styles -->
    <link rel="stylesheet" type="text/css" <?php echo 'href="' . $ROOT . 'assets/css/midas.css"' ?> >
  </head>
<body>
<div id="wrapper">
	<section class="authenticate">
	    <img <?php echo 'src="' . $ROOT . 'assets/img/logo_vendavo_icon_green.png"' ?> alt="Vendavo" id="logo" />
		<div class="tab-content">
		    <!-- /////////////// -->
		    <!-- Sign Out: Tab 1 -->
		    <!-- /////////////// -->
			<div class="tab-pane fade in active" id="signout">
		    	<section class="form-sign-out">
					<form action="index.php" method="link">
						 <fieldset>
		    				<legend>Successful Sign Out</legend>
							<dl class="info-unit">
								<dd>
									<p>You have signed out of Vendavo Cloud solutions.</p>
								</dd>
							 	<dd class="list-actions">
								 	<button type="submit" class="btn btn-primary">Return to Sign In</button>
								</dd>
						 	</dl>
						 </fieldset>
			        </form>
		    	</section>
			</div>
		</div>
		<?php include("includes/signin/foot.inc.php"); ?>
	</section>
</div>
  <?php include("includes/shell/foot.inc.php"); ?>
</body>
</html>
