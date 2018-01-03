<?php include("config.inc"); ?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en-gb"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en-gb"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en-gb"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en-gb"> <!--<![endif]-->
<head>
  <title><?php echo homeTitle ?></title>
  <?php include("includes/shell/head.inc.php"); ?></head>
<body>
<div id="wrapper">
	<section class="authenticate">
	    <img src="img/logo_vendavo_icon_green.png" alt="Vendavo" id="logo" />
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
