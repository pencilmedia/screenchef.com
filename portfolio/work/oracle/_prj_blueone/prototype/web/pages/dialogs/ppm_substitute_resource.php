<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Substitute Resource","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Substitute Resource","Program &bull; Hybrid Propulsion System","Apply to all levels","Save","Cancel");
		$ui->addMessage("info","The users/user groups shown in the From Resource list are members of the team at this level or below of the program.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side with_bottom_margin">
				<dt class="required" title="From Resource is required"><span>*</span><label for="first_field">From Resource:</label></dt>
				<dd>
					<select id="first_field" class="long_width">
						<option value="" selected="selected"></option>
						<option value="">Anne Radcliff (aradcliff)</option>
						<option value="">Jane Doe (jdoe)</option>
						<option value="">Paul Maguire (pmaguire)</option>
						<option value="">Ronald Borg (rborg)</option>						
					</select>
				</dd>
				<dt class="required" title="To Resource is required"><span>*</span><label for="ui_control_id_45f086c5726e91.78267965">To Resource:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45f086c5726e91.78267965" class="long_width" value="" />
					<a href="#" ui_control_id_45f086c5727e66.29275478 class="button"><span><em class="iconic addressbook">&nbsp;</em></span></a>
				</dd>
			</dl>
		</fieldset>
	  </form>
	</div>
<? $ui->printPage(); ?>