<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Change Status","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Change Status to CCB","Change &bull; C01707","","Save","Cancel");
		$ui->addMessage("info","Please fill in the fields below to route this change to the next status.  Separate multiple names with semicolons.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side">
			<dt><label for="first_field">Approvers:</label></dt>
			<dd class="large_textbox">
				<textarea id="first_field" class="long_width"></textarea>
				<a href="#" class="button"><span><em class="addressbook">&nbsp;</em></span></a>
			</dd>
			<dt><label for="ui_control_id_45edde58611f87.57735841">Observers:</label></dt>
			<dd class="large_textbox">
				<textarea id="ui_control_id_45edde58611f87.57735841" class="long_width"></textarea>
				<a href="#" ui_control_id_45edde58613c23.62391155 class="button"><span><em class="addressbook">&nbsp;</em></span></a>			
			</dd>
			<dt><label for="ui_control_id_45edde58613f16.94969544">Notify:</label></dt>
			<dd class="large_textbox">
				<textarea id="ui_control_id_45edde58613f16.94969544" class="long_width"></textarea>
				<a href="#" ui_control_id_45edde586187e5.53750522 class="button"><span><em class="addressbook">&nbsp;</em></span></a>
			</dd>
			</dl>
		</fieldset>
		
		<fieldset class="dynamic">
			<dl class="side_by_side">
			<dt><label for="ui_control_id_45edde58618ad4.27670755">Comments:</label></dt>
			<dd class="extra_large_textbox">
				<textarea id="ui_control_id_45edde58618ad4.27670755" class="long_width"></textarea>
			</dd>				
			<dt class="place_holder urgent_space">Blank</dt>
				<dd class="urgent_space">
						<input id="ui_chk_urgent" type="checkbox" name="" class="form_selectors" />
						<label for="ui_chk_urgent">Urgent</label>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
</form>
<? $ui->printPage(); ?>