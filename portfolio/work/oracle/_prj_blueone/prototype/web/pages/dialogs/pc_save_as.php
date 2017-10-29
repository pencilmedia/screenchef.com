<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Save Part As...","","action_dialogs.js","class|action_dialog");
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
	<fieldset class="dynamic">
		<dl class="side_by_side">
			<dt class="required" title="Type is required"><span>*</span><label for="first_field">Type:</label></dt>
			<dd>
				<select id="first_field" class="long_width">
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
					<option value="" selected="selected">Resistor</option>
					<option value="">Switch</option>
					<option value="">Transistor</option>
					<option value="">Tubing</option>
				</select>
			</dd>
			<dt class="required" title="Number is required"><span>*</span><label for="ui_control_id_45f5d9bba78749.66816854">Number:</label></dt>
			<dd>
				<input type="text" id="ui_control_id_45f5d9bba78749.66816854" value="320034" class="auto_number_field disabled long_width" disabled="disabled" />
				<a href="#" id="ui_control_id_45f5d9bba78ae1.40478063" onclick="increment('ui_control_id_45f5d9bba78749.66816854');return false;" class="button"><span><em class="iconic auto_number">&nbsp;</em></span></a>
			</dd>
			<? $controls->addTextBox("large","Description","This is the description carried over from the original part.","long_width") ?>
			<dt><label for="product_lines">Product Lines:</label></dt>
			<dd class="large_textbox">
				<textarea id="product_lines" class="long_width"></textarea>
				<a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em></span></a>
			</dd>
			<? $controls->addTextBox("small","Originator","Maguire, Paul (pmaguire)","long_width","ico|addressbook") ?>
		</dl>
	</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>