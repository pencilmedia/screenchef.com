<div id="ux_palette" class="ux_palette action">
    <div id="ux_palette_top" class="ux_palette_top">
        <div id="ux_palette_header" class="ux_palette_header">
            <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
          <h4 id="ux_palette_title" class="ux_palette_title">Action Item &bull; Test Action Item</h4>
            <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
        </div>
    </div>

    <div id="ux_palette_main" class="ux_palette_main">
      <form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
        <dl class="side_by_side_mixed with_bottom_margin">
          <!-- TEXT CONTROL -->
          <dt class="required">
            <label for="txt_field_00">Subject:</label>
          </dt>
          <dd>
            <input type="text" id="txt_field_00" class="long_width" />
          </dd>
          <!-- Character Counter w/ Autoexpand Multi-text -->
          <dt>
            <label for="multitext_counter">Description:</label>
          </dt>
          <dd>
            <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
            <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
          </dd>
          <!-- Required Select -->
          <dt>
            <label for="req_sel_00">Priority:</label>
          </dt>
          <dd>
            <select id="req_sel_00" class="medium_width">
              <option value="1 - critical">1 - Critical</option>
              <option value="2 - high"> 2 - High</option>
              <option value="3 - regular" selected="selected"> 3 - Regular</option>
              <option value="4 - low"> 4 - Low</option>
            </select>
          </dd>
        </dl>
        <dl class="side_by_side_mixed">
          <!-- SINGLE SELECT LIST -->
          <dt class="required">
            <label for="ssl_00">Owner:</label>
          </dt>
          <dd>
            <div class="list_control single_list long_width">
              <input type="text" id="ssl_00" autocomplete="off" />
              <div class="auto_complete_results"></div>
              <div class="pill_container" tabindex="-1">
                <ul id="pillbox_00">
                </ul>
              </div>
            </div>
            <a href="#" id="cmd_ssl_00" class="button"><span><em class="view_details">&nbsp;</em></span></a> </dd>
          <!-- DATE CONTROL -->
          <dt>
            <label for="start_date">Due Date:</label>
          </dt>
          <dd>
            <input type="text" id="start_date" class="medium_width" value="" />
            <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a> <span class="error_msg hidden">Error message...</span> </dd>
          <!-- Required Select -->
          <dt>
            <label for="req_sel_00">Status:</label>
          </dt>
          <dd>
            <select id="req_sel_00" class="medium_width">
              <option value="accepted">Accepted</option>
              <option value="canceled">Canceled</option>
              <option value="complete">Complete</option>
              <option value="in progress">In Progress</option>
              <option value="not accepted" selected="selected">Not Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
            <span class="error_msg hidden">Error message...</span> </dd>
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
                <a href="#" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a>  
                <a href="#" class="button"><span>Close</span></a> 
            </div>
            <div class="left_column">
                <a href="#" class="button"><span>Accept</span></a> 
                <a href="#" class="button"><span>Mark Complete</span></a>
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
    <li class="indicator_gray selected"> <a href="#"><span>Collaboration<em>&nbsp;</em></span></a>
      <ul>
        <li><a href="#" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/collab.php', 'mainwin',function() { popMessage('fyi'); })">Discussions</a></li>
        <li class="selected"><a href="#">Action Items</a></li>
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
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
  <div class="Object">
    <!-- BEGIN: Object Content -->
    <!--************************************
	VIEW CONTROLS
