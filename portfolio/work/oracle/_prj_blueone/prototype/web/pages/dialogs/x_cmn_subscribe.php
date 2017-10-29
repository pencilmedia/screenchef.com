<? 
	//<popup>525,425</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Subscribe","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Subscriptions","Change &bull; C-00230610","","Save","Cancel");
		$ui->addMessage("info","Please select the items you would like to subscribe to for change C-00230610.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="input_lists">
			<legend>Status Options</legend>
			<ul class="column_one">	
				<li><input id="first_field" type="checkbox" name="" value="" class="form_selectors" /> <label for="first_field">Status change</label></li>
			</ul>
		</fieldset>
		<fieldset class="input_lists">
			<legend>Field Options</legend>
			<ul class="column_one">	
				<li><input id="ui_select_all" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_select_all">Select all</label></li>
				<li><input id="ui_page_two_cm" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_page_two_cm">Page Two CM visibility</label></li>
			</ul>
			<ul class="column_two">
				<li><input id="ui_page_two_explanation"  type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_page_two_explanation">Page Two Explanation for Change</label></li>
			</ul>
		</fieldset>
		<fieldset class="input_lists">
			<legend>File Options</legend>
			<ul class="column_one">	
				<li><input id="ui_add_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_add_file">Add file</label></li>
				<li><input id="ui_delete_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_delete_file">Delete file</label></li>
				<li><input id="ui_checkin_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_checkin_file">Checkin file</label></li>
			</ul>
			<ul class="column_two">
				<li><input id="ui_checkout_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_checkout_file">Checkout file</label></li>
				<li><input id="ui_cancel_checkout" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_cancel_checkout">Cancel Checkout</label></li>
			</ul>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>