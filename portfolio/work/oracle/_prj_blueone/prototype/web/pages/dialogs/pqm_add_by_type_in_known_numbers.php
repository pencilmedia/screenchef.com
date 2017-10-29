<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Add Items","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Add Items","PSR &bull; PR00023","","Save","Cancel");
		$ui->addMessage("info","Enter one number per row.  To specify a revision, type a space and then the revision after the number.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side with_bottom_margin">
				<dt class="required" title="Item Numbers is required"><span>*</span><label for="first_field">Item Numbers:</label></dt>
				<dd class="extra_large_textbox">
					<textarea id="first_field" class="long_width"></textarea>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	  </form>
	</div>
<? $ui->printPage(); ?>