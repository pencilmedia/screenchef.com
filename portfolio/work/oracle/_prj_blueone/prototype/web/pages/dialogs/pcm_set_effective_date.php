<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Set Effective Date...","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Set Effective Date...","PCO &bull; PC00041","","Save","Cancel");
		$ui->addMessage("info","Select a date and click Save to auto-populate the Effective Date field.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<dt class="required" title="Effective Date is required"><span>*</span><label for="first_field">Effective Date:</label></dt>
				<dd>
					<input type="text" id="first_field" class="long_width" value="" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em></span></a>
				</dd>
				<dt class="place_holder top_spacer">Blank</dt>
				<dd class="top_spacer">
						<input id="ui_chk_apply_to_all" type="checkbox" name="" class="form_selectors" checked="checked" />
						<label for="ui_chk_apply_to_all">Apply to all Items</label>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	  </form>	
 	</div>
<? $ui->printPage(); ?>