<? 
	//<popup>525,340</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create News","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create News","Tasks &bull; Comple Safari Testing","","Save","Cancel");
		$ui->addMessage("info","Enter the news and click Save");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side with_bottom_margin">
				<dt class="required" title="Title is required"><span>*</span><label for="first_field">Title:</label></dt>
				<dd>
					<input type="text" id="first_field" class="long_width" value="" />
				</dd>
				<? $controls->addTextBox("large","News","","long_width"); ?>
				
				
			</dl>
			<dl class="side_by_side top_space_large">
				<? $controls->addTextBox("small","Owner","Administrator, Agile (admin)","long_width","ico|addressbook") ?>
				<? $controls->addText("Date","01/10/2007 06:51:35 PM PST") ?>
			</dl>
		</fieldset>
	</form>
	</div>
<? $ui->printPage(); ?>