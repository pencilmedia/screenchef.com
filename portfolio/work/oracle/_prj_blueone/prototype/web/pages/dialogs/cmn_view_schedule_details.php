<? 
	//<popup>525,425</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("View Schedule Details","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","View Report Schedule Details","Bom Explosion Report","","","Close");
		$ui->addMessage("info","View the details of the scheduled report.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<dl class="side_by_side_text with_bottom_margin">
			<? $controls->addText("Layout Name","DEFAULT LAYOUT") ?>
			<? $controls->addText("Enabled","Yes") ?>
		</dl>
		<dl class="side_by_side_text with_bottom_margin">
			<? $controls->addText("Schedule Frequency","Mondays") ?>
			<? $controls->addText("Schedule Time","01/15/2007 12:00:00AM PST") ?>
		</dl>
		<dl class="side_by_side_text with_bottom_margin">
			<? $controls->addText("Share with Users","User Experience Team; Steve Van Lare (svanlare); Brian Cipresse(bcipresse)") ?>
		</dl>
		<dl class="side_by_side_text">
			<? $controls->addText("Item Numbers","1090-00 (B ECO-00867) [ALL]") ?>
			<? $controls->addText("Depth","All Levels") ?>
			<? $controls->addText("Type","Assembly; Assembly Procedures; Document; Fuse; IC; Label; Part; Part Family; Resistor; SOP; Transistor;") ?>
		</dl>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
	</div>
<? $ui->printPage(); ?>
