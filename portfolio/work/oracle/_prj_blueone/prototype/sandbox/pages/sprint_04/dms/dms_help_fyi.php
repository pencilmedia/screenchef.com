<?	//<popup>700,660</popup>
	require_once "../../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Object Table Tab","","","onload|popMessage('fyi');");
	$ui->addHeader("layout_generic");
	$ui->addObjectActions();
?>
	<script type="text/javascript" src="../../../global/js/yui/yahoo/yahoo.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/event/event.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/dom/dom.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/animation/animation.js"></script>
	<script type="text/javascript" src="../../../global/js/_ux.not.for.production.js"></script>
<?
	$ui->addTabs();
	//$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onclick=\"getMessage('popHelp.php');\">More</a>");
?>
	<div class="fyibar" id="fyibar">
    	<p id="fyi" class="bgd">&nbsp;</p>
    	<p class="text"><span class="asterisk">*</span> Submission of form data was completed successfully!</p> 
    </div>
<?	$ui->addTabs("sub_tabs");
	$ui->addPageControls();
	$ui->addViewControls("titled");
	$ui->includeFile("/layouts/tables/actions/table_actions_top.php");
	$ui->includeFile("/layouts/tables/table_handle_pinned.php");
	$ui->includeFile("/layouts/tables/actions/table_actions_bottom.php");
	$ui->printPage();
?>