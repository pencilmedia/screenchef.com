<? 
	//<popup>525,350</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create RFx Routing","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create RFx Routing","Distributor &bull; ARROW","","Save","Cancel");
		$ui->addMessage("info","Set the owner and geography, then click save.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<dt class="required" title="Owner is required"><span>*</span><label for="first_field">Owner:</label></dt>
				<dd>
					<select id="first_field" class="long_width">
						<option value=""></option>
				
					</select>
				</dd>
			</dl>
		</fieldset>		
		
		<fieldset>
			<legend>Geography</legend>
			<dl class="side_by_side with_top_margin">
				<dt class="required" title="Continent is required"><span>*</span><label for="ui_control_id_45f083b7b17179.87876545">Continent:</label></dt>
				<dd>
					<select id="ui_control_id_45f083b7b17179.87876545" class="long_width">
						<option value=""></option>
					</select>
				</dd>
				<dt><label for="ui_control_id_45f0842bce7645.36361322">Country/Area:</label></dt>
				
				<dd>
					<select id="ui_control_id_45f0842bce7645.36361322" class="disabled long_width" disabled="disabled">
						<option value=""></option>
					</select>
				</dd>
				<dt><label for="ui_control_id_45f0842bce7c38.89058964">State/Province/Region:</label></dt>
				<dd>
					<select id="ui_control_id_45f0842bce7c38.89058964" class="disabled long_width" disabled="disabled">
						<option value=""></option>
				
					</select>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>