<section class="authenticate">
	<p class="btns-register">
		<a href="#signin" data-toggle="tab" class="btn btn-primary btn-signin">Sign In</a>
		<a href="#register" data-toggle="tab" class="btn btn-primary btn-register">Sign Up Free</a>
	</p>
    <img <?php echo 'src="' . $ROOT . 'assets/img/logo_vendavo_icon_green.png"' ?> alt="Vendavo" id="logo" />

	<div class="tab-content">
	    <!-- /////////////// -->
	    <!-- Register: Tab 1 -->
	    <!-- /////////////// -->
		<div class="tab-pane fade in" id="register">
			<section class="form-register">
		    <?php include("register.inc.php"); ?>
			</section>
		</div>

	    <!-- /////////////// -->
	    <!-- Authentication Flows: Tab 2 -->
	    <!-- /////////////// -->
		<div class="tab-pane fade in active" id="signin">
			<section class="form-entry">
				<form action="sign_in_submit" method="get">
					<div class="alert alert-block alert-info">
						<h4><i class="icon-info-sign"></i>Scheduled Maintenance</h4>
						<p>Vendavo will be unavailable starting Saturday at 10pm through Sunday at 1am.</p>
					</div>
					 <fieldset>
						<dl class="info-unit">
							<dd id="proto-username">
					 			<input type="text" name="username" placeholder="Username" id="inputUsername" autofocus required />
							 </dd>
							<dd>
							 	<input type="password" name="password" placeholder="Password" id="inputPassword" required />
							 	<label class="checkbox"><input type="checkbox">Remember my username on this computer.</label>
						 	</dd>
						 	<dd class="list-actions">
							 	<button type="button" class="btn btn-primary" id="proto-signin">Sign in</button>
							 	<a href="#" id="proto-form-recovery">Trouble signing in?</a>
							</dd>
					 	</dl>
					 </fieldset>
		        </form>
		    	</section>
		    	<section class="form-recovery">
				<form action="recover_submit" method="get">
					 <fieldset>
	    				<legend>Recover Your Password</legend>
						<dl class="info-unit">
							<dd>
							 	<input type="text" name="email" placeholder="Enter Work Email" id="inputEmail" required />
						 	</dd>
						 	<dd class="list-actions">
							 	<button type="button" class="btn btn-primary" id="proto-check-email">Send Recovery Email</button>
							 	<a href="#">Return to Sign In</a>
							</dd>
					 	</dl>
					 </fieldset>
		        </form>
		    	</section>
		    	<section class="form-check-email">
				<form action="check_email" method="get">
					 <fieldset>
	    				<legend>Check Your Email</legend>
						<dl class="info-unit">
							<dd>
								<p>We have sent you an email with instructions for resetting your password.</p>
							</dd>
						 	<dd class="list-actions">
							 	<button type="button" class="btn btn-primary" id="proto-email-sent">Return to Sign In</button>
							</dd>
					 	</dl>
					 </fieldset>
		        </form>
		    	</section>
		    	<section class="form-security">
				<form action="security_submit" method="get">
					 <fieldset>
	    				<legend>Answer Security Question</legend>
						<dl class="info-unit">
							<dd>
								<label>What is the name of your favorite pet?</label>
							 	<input type="text" name="text" placeholder="Enter Your Answer" id="inputSecurityAnswer" required />
						 	</dd>
						 	<dd class="list-actions">
							 	<button type="button" class="btn btn-primary" id="proto-security-answer">Submit</button>
							</dd>
					 	</dl>
					 </fieldset>
		        </form>
		    	</section>
		    	<section class="form-reset-password">
				<form action="reset_password" method="get">
					 <fieldset>
	    				<legend>Create a New Password</legend>
						<dl class="info-unit">
							<dd>
								<input type="password" name="new-password" id="newPassword" placeholder="New Password" rel="popover" required />
						 		<span class="help-block">Password does not conform to policy.</span>
						 	</dd>
							<dd>
							 	<input type="password" name="confirm-password" id="confirmPassword" placeholder="Confirm Password" required />
						 	</dd>
						 	<dd class="list-actions">
							 	<button type="button" class="btn btn-primary" id="proto-reset-password">Submit</button>
							</dd>
					 	</dl>
					 </fieldset>
		        </form>
		    	</section>
		    	<section class="form-system-down">
		    		<article>
		    		<h1>Undergoing Maintenance</h1>
		    		<div class="alert alert-block alert-info">
		    			<h4><i class="icon-info-sign"></i>We'll be back at 1am</h4>
						<p>Vendavo is currently undergoing scheduled maintenance. Please try back at approximately 1am. We apologize for the inconvenience.</p>
					</div>
					</article>
		    	</section>
		</div>

	    <!-- /////////////// -->
	    <!-- Sign Out: Tab 3 -->
	    <!-- /////////////// -->
		<div class="tab-pane fade in" id="signout">
		    <!-- /////////////// -->
		    <!-- SIGN OUT -->
		    <!-- /////////////// -->
			<section class="form-sign-out">
		    	<?php include("signout.inc.php"); ?>
			</section>
		</div>
	<?php include("includes/authenticate/foot.inc.php"); ?>
	</div>
</section>