<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("File Upload Method","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","File Upload Method","&nbsp;","Do not prompt me again","OK","Cancel");
		$ui->addMessage("info","Select your preferred method of uploading files. [Include text describing benefits of each method.]");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side selector_list">
			<dt class="place_holder">blank</dt>
					<dd><input type="radio" name="ui_control_id_45de2a82c05a12.25477507" class="form_selectors form_selectors" value="using the advanced file upload tool" id="first_field" checked="checked"  /><label for="first_field">Use the Advanced File Upload tool</label></dd>
			<dt class="place_holder">blank</dt>
					<dd><input type="radio" name="ui_control_id_45de2a82c05a12.25477507" class="form_selectors form_selectors" value="using the standard upload capability" id="ui_control_id_45de2a82c07016.93530266"   /><label for="ui_control_id_45de2a82c07016.93530266">Use the standard upload capability</label></dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>