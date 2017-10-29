<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create Action Item","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create Action Item","Task &bull; Complete Safari Testing","","Save","Cancel");
		$ui->addMessage("info","Complete the following required fields to create a new action item.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side">
			<dt class="required" title="Subject is required"><span>*</span><label for="first_field">Subject:</label></dt>
			<dd>
				<input type="text" id="first_field" class="required long_width" value="Begin an example of an extra long subject so that the value is longer than the input width End" />
			</dd>
				<? $controls->addTextBox("large","Description","Begin the very long description in order to test the \n \n look of the textarea box with \n a big description and a scrollbar \ntrying to END","long_width") ?>
				<dt><label for="ui_control_id_45ef4589b325d2.19372522">Priority:</label></dt>
				
				<dd>
					<select id="ui_control_id_45ef4589b325d2.19372522" class="medium_width">
						<option value="1 - critical">1 - Critical</option>
						<option value="2 - high"> 2 - High</option>
						<option value="3 - regular" selected="selected"> 3 - Regular</option>
						<option value="4 - low"> 4 - Low</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<dt class="required" title="Owner is required"><span>*</span><label for="ui_control_id_45ef429c9ba622.33638150">Owner:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45ef429c9ba622.33638150" class="medium_width" />
					<a href="#" ui_control_id_45ef429c9baed4.42614327 class="button"><span><em class="iconic addressbook">&nbsp;</em></span></a>
				</dd>
				<? $controls->addTextBox("small","Due Date","","medium_width","ico|calendar") ?>
				<dt><label for="ui_control_id_45ef45ed6f3c65.32283812">Status:</label></dt>
				<dd>
					<select id="ui_control_id_45ef45ed6f3c65.32283812" class="medium_width">
						<option value="accepted">Accepted</option>
						<option value="canceled">Canceled</option>
						<option value="complete">Complete</option>
						<option value="in progress">In Progress</option>
						<option value="not accepted" selected="selected">Not Accepted</option>
						<option value="rejected">Rejected</option>
					</select>
				</dd>
			</dl>
		</fieldset>
</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>