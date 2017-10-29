<? 
	//<popup>525,400</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Reply to Discussion","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Reply to Discussion","Discussion &bull; Need more Safari Testing","","Send","Cancel");
		$ui->addMessage("info","Complete the following fields to reply to this discussion.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side">
			<dt class="required" title="Subject is required"><span>*</span><label for="first_field">Subject:</label></dt>
			<dd>
				<input type="text" id="first_field" class="long_width" value="RE: Need more Safari testing" />
			</dd>
			<dt><label for="ui_control_id_45df9462cf4681.05446640">Message:</label></dt>
<dd class="extra_large_textbox">
	<textarea id="ui_control_id_45df9462cf4681.05446640"  class="required long_width"></textarea>
</dd>

				<?// $controls->addTextBox("xlarge","Message","required","long_width") ?>
			</dl>
		</fieldset>
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<? $controls->addTextBox("large","Notify","Smith, Joe (jsmith); Lincoln, Abe (alink); Sanders, Barry","long_width","ico|addressbook") ?>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>