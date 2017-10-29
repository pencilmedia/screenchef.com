<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create Baseline","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create Baseline","Program &bull; 7600 Series Router","","Save","Cancel");
		$ui->addMessage("info","Enter the baseline description and click save.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side selector_list">
				<? $controls->addText("Version","1") ?>
				<dt class="required" title="Description is required"><span>*</span><label for="first_field">Description:</label></dt>
				<dd class="large_textbox">
					<textarea id="first_field" class="long_width"></textarea>
				</dd>
				<dt class="top_space">Create Date:</dt>
				<dd class="top_space">01/10/2007 06:51:35 PM PST</dd>
				</dl>
		</fieldset>
		</form>
	</div>
<? $ui->printPage(); ?>