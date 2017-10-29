<?  //<popup>750,890</popup>
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Object Discussion","","","class|obj_discussion");
	$ui->addHeader("layout_generic");
	$ui->addObjectActions("no_list");
	$ui->addTabs();
	$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onclick=\"getMessage('../dialogs/test2.php');\">More</a>");
	$ui->addPageControls("object_form");
?>
	<h3>Discussion Information</h3>
	<dl class="side_by_side_discussion">			
		<dt>Subject:</dt> 
		<dd>Need to get an iMac to test for Safari.</dd>
		<dt>Notify List:</dt>
		<dd><a href="#">Troy Aikman</a>, <a href="#">Dan Marino</a>, <a href="#">Michael Vick</a>, <a href="#">Terry Bradshaw</a>, <a href="#">Terrell Owens</a>, <a href="#">Tom Brady</a>, <a href="#">Michael Vick</a>, <a href="#">Michael Vick</a></dd>
		<dt>Priority:</dt>
		<dd>Priority 1</dd>
		<dt>Related To:</dt>
		<dd><a href="#">T000345</a></dd>
	</dl>
	
	<h4>Messages</h4>
	
	<div class="object_messages">
		<div class="column_one">
			<p>This text would be a reply from Roger.  We really need an Apple computer so that we can test Safari issues.   Current 
recommendation is to purchase an iMac.  They have great displays and are designed exceptionally well.  Our other 
option is to get a Mac Mini.  We need to add a lot of text to see exactly how this wiill look if someone has responded with 
a ton of data.  At this point though, someone might get board and decide to stop reading the message alltogether.</p>
			<p class="message_author">By: <cite><a href="#">Roger Staubach</a></cite></p>
		</div>
		<div class="column_two">
			<p class="timestamp">2:45 PM GMT</p>
		</div>	
		<div class="column_three">
			<p class="message_buttons">
				<a href="#" class="button"><span>Reply</span></a><br/><br/>
				<a href="#" class="button"><span>Edit</span></a>
			</p>
		</div>
		<hr />
		<div class="column_one">
			<p>This text would be a reply from John.  We really need an Apple computer so that we can test Safari issues.  Current 
recommendation is to purchase an iMac.They have great displays and are designed exceptionally well.</p>
			<p class="message_author">By: <cite><a href="#">John Elway</a></cite></p>
		</div>
		<div class="column_two">
			<p class="timestamp">
				01/01/2007<br />
				2:45 PM GMT
			</p>
		</div>	
		<div class="column_three">
			<p class="message_buttons">
				<a href="#" class="button"><span>Edit</span></a>
			</p>
		</div>
		<hr />
		<div class="column_one">
			<p>We really need an Apple computer so that we can test Safari issues.   Current recommendation is to purchase an iMac.
They have great displays and are designed exceptionally well.  Our other option is to get a Mac Mini.</p>
			<p class="message_author">By: <cite><a href="#">Troy Aikman</a></cite></p>
		</div>
		<div class="column_two">
			<p class="timestamp">
				01/01/2007<br />
				2:45 PM GMT
			</p>
		</div>	
		<div class="column_three">
			<p class="message_buttons">
				<a href="#" class="button"><span>Edit</span></a>
			</p>
		</div>
	</div>
	
	<h4>Action Items</h4>


	<? $ui->includeFile("/layouts/tables/table_simple.php"); ?>



<? $ui->printPage(); ?>