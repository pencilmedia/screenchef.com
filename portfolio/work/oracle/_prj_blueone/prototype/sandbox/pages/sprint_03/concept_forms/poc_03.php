<div id="Header" class="header">
  <!--************************************
	HEADER
*************************************-->
  <div class="header_wrapper">
    <div class="breadcrumb_wrapper">
      <ul class="breadcrumbs">
        <li><a href="#">Breadcrumb</a> &raquo;</li>
        <li>Breadcrumb</li>
      </ul>
    </div>
    <div class="column_one layout">
      <h2>Identifier</h2>
      <p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
    </div>
    <div class="column_two">
      <h2>Status / Lifecycle</h2>
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
      <label>Label:</label>
      <select name="">
        <option value="">Values</option>
        <option value="">selection</option>
      </select>
      <a href="#" class="button"><span><em class="summary">&nbsp;</em> Object Action</span></a> <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Action 2</span></a> <a href="#" class="button"><span>Menu<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
    </form>
  </div>
  <!--************************************
	TABS
*************************************-->
  <ul class="agile_tabs">
    <li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
    <li class="indicator_gray selected"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
    <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
    <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
    <li class="indicator_gray"><a href="#"><span>History</span></a></li>
  </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
  <div class="page_controls">
    <p class="button_controls"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_03/concept_forms/poc_03_edit.php');" class="button"><span>Edit</span></a></p>
  </div>
</div>
<div id="PaneContent">
  <div class="ObjectFull">
    <div class="container poc3_read">
        <p>
            <label>Long Text:</label>
            Text
        </p>
        <p>
            <label>Long Text:</label>
            Text
        </p>
        <p>
            <label>Long Menu:</label>
            Option 1, Option 2, Option 3
        </p>
        <p>
            <label>Long Text:</label>
            Text
        </p>
    <div class="ie_clear"></div>
        <p class="multitext">
            <label>Multi-text:</label>
            This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar.
        </p>
        <p>
            <label>Long Text:</label>
            Text
        </p>
    <div class="ie_clear"></div>
        <p class="multitext">
            <label>Multi-text:</label>
            This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar.
        </p>
        <p>
            <label>Medium Text:</label>
            Text
        </p>
        <p>
            <label>Medium Text:</label>
            Text
        </p>
        <p>
            <label>Medium Text:</label>
            Option 1
        </p>
    <div class="ie_clear"></div>
        <p class="multitext">
            <label>Multi-text:</label>
            This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar. 
        </p>
    <div class="ie_clear"></div>
        <p class="multitext">
            <label>Multi-text:</label>
            This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar. 
        </p>
        <p>
            <label>Short Text:</label>
            Text
        </p>
        <p>
            <label>Short Type Menu:</label>
            Text
        </p>
        <p>
            <label>Short Menu:</label>
            Option 1
        </p>
    </div>
  </div>
</div>
