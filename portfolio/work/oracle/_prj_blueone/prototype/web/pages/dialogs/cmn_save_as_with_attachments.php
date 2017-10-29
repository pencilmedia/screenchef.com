<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Save As","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Save Part P00034 As...","Resistor &bull; P00034","","Save","Cancel");
		$ui->addMessage("info","Complete the following form and click Save to create a new object.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side">
			<dt class="required" title="Type is required"><span>*</span><label for="first_field">Type:</label></dt>
			<dd>
				<select id="first_field" class="long_width">
					<option value="resistor">Assembly</option>
					<option value="resistor">Capacitor</option>
					<option value="resistor">Connector</option>
					<option value="resistor">Diode</option>
					<option value="resistor">Fan</option>
					<option value="resistor">Fuse</option>
					<option value="resistor">Hardware</option>
					<option value="resistor">IC</option>
					<option value="resistor">Label</option>
					<option value="resistor">Packaging</option>
					<option value="resistor">Part</option>
					<option value="resistor" selected="selected">Resistor</option>
					<option value="resistor">Switch</option>
					<option value="resistor">Transistor</option>
					<option value="resistor">Tubing</option>
				</select>
			
			</dd>	
			<dt class="required" title="Number is required"><span>*</span><label for="ui_control_id_45f0b47094e723.98759719">Number:</label></dt>
			<dd>
				<input type="text" id="ui_control_id_45f0b47094e723.98759719" value="00248" class="auto_number_field disabled long_width" disabled="disabled" />
				<a href="#" id="ui_control_id_45f0b47094ead3.48397451" onclick="increment('ui_control_id_45f0b47094e723.98759719');return false;" class="button"><span><em class="iconic auto_number">&nbsp;</em></span></a
			</dd>
				<? $controls->addTextBox("large","Description","This is the description carried over from the original part.","long_width"); ?>
				<dt>Product Lines:</dt>
				<dd class="large_textbox">
					<textarea id="ui_control_id_45f0b5fc9bdb14.65218633" class="long_width"></textarea>
					<a href="#" ui_control_id_45f0b5fc9beb19.11034205 class="button"><span><em class="iconic view_details">&nbsp;</em></span></a>
				</dd>
				<? $controls->addTextBox("small","Originator","Maguire, Paul (pmaguire)","long_width","ico|addressbook"); ?>
			</dl>
		</fieldset>
		<fieldset>
			<legend>Save Attachements</legend>
			<dl class="side_by_side selector_list">
			<dt class="place_holder">Blank</dt>
			<dd><input id="existing" type="radio" name="attachments" class="form_selectors" checked /> <label for="existing">Reference existing files</label></dd>
			<dt class="place_holder">Blank</dt>
			<dd><input id="new_copy" type="radio" name="attachments" class="form_selectors" /> <label for="new_copy">Create new copies of files</label></dd>
			<dt class="place_holder">Blank</dt>
			<dd><input id="no_include" type="radio" name="attachments"  class="form_selectors" /> <label for="no_include">Do not include files</label></dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>