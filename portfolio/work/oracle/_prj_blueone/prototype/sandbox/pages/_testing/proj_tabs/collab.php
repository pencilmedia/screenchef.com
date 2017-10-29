<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">P00325</a> &raquo; LJ-400-E New Product Development</li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>LJ-400-E New Product Development</h2>
			<p><strong>Program</strong> &bull; This is a new product providing a sporting model for the LJ-400. The description will not be allowed to go on forever.</p>
		</div>
	
		<div class="column_two">
			<h2>In Progress</h2>
			<p>[varies by object]</p>
		</div>
        <div class="column_three">
            <ul class="rating">
                <li class="traffic_red">Overall Status</li>
                <li class="traffic_green">Schedule Status</li>
                <li class="traffic_yellow">Cost Status</li>
                <li class="traffic_red">Resources Status</li>
                <li class="traffic_grey">Quality Status</li>
            </ul>
        </div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
    <div class="object_level_controls">
        <form action="#">
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Summary</span></a>
            <span class="btn_divide"></span> 
            <a href="#" class="button"><span><em class="view_gannt">&nbsp;</em> Gantt</span></a>
			<span class="btn_divide"></span> 
            <a href="#" class="button"><span>Change Status<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
            <a href="#" class="button" id="cmd_proj_tabs_action_menu_00"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
    </div>
</div>
<!--************************************
    TABS
*************************************-->
<div class="tabs_container skin_default special_case">
    <ul class="tabs">
        <li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Schedule<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Dependencies<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Team<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Content<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected">
            <a href="#"><span>Collaboration<em>&nbsp;</em></span></a>
            <ul>
                <li class="selected"><a href="#">Discussions</a></li>
                <li><a href="#" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/action_items.php', 'mainwin',function() { loadThumbnailForm(); } )">Action Items</a></li>
      	  		<li><a href="#" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/news.php', 'mainwin',function() { loadThumbnailForm(); })">News</a></li>
            </ul>
        </li>
        <li class="indicator_gray"><a href="#"><span>Workflow<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History<em>&nbsp;</em></span></a></li>
    </ul>
</div>   
<!--************************************
    MESSAGES
*************************************-->
<div id="dms" class="message info">
    <p class="text"><span class="asterisk">*</span> Reminder: Correct object-based dependencies.</p>
</div>

<div id="PaneContent" class="frame_pinned">
	<div class="Object">
 <!-- BEGIN: Object Content -->

<!--************************************
	VIEW CONTROLS
*************************************-->
<div class="view_controls">
	<h4>Discussions</h4>
	<p>
		<input type="checkbox" id="levels" class="form_selectors"/><label class="checkbox" for="levels">Display all levels</label>
    	&nbsp;
        <label>View:</label>
		<select name="" class="short_width">
			<option value="">Open Discussions</option>
			<option value="">Close Discussions</option>
		</select>
        <a href="#" class="button"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
	</p>
</div>

<!--************************************
	TABLE ACTIONS
*************************************-->
<div class="table_actions">

	<div class="column_one no_width">
		<p>
			<a href="#" class="button"><span>Add</span></a>
			<a href="#" class="button"><span>Remove</span></a>
            <span class="btn_divide"></span>
			<a href="#" class="button"><span>Reply</span></a>
			<a href="#" class="button"><span>Join</span></a>
			<a href="#" class="button"><span>Close</span></a>
            <span class="btn_divide"></span>
			<a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em></span></a>
		</p>
	</div>
	<div class="column_three">
		<p>
			<a href="#" class="button"><span>Save</span></a>
			<a href="#" class="button"><span>Cancel</span></a>
		</p>
	</div>
</div>
<!--************************************
	TABLE HANDLE PINNED
*************************************-->
<div class="noScrollTableDiv">
    <table cellpadding="0" cellspacing="0">
        <tr>
            <th class="handle">&nbsp;</th>
            <th class="w15">&nbsp;</th>
            <th class="resize">&nbsp;</th>
            <th class="icon_cell icn_obj_action_item"></th>
            <th class="resize">&nbsp;</th>
            <th class="icon_cell icn_attachments"></th>
            <th class="resize">&nbsp;</th>
            <th>Subject</th>
            <th class="resize">&nbsp;</th>
            <th>Replies</th>
            <th class="resize">&nbsp;</th>
            <th>Last Reply</th>
            <th class="resize">&nbsp;</th>
            <th>Status</th>
            <th class="resize">&nbsp;</th>
            <th>Creator</th>
            <th class="resize">&nbsp;</th>
            <th>Number</th>
            <th class="resize">&nbsp;</th>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell ico_obj_discussion_reply"></td>
            <td class="resize"></td>
            <td><img alt="text" src="global/images/icn_status_dot_gray.png"/></td>
            <td class="resize">&nbsp;</td>
            <td><img alt="text" src="global/images/icn_status_dot_gray.png"/></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Need to buy hardware for Linux server</a></td>
            <td class="resize"></td>
            <td>1</td>
            <td class="resize">&nbsp;</td>
            <td>10:00 PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Open</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Anthony Moquette</a></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">D000112</a></td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell ico_obj_discussion_reply"></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Has anyone else experience problems with their server?</a></td>
            <td class="resize">&nbsp;</td>
            <td>12</td>
            <td class="resize">&nbsp;</td>
            <td>9:50 PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Open</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Ralph Garcia</a></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">D000113</a></td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell ico_obj_discussion_reply"></td>
            <td class="resize">&nbsp;</td>
            <td><img alt="text" src="global/images/icn_status_dot_gray.png"/></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Best approach to recruiting test candidates</a></td>
            <td class="resize">&nbsp;</td>
            <td>49</td>
            <td class="resize">&nbsp;</td>
            <td>9:45 PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Open</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">John Doe</a></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">D000116</a></td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell ico_obj_discussion"></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">What else can we discuss here?</a></td>
            <td class="resize">&nbsp;</td>
            <td>0</td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td>Closed</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Ralph Garcia</a></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">D000100</a></td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell ico_obj_discussion_reply"></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Go blueONE!</a></td>
            <td class="resize">&nbsp;</td>
            <td>4</td>
            <td class="resize">&nbsp;</td>
            <td>10:32 PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Closed</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Jane Doe</a></td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">D000099</a></td>
            <td class="resize">&nbsp;</td>
        </tr>                        
    </table>
<div id="previewMoveDiv" class="prvMoveDiv"></div>
<style>
/* These styles need a home */

.object_messages
{

border-top:0;
height:267px;
margin-bottom:0;
margin-top:0px;
overflow:auto;
padding:10px 20px;
width:auto;
}
</style>


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
            <p class="message_buttons">
            </p>
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
            <p class="message_buttons">
            </p>
        </div>
    </div>
</div>
		<div class="table_status_bar">
			<? include($_SERVER['DOCUMENT_ROOT'] . "/includes/layouts/tables/table_footer.php"); ?>
		</div>


<div class="bom_demo_table_filler" id="bomTableFiller"></div>

<!-- END: Object Content -->
	</div>
<!--************************************
	RESIZE BAR
*************************************-->
<!-- 
<div class="prvMoveDiv" id="previewMoveDiv"></div>

<div class="Preview">
-->
<!-- BEGIN: Preview Content -->

<!-- END: Preview Content -->
</div>