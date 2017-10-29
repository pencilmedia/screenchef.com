<? 
	//<popup>800,600</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Print Preview","action_dialogs.js","class|print_preview");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("layout_print");
		?>
	</div>
	<div id="content" class="content">
<div class="wrapper"><!-- BEGIN: Wrapper -->
<div class="dual_columns">
	<h3>Header Name (or Tab Name)</h3>
	<div class="column_01">
		<dl class="side_by_side">
			<? $controls->addText("Number","A123456") ?>
			<? $controls->addText("List","List Value") ?>
			<? $controls->addText("Text","Some Text") ?>
			<? $controls->addText("More Text","Some Other Text") ?>
			<? $controls->addText("Text","This will be some more text") ?>
			<? $controls->addText("Multi-Text","This is a multi-text field and may contain lots of additional information. How far will we stretch it across the page?  Some customers might want it to go all the way, but it is less readable that way.  More text will go here.") ?>
		</dl>
	</div>
	<div class="column_02">
		<dl class="side_by_side">
			<? $controls->addText("More Text","Some Other Text") ?>
			<? $controls->addText("Text","This will be some more text") ?>
			<? $controls->addText("Multi-Text","This is a multi-text field and may contain lots of additional information. How far will we stretch it across the page?  Some customers might want it to go all the way, but it is less readable that way.  More text will go here.") ?>
			<? $controls->addText("Date","10/02/2006 11:50:02am PST") ?>
			<? $controls->addText("Multi-List","Value 1; Value 2; Value 3; Add a longer Value; Value 5; Value 6") ?>
			<? $controls->addText("List","Selected Value") ?>
		</dl>
	</div>
</div>
<div class="dual_columns">
	<h3>Header Name (or Tab Name)</h3>
	<div class="column_01">
		<dl class="side_by_side">
			<? $controls->addText("Project Phase","First Production") ?>
			<? $controls->addText("Brand","Essensia; ACME") ?>
			<? $controls->addText("Project type","New items") ?>
			<? $controls->addText("Overall status","On track") ?>
			<? $controls->addText("Status","In process") ?>
		</dl>
	</div>
	<div class="column_02">
		<dl class="side_by_side">
			<? $controls->addText("Project Phase","First Production") ?>
			<? $controls->addText("Brand","Essensia; ACME") ?>
			<? $controls->addText("Project type","New items") ?>
			<? $controls->addText("Overall status","On track") ?>
			<? $controls->addText("Status","In process") ?>
		</dl>
	</div>
</div>
<h4 class="print_table_header">Table 1 Name (or Tab Name)</h4>
<!--************************************
	TABLE SIMPLE
*************************************-->
	<table cellpadding="0" cellspacing="0" class="simple">
		<tr>
			<th>Col 1</th>
			<th>Col 2</th>
			<th>Col 3</th>
			<th>Col 4</th>
			<th>Col 5</th>
			<th>Col 6</th>
			<th>Col 7</th>
			<th>Col 8</th>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" class="table_simple">
		<tr>
			<td>Here is some text for the first row.</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
			<td>Here is some text for the first row.</td>
			<td>Here is some text for the first row.</td>
			<td>text</td>
			<td>text</td>
		</tr>

		<tr>
			<td>Here is some text for the second row.</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
			<td>Here is some text for the second row.</td>
			<td>Here is some text for the second row.</td>
			<td>text</td>
			<td>text</td>
		</tr>
		<tr>
			<td>Here is some text for the third row</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
			<td>Here is some text for the third row</td>
			<td>Here is some text for the third row</td>
			<td>text</td>
			<td>text</td>
		</tr>
	</table>
<h4 class="print_table_header">Table 2 Name (or Tab Name)</h4>
<!--************************************
	TABLE SIMPLE
*************************************-->
	<table cellpadding="0" cellspacing="0" class="simple">
		<tr>
			<th>Col 1</th>
			<th>Col 2</th>
			<th>Col 3</th>
			<th>Col 4</th>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" class="table_simple">
		<tr>
			<td>Here is some text for the first row.</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
		</tr>

		<tr>
			<td>Here is some text for the second row.</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
		</tr>
		<tr>
			<td>Here is some text for the third row</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
		</tr>
	</table>

<h4 class="print_table_header">Table 3 Name (or Tab Name)</h4>
<!--************************************
	TABLE SIMPLE
*************************************-->
	<table cellpadding="0" cellspacing="0" class="simple">
		<tr>
			<th>Col 1</th>
			<th>Col 2</th>
			<th>Col 3</th>
			<th>Col 4</th>
		</tr>
	</table>
	<table cellpadding="0" cellspacing="0" class="table_simple">
		<tr>
			<td>Here is some text for the first row.</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
		</tr>

		<tr>
			<td>Here is some text for the second row.</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
		</tr>
		<tr>
			<td>Here is some text for the third row</td>
			<td>Identifier</td>
			<td>text</td>
			<td>text</td>
		</tr>
	</table>
</div><!-- END: Wrapper -->
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>
