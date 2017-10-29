<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Add Items","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Add Items","Assembly &bull; 1000-34","","Save","Cancel");
		$ui->addMessage("info","Add multiple items by entering one number per row.");
		?>
	</div>
	<div id="content" class="content">
		<form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side">
				<dt class="required" title="Item Numbers is required"><span>*</span><label for="first_field">Item Numbers:</label></dt>
				<dd class="extra_large_textbox">
					<textarea id="first_field" class="long_width"></textarea>
				</dd>
				<dt><label for="ui_control_id_45f5bd6086bd89.88963579">Add for Site:</label></dt>
				<dd>
					<select id="ui_control_id_45f5bd6086bd89.88963579" class="long_width">
						<option value="">Austin</option>
						<option value="">Boston</option>
						<option value="" selected="selected">Common</option>
						<option value="">Milwaukee</option>
						<option value="">Minneapolis</option>
						<option value="">Nagoya</option>
						<option value="">Sacramento</option>
						<option value="">Saratoga</option>
						<option value="">Stuttgart</option>
						<option value="">Taipei</option>
						<option value="">Xiamen</option>
					</select>
				
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>