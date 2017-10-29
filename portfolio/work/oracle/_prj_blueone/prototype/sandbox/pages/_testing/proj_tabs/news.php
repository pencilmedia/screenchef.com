<div id="ux_palette" class="ux_palette news">
    <div id="ux_palette_top" class="ux_palette_top">
        <div id="ux_palette_header" class="ux_palette_header">
            <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
          <h4 id="ux_palette_title" class="ux_palette_title">News &bull; News Title</h4>
            <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
        </div>
      <!-- Optional Top Action Bar
        <div id="ux_palette_top_action_bar" class="ux_palette_top_action_bar">
            <div class="right_column">
                <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
                <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
            </div>
            <div class="left_column">&nbsp;</div>
        </div>
        -->
    </div>

    <div id="ux_palette_main" class="ux_palette_main ux_palette_no_drag">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_text with_top_margin">
                <dt><label for="type">Type:</label></dt>
                <dd>Information</dd>
                <dt><label for="txt_field_00">Title:</label></dt>
                <dd>Information vs. Bulletin</dd>
                <dt><label for="multitext_counter">News:</label></dt>
                <dd>Information vs Bulletin what is the difference? Adding more content might not be good</dd>
                <dt><label for="ssl_00">Owner:</label></dt>
                <dd><a href="#">Anthony Moquette</a></dd> 
                <dt class="mixed_text"><label for="autoNumber">Create Date:</label></dt>
                <dd class="mixed_text"><p>01/10/2007 06:15:15 PM PST</p></dd>
            </dl>
        </fieldset>
		</form>
    </div>

    <div id="ux_palette_bottom" class="ux_palette_bottom">
        <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
            <div class="right_column">
                <a href="#" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
                <a href="#" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
                <span class="btn_divide"></span>
                <a href="#" class="button"><span>Close</span></a> 
            </div>
            <div class="left_column">
            </div>
        </div>
        <div id="ux_palette_handle" class="ux_palette_handle nodrag">&nbsp;</div>
  </div>
</div>



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
                    <li><a href="#" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/collab.php', 'mainwin',function() { popMessage('fyi'); })">Discussions</a></li>
                    <li><a href="#" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/action_items.php', 'mainwin',function() { loadThumbnailForm(); } )">Action Items</a></li>
                    <li class="selected"><a href="#">News</a></li>
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
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
 <!-- BEGIN: Object Content -->
<!--************************************
	VIEW CONTROLS
*************************************-->
<div class="view_controls">
	<h4>News</h4>
	<p><label>View:</label>
		<select name="" class="short_width">
			<option value="">All Content</option>
			<option value="">Information</option>
			<option value="">Bulletin</option>
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
            <th>Date</th>
            <th class="resize">&nbsp;</th>
            <th>Type</th>
            <th class="resize">&nbsp;</th>
            <th>Title</th>
            <th class="resize">&nbsp;</th>
            <th>News</th>
            <th class="resize">&nbsp;</th>
            <th>Owner</th>
            <th class="resize">&nbsp;</th>
            <th class="resize">Date 01</th>
            <th class="resize">&nbsp;</th>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td>05/05/08 09:23:04PM PST</td>
            <td class="resize"></td>
            <td>Information</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#" class="launch_viewer_news">Information vs. Bulletin</a></td>
            <td class="resize">&nbsp;</td>
            <td>Information vs Bulletin what is the difference? Adding more content might not be good</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Anthony Moquette</a></td>
            <td class="resize">&nbsp;</td>
            <td>05/05/08 09:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td>05/04/08 07:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Bulletin</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#" class="launch_viewer_news"> Title for news</a></td>
            <td class="resize">&nbsp;</td>
            <td>Information vs Bulletin what is the difference? Adding more content might not be good</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Ralph Garcia</a></td>
            <td class="resize">&nbsp;</td>
            <td>05/05/08 09:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td>05/05/08 10:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Information</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#" class="launch_viewer_news">UX Information</a></td>
            <td class="resize">&nbsp;</td>
            <td>Information vs Bulletin what is the difference? Adding more content might not be good</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">John Doe</a></td>
            <td class="resize">&nbsp;</td>
            <td>05/05/08 09:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td>05/06/08 09:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Information</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#" class="launch_viewer_news">User Interface</a></td>
            <td class="resize">&nbsp;</td>
            <td>Information vs Bulletin what is the difference? Adding more content might not be good</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Ralph Garcia</a></td>
            <td class="resize">&nbsp;</td>
            <td>05/05/08 09:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td>05/05/08 12:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
            <td>Bulletin</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#" class="launch_viewer_news">Information vs. Bulletin</a></td>
            <td class="resize">&nbsp;</td>
            <td>Information vs Bulletin what is the difference? Adding more content might not be good</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Jane Doe</a></td>
            <td class="resize">&nbsp;</td>
            <td>05/05/08 09:23:04PM PST</td>
            <td class="resize">&nbsp;</td>
        </tr>                        
    </table>
</div>
<div class="table_status_bar">
    <? include($_SERVER['DOCUMENT_ROOT'] . "/includes/layouts/tables/table_footer.php"); ?>
</div>
<div class="bom_demo_table_filler" id="bomTableFiller"></div>
<!-- END: Object Content -->
	</div>
</div>