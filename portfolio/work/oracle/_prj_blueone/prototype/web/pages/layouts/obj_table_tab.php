<?	//<popup>700,660</popup>
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Object Table Tab");
	$ui->addHeader("layout_generic");
	$ui->addObjectActions();
	$ui->addTabs();
	$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onClick=\"getMessage('../dialogs/test2.php');\">More</a>");
	$ui->addTabs("sub_tabs");
	$ui->addPageControls();
	$ui->addViewControls("titled");
	$ui->includeFile("/layouts/tables/actions/table_actions_top.php");
	$ui->includeFile("/layouts/tables/table_handle_pinned.php");
	$ui->includeFile("/layouts/tables/actions/table_actions_bottom.php");
	$ui->printPage();
?>
