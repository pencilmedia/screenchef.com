<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Export","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Export","RFQ &bull; RFQ000453","","Continue","Close");
		$ui->addMessage("info","Select the output format and click Continue.  After downloading the attachment click close.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side selector_list">
				<dt>Output Format:</dt>
				<dd>
					<input id="first_field" type="radio" name="s1" class="form_selectors" value="1" checked="checked" />
					<label for="first_field">CSV (comma-delimited)</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="workbook" type="radio" name="s1" class="form_selectors" value="2" />
					<label for="workbook">Microsoft&reg; workbook</label>
				</dd>
			</dl>
		</fieldset>		
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	  </form>
	</div>
<? $ui->printPage(); ?>