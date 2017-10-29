<? 
	//<popup>500,340</popup>	
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Add Items","action_dialog");
	$controls = new AgileUIControls();
	$ui->addHeader("action_dialog","Add Items","PSR &bull; PR00023","","Save","Cancel");
	$ui->addMessage("info","Enter one number per row.  To specify a revision, type a space and then the revision after the number.");
?>
<style>

	.short 	{ width: 15% !important; }
	.medium { width: 35% !important; }
	.long 	{ width: 55% !important; }
	a.button
	{ 
		background-color: #f7f7f7; 
		border-top: 1px solid #c1c1c1; 
		border-right: 1px solid #a8a8a8; 
		border-bottom: 1px solid #a8a8a8; 
		border-left: 1px solid #c1c1c1; 
		padding: 3px;
		float: left;
		white-space:nowrap;
	}
	a.button:hover { background-color: #e6e6e6; cursor: pointer; }
	a.button.icon
	{
		width: 18px;
		background-repeat: no-repeat; 
		background-position: 3px;
	}
	a.button.icon_with_text
	{
		padding-left: 24px;
		background-repeat: no-repeat;
		background-position: 3px;
	}

	
</style>

<fieldset class="dynamic">
	<dl class="side_by_side with_bottom_margin">
		<dt><label for="ui_control_id_45d0cd02493880.49466804">Item Numbers:</label></dt>
		<dd>
			<input type="text" id="ui_control_id_45d0cd02493880.49466804" value="Short" class="short" />
			<a href="#" class="button">Test</a>
		</dd>
		
		<dt><label for="ui_control_id_45d0cd02493880.49466804">Item Numbers:</label></dt>
		<dd>
			<input type="text" id="ui_control_id_45d0cd02493880.49466804" value="Medium" class="medium" />
			<a href="#" class="button icon addressbook">&nbsp;</a>
		</dd>

		<dt><label for="ui_control_id_45d0cd02493880.49466804">Item Numbers:</label></dt>
		<dd>
			<input type="text" id="ui_control_id_45d0cd02493880.49466804" value="Long" class="long" />
			<a href="#" class="button icon_with_text addressbook">This</a>
		</dd>

	</dl>
</fieldset>
<? $ui->printPage(); ?>