<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Field Sizes","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Field Sizes","Change &bull; C01701","","Save","Cancel");
		$ui->addMessage("info","Tests all the different field types and sizes.");
		?>
	</div>
	<div id="content" class="content">
	<form name="form1" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side selector_list">
				<? $controls->addText("addText","Text goes here.") ?>

				<dt>Notify:</dt>
				<dd>
					<input id="focus" type="checkbox" name="" class="form_selectors" /> <label for="focus">Change Analyst</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_originator" type="checkbox" name="" class="form_selectors" /> <label for="ui_originator">Originator</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_reviews" type="checkbox" name="" class="form_selectors" /> <label for="ui_reviews" style="float: left;">Reviewers for</label>
					<select class="inline_selectbox">
						<option value="">Current Status</option>
					</select>
				</dd>
				<? $controls->addTextBox("large","","","long_width","ico|complete,ico|addressbook") ?>
				<? $controls->addTextBox("large","","","medium_width","ico|complete,ico|addressbook") ?>
				<? $controls->addTextBox("large","","","short_width","ico|complete,ico|addressbook") ?>
				<? $controls->addTextBox("large","","","","ico|complete,ico|addressbook") ?>

				<? $controls->addTextBox("xlarge","","","long_width","ico|complete,ico|addressbook") ?>
				<? $controls->addTextBox("large","","","medium_width","ico|complete,ico|addressbook") ?>
				<? $controls->addTextBox("medium","","","short_width","ico|complete") ?>
				<? $controls->addTextBox("","","","","") ?>

			</dl>
		</fieldset>
</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>