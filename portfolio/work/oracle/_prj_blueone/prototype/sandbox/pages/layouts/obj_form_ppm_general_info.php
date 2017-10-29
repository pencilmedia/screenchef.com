<?	//<popup>700,750</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Oject Form","","action_dialogs.js","class|obj_form");
?>
<div id="header" class="header">
	<?
		$ui->addHeader("layout_generic");
		$ui->addObjectActions();
		$ui->addTabs();
		$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onclick=\"getMessage('../dialogs/test2.php');\">More</a>");
	?>
	<!--************************************
		PAGE CONTROLS
	*************************************-->
	<div class="page_controls">
		<p class="button_controls"><a href="xobj_form_ppm_general_info_edit.php" class="button"><span>Edit</span></a></p>
	</div>
</div>
<div id="content" class="content">
	<div class="container">
        <h3 class="first">Special Section</h3>
		<p>556 days of effort required &bull; 21% complete</p>
		<? $ui->includeFile("/layouts/tables/table.php") ?>
		<h3>Page 1</h3>
		<dl class="side_by_side_text">
			<dt>Auto Number:</dt>
				<dd>Text</dd>
			<dt>Type Menu:</dt>
				<dd>Text</dd>
			<dt>Single-Select User:</dt>
				<dd><a href="#">User Link</a></dd>
			<dt>Single Select User:</dt>
				<dd>&nbsp;</dd>
			<dt>Text Input:</dt>
				<dd>Text</dd>
			<dt>Textarea:</dt>
				<dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</dd>
			<dt>Text Link:</dt>
				<dd>&nbsp;</dd>
			<dt>Text Link 2:</dt>
				<dd>&nbsp;</dd>
			<dt>Menu Text:</dt>
				<dd>&nbsp;</dd>
		</dl>
		<h3>Page 2</h3>
		<dl class="side_by_side_text">
			<dt>Menu:</dt>
				<dd>List Value</dd>
			<dt>Multi-Select Menu:</dt>
				<dd>Value 1; Value 2</dd>
			<dt>Text:</dt>
				<dd>Text typed in here</dd>
		</dl>
	</div>
	
</div>

<? $ui->printPage(); ?>