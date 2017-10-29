<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create New...","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create New","Parts","Continue creation in wizard","Save","Cancel");
		$ui->addMessage("info","Select the Type to create and then fill in the required fields.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
			<dt class="required" title="Type is required"><span>*</span><label for="first_field">Type:</label></dt>
			<dd>
				<select id="first_field" class="long_width" onchange="ui_select_type_onchange(this.id)">
					<option value="" selected="selected"></option>
					<option value="">Assembly</option>
					<option value="">Capacitor</option>
					<option value="">Connector</option>
					<option value="">Diode</option>
					<option value="">Fan</option>
					<option value="">Fuse</option>
					<option value="">Hardware</option>
					<option value="">IC</option>
					<option value="">Label</option>
					<option value="">Packaging</option>
					<option value="">Part</option>
					<option value="">Resistor</option>
					<option value="">Switch</option>
					<option value="">Transistor</option>
					<option value="">Tubing</option>
				</select>
			</dd>
			</dl>
			<dl id="ui_toggle_01" class="side_by_side">
				<dt class="required" title="Number is required"><span>*</span><label for="ui_control_id_45f5d5b5ea7c06.70214104">Number:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45f5d5b5ea7c06.70214104" value="320034" class="auto_number_field disabled long_width" disabled="disabled" />
					<a href="#" id="ui_control_id_45f5d5b5ea7fd2.27898427" onclick="increment('ui_control_id_45f5d5b5ea7c06.70214104');return false;" class="button"><span><em class="iconic auto_number">&nbsp;</em></span></a>
				</dd>
				<dt class="required" title="Description is required"><span>*</span><label for="ui_control_id_45f0682ed9e681.18736128">Description:</label></dt>
				<dd class="large_textbox">
					<textarea id="ui_control_id_45f0682ed9e681.18736128" class="long_width"></textarea>
				
				</dd>
				<dt class="required" title="Size is required"><span>*</span><label for="ui_control_id_45f0682ed9eb83.08771820">Size:</label></dt>
				<dd>
					<select id="ui_control_id_45f0682ed9eb83.08771820" class="long_width">
						<option value="">A</option>
						<option value="">B</option>
						<option value="">C</option>
						<option value="">D</option>
						<option value="">E</option>
						<option value="">F</option>
						<option value="">G</option>
						<option value="">H</option>
					</select>
				</dd>
				<dt class="required" title="Controller is required"><span>*</span><label for="ui_control_id_45f0682ed9f067.00550896">Controller:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45f0682ed9f067.00550896" class="long_width" value="" />
					<a href="#" ui_control_id_45f0682ed9f948.45486781 class="button"><span><em class="iconic addressbook">&nbsp;</em></span></a>
				</dd>

			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	  </form>
	</div>
<? $ui->printPage(); ?>