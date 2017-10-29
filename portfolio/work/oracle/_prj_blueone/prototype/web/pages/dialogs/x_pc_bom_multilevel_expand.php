<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Expand BOM","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Expand BOM","Assembly &bull; 1000-32","","OK","Cancel");
		$ui->addMessage("info","Specify the number of levels to expand to or check all levels.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side selector_list top_space">
				<dt><label for="first_field">Levels:</label></dt>
				<dd>
					<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" /> 
				    <label for="ui_print_levels">Expand <input id="first_field" name="" value="1" size="2" class="field_input_small inline_box" /> levels</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd><input id="ui_all_levels" type="radio" name="bom" class="form_selectors" /> <label for="ui_all_levels">All levels</label></dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>
