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
            <a href="#" class="button"><span><em class="join_discussion">&nbsp;</em> Join</span></a>
            <a href="#" class="button"><span> Close</span></a>
            <a href="#" class="button" id="toggle_discussion_menu"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
    </div>
    <!--************************************
        TABS
    *************************************-->
    <div class="tabs_container skin_default">
        <ul class="tabs">
            <li class="first_tab"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_05/car_templates/obj_discussion.php','loadDiscussionActionItemsMenu()');"><span>Discussion<em>&nbsp;</em></span></a></li>
            <li class=""><a href="#"><span>Details<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray selected"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_05/car_templates/obj_discussion_action_items.php','loadDiscussionActionItemsMenu()');"><span>Action Items<em>&nbsp;</em></span></a></li>
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
</div>
<div id="PaneContent" class="frame_pinned">
    <div class="ObjectFull">  
    	<div class="view_controls">             
        	<h4>Action Items</h4>
        </div> 
            <!--************************************
                TABLE SIMPLE ACTIONS
            *************************************-->
                <div class="simple_actions">
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Delete</span></a>
                </div>
        <!--************************************
            TABLE HANDLE
        *************************************-->
        <div class="scrollHeaderDiv">
            <table cellpadding="0" cellspacing="0">
        
                <tr>
                    <th class="handle">&nbsp;</th>
                    <th class="w15">&nbsp;</th>
                    <th class="resize">&nbsp;</th>
                    <th class="w15">&nbsp;</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 2</th>
                    <th class="resize">&nbsp;</th>
        
                    <th>Col 3</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 4</th>
                    <th class="resize">&nbsp;</th>
                </tr>
            </table>
        </div>
        <div class="scrollTableDiv">
            <table cellpadding="0" cellspacing="0" class="pointer">
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
        
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
            </table>
        </div>
	</div>
        <p class="bottom_buffer">&nbsp;</p>
    </div>
</div>