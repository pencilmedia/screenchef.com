<!DOCTYPE html>
<html id="default"> 
<head>
	<meta charset="utf-8" />
	<title>Oracle | UX Direct</title>
	<? include( "includes/header.php" ) ?>
</head>
<body>
    <header>
		<div id="header_middle">
			<div class="container">
				<div id="primary">
					<!-- TOP NAVIGATION -->
					<? include( "includes/top_navigation.php" ) ?>
				</div>
				
				<div id="secondary">
					<div id="slogan">
						<!-- LOGO -->
						<? include( "includes/logo.php" ) ?>
						<!-- HOMEPAGE BANNER -->
						<? include( "includes/homepage_banner.php" ) ?>
   					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- MAIN CONTENT -->
	<section>
		<div class="container">
			<div class="main_content">
				<img src="images/arrow.png" class="step_arrow one" />
				<img src="images/arrow.png" class="step_arrow two" />
				<section class="left">
					<a class="photo_hover" href="employee_needs.php"><img src="images/users.png" width="240" height="125" alt="picture1"/></a>
					<h3>Know your employees&apos; needs</h3>
				</section>
				<section class="middle">
					<a class="photo_hover" href="#"><img src="images/ux_designs.png" width="240" height="125" alt="picture1"/></a>
					<h3>Customize to fit your employees&apos; needs</h3>
				</section>
				<section class="right">
					<a class="photo_hover" href="#"><img src="images/uxlabssession.png" width="240" height="125" alt="picture1"/></a>
					<h3>Iteratively test with your employees</h3>
				</section>
			</div>
		</div>
	</section>
	<!-- END MAIN CONTENT -->
	<? include( "includes/footer.php" ) ?>
	<script type="text/javascript">
	$(window).load(function() {
        $('#slider').nivoSlider();
    });
	</script>
</body>
</html>