<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Add Image","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Add Image","Program &bull; 7600 Series Router","","Save","Cancel");
		$ui->addMessage("info","Browse for the image to upload and display on the Program Summary page.  PNG or JPEG file formats are recommended.  Images will be displayed as 100x100 pixels maximum.");
		?>
	</div>
	<div id="content" class="content">
	 <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<dt class="required" title="Filename is required"><span>*</span><label for="first_field">Filename:</label></dt>
				<dd>
					<input type="file" id="first_field" class="browse medium_width" value="" />
				</dd>
			</dl>	
		</fieldset>
	  </form>
	</div>
<? $ui->printPage(); ?>