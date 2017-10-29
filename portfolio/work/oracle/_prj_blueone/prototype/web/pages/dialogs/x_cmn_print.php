<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Print Options","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Print Options","Assembly &bull; P000234","","Print","Cancel");
		$ui->addMessage("info","See what content to print and click Save.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset>
			<legend>Tabs</legend>
			<dl class="side_by_side with_top_margin selector_list">
			<dt><label for="first_field">Print:</label></dt>
				<dd><input type="radio" id="first_field" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="all tabs" checked="checked" /><label for="first_field">All tabs</label></dd>
			<dt class="place_holder">blank</dt>
		<dd><input type="radio" id="ui_control_id_45de2486c3bc79.50706018" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="<strong>title block</strong> tab only" /><label for="ui_control_id_45de2486c3bc79.50706018"><strong>Title Block</strong> tab only</label></dd>
			</dl>
		</fieldset>
		<fieldset>
			<legend>BOM</legend>
			<dl class="side_by_side with_top_margin selector_list">
				<dt><label for="ui_print_levels">Levels:</label></dt>
				<dd>
				<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" onclick="enable_print_number()" /> 
				<label for="ui_print_levels">Print <input id="ui_print_number" name="" value="1" size="2" class="field_input_small inline_box" /> levels</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
				<input id="ui_all_levels" type="radio" name="bom" value="" class="form_selectors" onclick="disable_print_number()" /> 
				<label for="ui_all_levels">All levels</label>
				</dd>
				<dt class="place_holder top_space_large">Blank</dt>		
				<dd class="top_space">
				<input id="ui_manufacturers" type="checkbox" class="form_selectors" /> 
				<label for="ui_manufacturers">Include Manufacturers</label>
				</dd>	
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>