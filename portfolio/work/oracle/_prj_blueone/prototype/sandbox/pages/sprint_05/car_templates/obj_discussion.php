<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">Need to get an iMac to test for Safari</a></li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>Need to get an iMac to test for Safari</h2>
			<p><strong>Discussion</strong></p>
		</div>
		<div class="column_two">
			<h2>Open</h2>
			<p>[varies by object]</p>
		</div>
        <div class="column_three">
        </div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
    <div class="object_level_controls">
            <a href="#" id="cmd_join_discussion" onclick="objects.discussion.discussion.cmd_join_discussion_onClick()" class="button"><span><em class="join_discussion">&nbsp;</em> Join</span></a>
            <a href="#" class="button"><span> Close</span></a>
            <a href="#" class="button" id="toggle_discussion_menu"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
    </div>
    <!--************************************
        TABS
    *************************************-->
    <div class="tabs_container skin_default">
        <ul class="tabs">
            <li class="first_tab selected"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_05/car_templates/obj_discussion.php','loadDiscussionActionItemsMenu()');"><span>Discussion<em>&nbsp;</em></span></a></li>
            <li class=""><a href="#"><span>Details<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_05/car_templates/obj_discussion_action_items.php','loadDiscussionActionItemsMenu()');"><span>Action Items<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>History</span></a></li>
        </ul>
    </div>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container">
            <h3>Discussion Information</h3>
            <dl class="side_by_side_discussion">			
                <dt>Subject:</dt> 
                <dd>Need to get an iMac to test for Safari.</dd>
                <dt>Notify List:</dt>
                <dd id="notify_list"><a href="#">Troy Aikman</a>, <a href="#">Dan Marino</a>, <a href="#">Michael Vick</a>, <a href="#">Terry Bradshaw</a>, <a href="#">Terrell Owens</a>, <a href="#">Tom Brady</a>, <a href="#">Michael Vick</a>, <a href="#">Michael Vick</a></dd>
                <dt>Priority:</dt>
                <dd>Priority 1</dd>
                <dt>Related To:</dt>
                <dd><a href="#">T000345</a></dd>
            </dl>
                
            <h4>Messages</h4>
            <div class="object_messages">
                <div class="column_one">
                    <p>
                        This text would be a reply from Roger.  We really need an Apple computer so that we can test Safari issues. Current recommendation is to purchase an iMac.  They have great displays and are designed exceptionally well. Our other option is to get 
                        a Mac Mini.  We need to add a lot of text to see exactly how this wiill look if someone has responded with a ton of 
                        data.  At this point though, someone might get board and decide to stop reading the message alltogether.
                    </p>
                    <p class="message_author">
                        By: <cite><a href="#">Roger Staubach</a></cite>
                    </p>
                </div>
                <div class="column_two">
                    <p class="timestamp">
                        2:45 PM GMT
                    </p>
                </div>	
                <div class="column_three">
                    <p class="message_buttons">
                        <a href="#" class="button"><span>Reply</span></a><br/><br/>
                    </p>
                </div>
                <hr />
                <div class="column_one">
                    <p>
                        This text would be a reply from John.  We really need an Apple computer so that we can test Safari 
                        issues. Current recommendation is to purchase an iMac.They have great displays and are designed 
                        exceptionally well.
                    </p>
                    <p class="message_author">
                        By: <cite><a href="#">John Elway</a></cite>
                    </p>
                </div>
                <div class="column_two">
                    <p class="timestamp">
                        01/01/2007<br />
                        2:45 PM GMT
                    </p>
                </div>	
                <div class="column_three">
                </div>
                <hr />
                <div class="column_one">
                    <p>
                        We really need an Apple computer so that we can test Safari issues. Current recommendation is to 
                        purchase an iMac. They have great displays and are designed exceptionally well. Our other option is 
                        to get a Mac Mini.
                    </p>
                    <p class="message_author">
                        By: <cite><a href="#">Troy Aikman</a></cite>
                    </p>
                </div>
                <div class="column_two">
                    <p class="timestamp">
                        01/01/2007<br />
                        2:45 PM GMT
                    </p>
                </div>	
                <div class="column_three">
                </div>
            </div>
    </div>
</div>