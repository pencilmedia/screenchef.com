<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create New","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<script type="text/javascript">addLoadEvent(ui_quantity_breaks_selected)</script>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create New","Sourcing Projects","Continue creation in wizard","Save","Cancel");
		$ui->addMessage("info","Select the Type to creqate and then fill in the required fields.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<dt class="required" title="Type is required"><span>*</span><label for="first_field">Type:</label></dt>
				<dd>
					<select id="first_field" class="long_width" onchange="ui_select_type_onchange(this.id)">
						<option value=""></option>
						<option value="sourcing project">Sourcing Project</option>
					</select>
				</dd>
			</dl>
			<dl id="ui_toggle_01" class="side_by_side">
			<dt class="required"><span>*</span><label for="ui_control_id_45ff14b1155dc0.25480277">Number:</label></dt>
			<dd>
				<input type="text" id="ui_control_id_45ff14b1155dc0.25480277" value="100664" class="auto_number_field disabled long_width" disabled="disabled" />
				<a href="#" id="ui_control_id_45ff14b11565e1.97469082" class="button" onclick="increment('ui_control_id_45ff14b1155dc0.25480277');return false;"><span><em class="iconic auto_number">&nbsp;</em></span></a>
			</dd>
				<dt class="required" title="Text is required"><span>*</span><label for="ui_control_id_45f08466a1dd79.07322989">Text:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45f08466a1dd79.07322989" class="long_width" value="" />
				</dd>
			</dl>
		</fieldset>
		<fieldset id="ui_toggle_02">
			<legend><input id="ui_quantity_breaks" type="radio" class="form_selectors" name="select_title" checked="checked" onclick="ui_quantity_breaks_selected(this.id)" /><label for="ui_quantity_breaks">Quantity Breaks</label></legend>
			<dl class="side_by_side with_top_margin">
			<dt><label for="ui_number_01">Number:</label></dt>
			<dd>
				<select id="ui_number_01" class="short_width">
					<option value="1" selected="selected">1</option>
					<option value="">2</option>
					<option value="">3</option>
					<option value="">4</option>
					<option value="">5</option>
					<option value="">6</option>
				</select>
			</dd>
			</dl>
		</fieldset>
		<fieldset id="ui_toggle_03">
			<legend><input id="ui_effectivity_period" type="radio" class="form_selectors" name="select_title" onclick="ui_effectivity_periods_selected(this.id)" /><label for="ui_effectivity_period">Effectivity Periods</label></legend>
			<dl class="side_by_side with_top_margin">
				<dt><label for="ui_number_date">Number of Date Periods:</label></dt>
				<dd>
					<select id="ui_number_date" name="" class="short_width">
						<option value="" selected="selected">1</option>
						<option value="">2</option>
						<option value="">3</option>
						<option value="">4</option>
						<option value="">5</option>
						<option value="">6</option>
						<option value="">7</option>
						<option value="">8</option>
						<option value="">9</option>
						<option value="">10</option>
						<option value="">11</option>
						<option value="">12</option>
						<option value="">13</option>
						<option value="">14</option>
						<option value="">15</option>
						<option value="">16</option>
						<option value="">17</option>
						<option value="">18</option>
						<option value="">19</option>
						<option value="">20</option>
					</select>
				</dd>
				<dt><label for="ui_period_type">Period Type:</label></dt>
				<dd>
					<select id="ui_period_type" class="short_width">
						<option value="" selected="selected">Monthly</option>
						<option value="">Quarterly</option>
						<option value="">Semi-Annually</option>
						<option value="">Yearly</option>
						<option value="">Variable</option>
					</select>
				</dd>
				<dt id="dynamic_require"><label for="ui_start_date" id="ui_start_date_label">Start Date:</label></dt>
				<dd>
					<input type="text" id="ui_start_date" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em></span></a>
				</dd>
				<dt><label for="ui_quantity_break">Quantity Breaks per Period:</label></dt>
				<dd>
					<select id="ui_quantity_break" class="short_width" >
						<option value="" selected="selected">1</option>
						<option value="">2</option>
						<option value="">3</option>
						<option value="">4</option>
						<option value="">5</option>
						<option value="">6</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>