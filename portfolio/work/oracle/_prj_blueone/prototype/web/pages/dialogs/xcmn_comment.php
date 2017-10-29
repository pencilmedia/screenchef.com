<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Comment","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Comment","Change &bull; C01701","","Send","Cancel");
		$ui->addMessage("info","Complete the following information to comment on this change. Seperate multiple names with semicolons.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side selector_list">
				<dt class="required" title="Notify is required"><span>*</span><label>Notify:</label></dt>
				<dd>
					<input id="first_field" type="checkbox" name="" class="form_selectors" /> <label for="first_field">Change Analyst</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_originator" type="checkbox" name="" class="form_selectors" /> <label for="ui_originator">Originator</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd class="inline_selectbox">
					<input id="ui_reviews" type="checkbox" name="" class="form_selectors" /> <label for="ui_reviews" >Reviewers for</label>
					<select>
						<option value="">Current Status</option>
						<option value="">Previous Status</option>
					</select>
				</dd>
				<dt class="place_holder">blank</dt>
				<dd class="large_textbox">
					<textarea id="ui_control_id_4627a3e5947c43.53798350" class="long_width"></textarea>
					<a href="#" class="button"><span><em class="iconic addressbook">&nbsp;</em></span></a>
				</dd>
			</dl>
		</fieldset>		
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<? $controls->addTextBox("xlarge","Comments","","long_width") ?>
				<dt class="place_holder">Blank</dt>
				<dd class="urgent_space">
					<input id="ui_chk_urgent" type="checkbox" name="" class="form_selectors"  />
					<label for="ui_chk_urgent">Urgent</label>
				</dd>
			</dl>
		</fieldset>
</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>