<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create New","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create New","Published Prices","Continue creation in wizard","Save","Cancel");
		$ui->addMessage("info","Select the Type to create and then fill in the required fields.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic first_fieldset">
			<dl class="side_by_side">
				<dt class="required" title="Type is required"><span>*</span><label for="first_field">Type:</label></dt>
				<dd>
					<select id="first_field" class="required medium_width" onchange="ui_select_type_onchange(this.id)">
						<option value="" selected="selected"></option>
						<option value="contract">Contract</option>
						<option value="published price">Published Price</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<fieldset class="dynamic">
			<dl id="ui_toggle_01" class="side_by_side">
				<dt class="required"><span>*</span><label for="ui_control_id_45d388e51190a6.27893484">Price Number:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_4" value="15368" class="auto_number_field medium_width disabled" disabled="disabled" />
					<a href="#" id="ui_control_id_45" onclick="increment('ui_control_id_4');return false;" class="button"><span><em class="iconic auto_number">&nbsp;</em></span></a>
				</dd>
				<dt class="required" title="Number is required"><span>*</span><label>Number:</label></dt>
				<dd class="combo_elements">
					<select class="element_one">
						<option value="" selected="selected">Item</option>
						<option value="">Manufacturer Part</option>
					</select>
					<input id="ui_required_01" type="text" value="" class="required element_two" />
					<a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em></span></a>
				</dd>
				<dt><label for="ui_control_id_45ff0ac325a5c8.83337132">Manufacturing Site:</label></dt>
				<dd>
					<select id="ui_control_id_45ff0ac325a5c8.83337132" class="medium_width">
						<option value="" selected="selected"></option>
						<option value="">Austin</option>
						<option value="">Boston</option>
						<option value="">Milwaukee</option>
						<option value="">Nagoya</option>
						<option value="">Sacramento</option>
						<option value="">Saratoga</option>
						<option value="">Stuttgart</option>
						<option value="">Taipei</option>
						<option value="">Xiamen</option>
					</select>
				</dd>
				<dt class="required" title="Supplier is required"><span>*</span><label for="ui_control_id_45f0671319e8b8.12587097">Supplier:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45f0671319e8b8.12587097" class="required medium_width"  value="" />
					<a href="#" ui_control_id_45f0671319f1d8.87251066 class="button"><span><em class="iconic view_details">&nbsp;</em></span></a>
				</dd>
				<dt><label for="ui_control_id_45ff0ac325ac74.79398463">Program:</label></dt>
				<dd>
					<select id="ui_control_id_45ff0ac325ac74.79398463" class="medium_width">
						<option value="all" selected="selected">All</option>
						<option value="">2007 - PC Server</option>
						<option value="">2008 - PC Server</option>
						<option value="">GPS - Mini</option>
						<option value="">NPI - Hand Held Group</option>
						<option value="">NPI - Transmitter Group</option>
					</select>
				</dd>
				<dt><label for="ui_control_id_45ff0ac325b258.66299730">Customer:</label></dt>
				<dd>
					<select id="ui_control_id_45ff0ac325b258.66299730" class="medium_width">
						<option value="all" selected="selected">All</option>
						<option value="">Frank Konstein (CUST00023)</option>
						<option value="">Mark Manager (CUST00053)</option>
						<option value="">St. Vincent (CUST00002)</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	   </form>
	</div>
<? $ui->printPage(); ?>