<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Send","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Send","Change &bull; C01701","","Send","Cancel");
		$ui->addMessage("info","Please fill in the fields below to send this change. Seperate multiple names with semicolons.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side with_bottom_margin">
				<dt class="required" title="Notify is required"><label for="first_field">Notify:</label></dt>
				<dd class="large_textbox">
					<textarea id="first_field" class="long_width"></textarea>
					<a href="#" ui_control_id_45de2ff04d5d64.27311321 class="button"><span><em class="iconic addressbook">&nbsp;</em></span></a>
				</dd>
			</dl>
		</fieldset>		
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<? $controls->addTextBox("xlarge","Comments","","long_width") ?>
				<dt class="place_holder">Blank</dt>
				<dd class="urgent_space">
					<input id="ui_chk_urgent" type="checkbox" name="" class="form_selectors"  />
					<label for="ui_chk_urgent">Urgent</label>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>