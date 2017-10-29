<?	//<popup>1000,560</popup>
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Object Tables","","class|summary_table");
	$ui->addHeader("layout_generic");
	$ui->addObjectActions();
	$ui->addTabs();
?>
<style type="text/css">
	body.summary_table .containing_block  { overflow:auto; }
	body.summary_table h3 { padding-top:20px; margin-bottom:15px; }
	body.summary_table dl.side_by_side { min-width: 0px; }
</style>
	<div class="containing_block">
		<h3>Summary</h3>

		<dl class="side_by_side left">
			<dt>Status:</dt>
				<dd>Open</dd>
			<dt>Requote:</dt>
				<dd>0</dd>
			<dt>Total Lines:</dt>
				<dd>101</dd>
			<dt>Total Responses:</dt>
				<dd>51</dd>
		</dl>

		<dl class="side_by_side right">
			<dt>Percent Responses:</dt>
				<dd>50.5</dd>
			<dt>Due Date:</dt>
				<dd>11/29/2006 12:00:00 AM GMT</dd>
			<dt>Date Sent:</dt>
				<dd>11/11/2006 07:46:58 PM GMT</dd>
		</dl>
	</div>
<?
	$ui->addViewControls("titled");
	$ui->includeFile("/layouts/tables/actions/table_actions_top.php");
	$ui->includeFile("/layouts/tables/table_handle_pinned.php");
	$ui->includeFile("/layouts/tables/actions/table_actions_bottom.php");
	$ui->printPage();
?>
