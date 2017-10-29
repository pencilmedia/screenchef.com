<? 
	//<popup>525,340</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Test","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Test","PSR &bull; PR00023","","Save","Cancel");
		$ui->addMessage("info","Enter one number per row.  To specify a revision, type a space and then the revision after the number.");
		?>
	</div>
	<div id="content" class="content">
		<fieldset class="dynamic">
			<dl class="side_by_side with_bottom_margin">
				<?// $controls->addTextBox("xlarge","Item Numbers","required"); ?>

				<? $controls->addTextBox("small","Short","","short_width"); ?>
				<? $controls->addSelectBox("small","test","short_width"); ?>
				<? $controls->addTextBox("large","Short","","short_width"); ?>

				<? $controls->addTextBox("small","Medium","","medium_width"); ?>
				<? $controls->addSelectBox("Medium","test","medium_width"); ?>
				<? $controls->addTextBox("large","Medium","","medium_width"); ?>

				<? $controls->addTextBox("small","Long","","long_width"); ?>
				<? $controls->addSelectBox("Long","test","long_width"); ?>
				<? $controls->addTextBox("large","Long","","long_width"); ?>


				<? $controls->addTextBox("small","Short","","short_width","ico|calendar"); ?>
				<? $controls->addSelectBox("small","test","short_width","ico|calendar"); ?>
				<? $controls->addTextBox("large","Short","","short_width","ico|calendar"); ?>

				<? $controls->addTextBox("small","Medium","","medium_width","ico|calendar"); ?>
				<? $controls->addSelectBox("Medium","test","medium_width","ico|calendar"); ?>
				<? $controls->addTextBox("large","Medium","","medium_width","ico|calendar"); ?>

				<? $controls->addTextBox("small","Long","","long_width","ico|calendar"); ?>
				<? $controls->addSelectBox("Long","test","long_width","ico|calendar"); ?>
				<? $controls->addTextBox("large","Long","","long_width","ico|calendar"); ?>


				<? $controls->addTextBox("small","Short","","short_width","ico|calendar,ico|calendar"); ?>
				<? $controls->addSelectBox("small","test","short_width","ico|calendar,ico|calendar"); ?>
				<? $controls->addTextBox("large","Short","","short_width","ico|calendar,ico|calendar"); ?>

				<? $controls->addTextBox("small","Medium","","medium_width","ico|calendar,ico|calendar"); ?>
				<? $controls->addSelectBox("Medium","test","medium_width","ico|calendar,ico|calendar"); ?>
				<? $controls->addTextBox("large","Medium","","medium_width","ico|calendar,ico|calendar"); ?>

				<? $controls->addTextBox("small","Long","","long_width","ico|calendar,ico|calendar"); ?>
				<? $controls->addSelectBox("Long","test","long_width","ico|calendar,ico|calendar"); ?>
				<? $controls->addTextBox("large","Long","","long_width","ico|calendar,ico|calendar"); ?>


			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>