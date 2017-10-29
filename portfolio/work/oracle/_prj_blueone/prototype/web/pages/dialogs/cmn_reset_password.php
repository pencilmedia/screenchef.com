<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Reset Password","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Reset Password","User &bull; user1","","Save","Cancel");
		$ui->addMessage("info","Enter the new password twice and click save to reset your password.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<? $controls->addText("UserName","user1") ?>
				<dt class="required" title="Password is required"><span>*</span><label for="first_field">Password:</label></dt>
				<dd>
					<input type="password" id="first_field" class="long_width" value="password20" >
				</dd>
				<dt class="required" title="Confirm Password is required"><span>*</span><label for="confirm_password">Confirm Password:</label></dt>
				<dd>
					<input type="password" id="confirm_password" class="long_width" value="">
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>
