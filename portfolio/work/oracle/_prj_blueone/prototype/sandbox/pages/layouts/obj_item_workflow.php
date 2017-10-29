<?	//<popup>755,720</popup>
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Object Item Workflow");
	$ui->addHeader("layout_generic");
	$ui->addObjectActions();
	$ui->addTabs();
	$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onclick=\"getMessage('../dialogs/test2.php');\">More</a>");
	$ui->addPageControls("item_workflow");
?>
	<div class="container">
		<h3>Workflow Overview</h3>
		<ul class="status_indicator">
			<li class="indicator">
				<p class="label">Pending</p>
				<p class="completed">1</p>
			</li>
			<li>
				<p class="label">Submitted</p>
				<p class="completed">2</p>
			</li>
			<li class="selected">
				<p class="label">CCB</p>
				<p class="current">3</p>
			</li>
			<li class="indicator">
				<p class="label">Released</p>
				<p class="upcoming">4</p>
			</li>
			<li>
				<p class="label">Implemented</p>
				<p class="upcoming">5</p>
			</li>
		</ul>
	</div>
	
	<div class="page_controls" style="clear: both;">
	<img src="global/images/icn_workflow_status_navigator.png" alt="Status Navigator" class="column_one" />
    <p>
		<a href="#" class="button"><span>Release</span></a>
 		<a href="#" class="button"><span>Cancel</span></a>
		<a href="#" class="button"><span>Hold</span></a>
	</p>
</div>
<?
	$ui->includeFile("/layouts/utilities/resizebar.php");
	$ui->addTabs("sub_tabs");
	$ui->addViewControls("titled");
	$ui->includeFile("/layouts/tables/actions/table_actions_top.php");
	$ui->includeFile("/layouts/tables/table_handle_selected.php");
	$ui->includeFile("/layouts/tables/actions/table_actions_bottom.php");
	$ui->printPage();
?>