<?	//<popup>700,660</popup>
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Object Table Tab");
	$ui->addHeader("layout_generic");
	$ui->addObjectActions();
?>
	<script type="text/javascript">
	function launch_dialog(page,w,h){window.open (page, "_blank", "status=0,toolbar=0,resizable=1, width=" + w + ", height=" + h + ", scrollbars=0");}
	function getMessage()
	{
		launch_dialog('/pages/_testing/popReminder.php',525,300);return false;
	}
	function getHelp()
	{
		launch_dialog('/pages/_testing/popHelp.php',525,300);return false;
	}
    </script>
	<div class="reminderbar">
    	<p>Reminder: Correct object-based dependencies(or similar generic message) <a href="#" class="more" onclick="getMessage()">More</a></p>
    </div>
<?
	$ui->addTabs();
	$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onclick=\"getHelp();\">More</a>");
	$ui->addTabs("sub_tabs");
	$ui->addPageControls();
	$ui->addViewControls("titled");
	$ui->includeFile("/layouts/tables/actions/table_actions_top.php");
	$ui->includeFile("/layouts/tables/table_handle_pinned.php");
	$ui->includeFile("/layouts/tables/actions/table_actions_bottom.php");
	$ui->printPage();
?>
