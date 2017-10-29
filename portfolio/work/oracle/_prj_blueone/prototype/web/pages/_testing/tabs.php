
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/default.css" />
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/common.js"></script>
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/action_dialog.js"></script>
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/table.js"></script>
	<title>Object Discussion</title>
<style type="text/css">
	ul.tabs2 {
		list-style: none;
		margin: 0; padding: 0;
		position: relative;
		width: 100%;
		border-bottom: 1px solid #999;
		height:18px;
 	}
	
	ul.tabs2 li.first { margin-left: 10px; }
	
	ul.tabs2 li {
		float: left;
		display: block;
		padding: 0  10px 0 0;
		margin-left: -3px;
		position: relative;
		background: url(images/tabright.gif) 100% 0 no-repeat;
		white-space: nowrap;
		z-index: 1;
	}
	
	ul.tabs2 span {
		height: 12px;
		padding: 3px 0 3px 0;
		position: relative
	}
	
	html>body ul.tabs2 span {
		display: block;
	}
	
	
	ul.tabs2 li.selected span {
		background-image: url(images/tableft-selected.gif) no-repeat;
	}
	
	
	ul.tabs2 a {
		color: #333;
		text-decoration:none;
		display:block;
		background-color:#fff;
		margin-left: 15px;
		*margin-left: 3px;
	}
	
	/* Selected */
	ul.tabs2 li.indicator_gray a 
	{
		padding-right:20px;
		background: url(images/icn_status_dot_gray.png) no-repeat right center;
	}
	ul.tabs2 li.indicator_gray  
	{
		padding-right:0px;
	}
	
	ul.tabs2 span.matte {
		padding-left: 12px;
		background: url(images/trans2.gif) no-repeat top left;
		position: relative;
		background-color:#d7d7d7;
		float: left;
	}

	ul.tabs2 li.selected {
		z-index: 50;
		background-image: url(images/tabright.gif);
		position:relative;
	}

	ul.tabs2 li.selected span.matte { background-color:red;}


</style>
</head>
<body class="obj_discussion">

<!--************************************
	HEADER
*************************************-->
<div class="header_wrapper">
	<div class="column_one layout">
		<ul class="breadcrumbs">
			<li><a href="#">Breadcrumb</a> &raquo;</li>
			<li>Breadcrumb</li>
		</ul>
		<h2>Identifier</h2>
		<p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
	</div>
	<div class="column_two">
		<h2>Status / Lifecycle</h2>
		<p>[varies by object]</p>
	</div>
</div>

<!--************************************
	OBJECT LEVEL CONTROLS
*************************************-->
<div class="object_level_controls">
		<a href="#" class="button icon_with_text summary">Object Action</a>
		<a href="#" class="button icon_with_text comment">Action 2</a>
		<a href="#" class="button icon_with_text dropdown">Menu</a>
</div>

<!--************************************
	TABS
*************************************-->

<ul class="agile_tabs">
	<li class="first_tab"><a href="#"><span>General Info</span></a></li>
	<li class="selected"><a href="#"><span>Another Tab</span></a></li>
	<li class="indicator_gray"><a href="#"><span>Relationships</span></a></li>
	<li class="indicator_gray"><a href="#"><span>Attachments</span></a></li>
	<li><a href="#"><span>History</span></a></li>
</ul>

<p>&nbsp;</p>
	<ul class="tabs2">
	  <li class="first"><span class="matte"></span><span><a href="#">Another Tab</a></span></li>
	  <li class="selected"><span class="matte"></span><span><a class="new" href="#">General Info</a></span></li>
	  <li class="indicator_gray"><span class="matte"></span><span><a href="#">Relationships</a></span></li>
	  <li class="indicator_gray"><span class="matte"></span><span><a href="#">Attachments</a></span></li>
	  <li><span class="matte"></span><span><a href="#">Relationships</a></span></li>
	</ul>
	
<p>&nbsp;</p>	

<ul class="agile_tabs3">
	<li class="first_tab"><a href="#"><span>General Info</span></a></li>
	<li class="selected"><a href="#"><span>Selected</span></a></li>
	<li class="indicator_gray"><a href="#"><span>Relationships</span></a></li>
	<li class="indicator_red"><a href="#"><span>Attachments</span></a></li>
	<li><a href="#"><span>History</span></a></li>
</ul>

<!--************************************
	MESSAGES
*************************************-->
<div id="page_message" class="message info">
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href="#" class="more" onclick="getMessage('../dialogs/test2.php');">More</a></p>
</div>


<!--************************************
	PAGE CONTROLS
*************************************-->
<div class="page_controls">
    <p class="button_controls"><a href="#" class="button">Edit</a></p>
</div>

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
				<a href="#" class="button">Reply</a>
				<a href="#" class="button">Edit</a>
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
				<a href="#" class="button">Edit</a>
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
				<a href="#" class="button">Edit</a>
			</p>
		</div>
	</div>
	
	<h4>Action Items</h4>


	
<div class="table_simple_wrapper">
	<!--************************************
		TABLE SIMPLE ACTIONS
	*************************************-->
	<div class="simple_actions">
		<a href="#" class="button">Add</a>
		<a href="#" class="button">Delete</a>
	</div>
	
	<!--************************************
		TABLE SIMPLE
	*************************************-->
	<div class="scrollHeaderDiv">
		<table cellpadding="0" cellspacing="0" class="simple">
			<tr>
				<th>Col 1</th>
				<th>Col 2</th>
				<th>Col 3</th>
				<th>Col 4</th>
			</tr>
		</table>
	</div>
	<div class="scrollTableDiv" style="height:80px;">
		<table cellpadding="0" cellspacing="0" class="table_simple">
			<tr>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
			</tr>
	
			<tr>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
			</tr>
			<tr>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
			</tr>
			<tr>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
				<td>Text</td>
			</tr>
		</table>
	</div>
</div>
</body>
</html>