*************************************-->
    <div class="view_controls">
      <h4>Action Items</h4>
      <p>
		<input type="checkbox" id="levels" class="form_selectors"/><label class="checkbox" for="levels">Display all levels</label>
    	&nbsp;
        <label>View:</label>
        <select name="" class="short_width">
          <option value="">All Action Items</option>
          <option value="">Open Action Items</option>
          <option value="">Close Action Items</option>
        </select>
        <a href="#" class="button"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a> </p>
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
            <a href="#" class="button"><span>Accept</span></a> <a href="#" class="button"><span>Decline</span></a>
            <a href="#" class="button"><span>Mark Complete</span></a>
        </p>
      </div>
      <div class="column_three">
        <p>
        	<a href="#" class="button"><span>Save</span></a> <a href="#" class="button"><span>Cancel</span></a>
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
          <th>Status</th>
          <th class="resize">&nbsp;</th>
          <th>Subject</th>
          <th class="resize">&nbsp;</th>
          <th class="w15">&nbsp;</th>
          <th class="resize">&nbsp;</th>
          <th>Belongs To</th>
          <th class="resize">&nbsp;</th>
          <th>Assigned To</th>
          <th class="resize">&nbsp;</th>
          <th>Due Date</th>
          <th class="resize">&nbsp;</th>
        </tr>
        <tr>
          <td class="handle">&nbsp;</td>
          <td class="icon_cell create_new"></td>
          <td class="resize">&nbsp;</td>
          <td>In Progress</td>
          <td class="resize"></td>
          <td><a href="#" class="launch_viewer_action">Test Action Item</a></td>
          <td class="resize">&nbsp;</td>
          <td class="icon_cell program">&nbsp;</td>
          <td class="resize">&nbsp;</td>
          <td>New Product Development</td>
          <td class="resize">&nbsp;</td>
          <td>Test Administrator</td>
          <td class="resize">&nbsp;</td>
          <td>07/14/08</td>
          <td class="resize">&nbsp;</td>
        </tr>
        <tr>
          <td class="handle">&nbsp;</td>
          <td class="icon_cell create_new"></td>
          <td class="resize">&nbsp;</td>
          <td>Not Accepted</td>
          <td class="resize">&nbsp;</td>
          <td><a href="#" class="launch_viewer_action">Conceptual Part Design</a></td>
          <td class="resize">&nbsp;</td>
          <td class="icon_cell program">&nbsp;</td>
          <td class="resize">&nbsp;</td>
          <td>New Product Development</td>
          <td class="resize">&nbsp;</td>
          <td>Anthony Moquette</td>
          <td class="resize">&nbsp;</td>
          <td>05/10/08</td>
          <td class="resize">&nbsp;</td>
        </tr>
        <tr>
          <td class="handle">&nbsp;</td>
          <td class="icon_cell create_new"></td>
          <td class="resize">&nbsp;</td>
          <td>In Progress</td>
          <td class="resize">&nbsp;</td>
          <td><a href="#" class="launch_viewer_action">Friday Meeting</a></td>
          <td class="resize">&nbsp;</td>
          <td class="icon_cell program">&nbsp;</td>
          <td class="resize">&nbsp;</td>
          <td>New Product Development</td>
          <td class="resize">&nbsp;</td>
          <td>Joel Nave</td>
          <td class="resize">&nbsp;</td>
          <td>07/24/08</td>
          <td class="resize">&nbsp;</td>
        </tr>
        <tr>
          <td class="handle">&nbsp;</td>
          <td class="icon_cell create_new"></td>
          <td class="resize">&nbsp;</td>
          <td>In Progress</td>
          <td class="resize">&nbsp;</td>
          <td><a href="#" class="launch_viewer_action">Inventory Parts</a></td>
          <td class="resize">&nbsp;</td>
          <td class="icon_cell ico_obj_discussion">&nbsp;</td>
          <td class="resize">&nbsp;</td>
          <td>New Product Development</td>
          <td class="resize">&nbsp;</td>
          <td>Ralph Garcia</td>
          <td class="resize">&nbsp;</td>
          <td>09/10/08</td>
          <td class="resize">&nbsp;</td>
        </tr>
        <tr>
          <td class="handle">&nbsp;</td>
          <td class="icon_cell create_new"></td>
          <td class="resize">&nbsp;</td>
          <td>Not Accepted</td>
          <td class="resize">&nbsp;</td>
          <td><a href="#" class="launch_viewer_action">Test Action Item</a></td>
          <td class="resize">&nbsp;</td>
          <td class="icon_cell ico_obj_discussion">&nbsp;</td>
          <td class="resize">&nbsp;</td>
          <td>New Product Development</td>
          <td class="resize">&nbsp;</td>
          <td>Elmo McNall</td>
          <td class="resize">&nbsp;</td>
          <td>08/17/08</td>
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
