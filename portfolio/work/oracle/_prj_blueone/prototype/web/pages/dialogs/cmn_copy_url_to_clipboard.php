<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Copy URL to Clipboard","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Copy URL to Clipboard","Part &bull; P00034","","","Close");
		$ui->addMessage("info","Use CTRL-C to copy the URL to the clipboard.  Use CTRL-V to paste.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic">
		<textarea id="first_field" class="optionbox long_width">http://minime.demo.agile.com/Agile/PLMServlet?from PCCLient=true&module=ItemHandle=andSomeMoreStuff=toMakeThisLonger=aLotLonger=howDoesThisWork&andNow=howDoesThisWork</textarea>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
</form>	
<? $ui->printPage(); ?>