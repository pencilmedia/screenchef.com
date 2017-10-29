<div id="Header" class="header">
  <!--************************************
        HEADER
    *************************************-->
  <div class="header_wrapper">
    <div class="breadcrumb_wrapper">
      <ul class="breadcrumbs">
        <li><a href="#">Breadcrumb</a> &raquo;</li>
        <li>ECO-003477</li>
      </ul>
    </div>
    <div class="column_one layout">
      <h2>ECO-003477</h2>
      <p><strong>ECO</strong> &bull; Initial release of the LJ3 Bill of Materials Items.</p>
    </div>
    <div class="column_two">
      <h2>Submitted</h2>
    </div>
    <div class="column_three"> &nbsp; </div>
  </div>
  <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
  <div class="object_level_controls"> <a href="#" class="button"><span><em class="comment">&nbsp;</em> Comment</span></a> <a href="#" class="button"><span><em class="change_status">&nbsp;</em> Next Status</span></a> <a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a> </div>
</div>
<!--************************************
    TABS
*************************************-->
<ul class="agile_tabs">
  <li class="first_tab"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/_testing/proj_windowing/eco_003477.php'); return false;"><span>Cover Page<em>&nbsp;</em></span></a></li>
  <li class="indicator_gray"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/_testing/proj_windowing/eco_003477_affected_items.php', 'runECOInit2()' ); agile.ux.demo.eco00347.init(); return false;"><span>Affected Items<em>&nbsp;</em></span></a></li>
  <li class="selected"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/sprint_05/car_templates/obj_item_workflow.php'); return false;"><span>Workflow<em>&nbsp;</em></span></a></li>
  <li><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
  <li><a href="#"><span>Attachements<em>&nbsp;</em></span></a></li>
  <li><a href="#"><span>History</span></a></li>
</ul>
<!--************************************
    MESSAGES
*************************************-->
<?php include("dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
<div class="Object">
  <!-- BEGIN: Object Content -->
  <div class="container">
    <h3 class="toggle collapse">Workflow Overview</h3>
    <div class="toggle_content item_workflow">
		<table cellspacing="0" cellpadding="0" class="workflow_diagram">
          <tr>
            <td class="completed state"><a href="#">Pending</a></td>
            <td class="diagram_arrow">&nbsp;</td>
            <td class="completed state"><a href="#">Submitted</a></td>
            <td class="diagram_arrow">&nbsp;</td>
            <td class="current state"><a href="#">CCB</a></td>
            <td class="diagram_arrow">&nbsp;</td>
            <td class="held state"><a href="#">Released</a></td>
            <td class="diagram_arrow">&nbsp;</td>
            <td class="held nohover state">Implemented</td></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="diagram_connector">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="diagram_multiconnector">&nbsp;</td>
            <td class="diagram_arrow">&nbsp;</td>
            <td class="held state"><a href="#">Hold</a></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="diagram_connector">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="diagram_corner">&nbsp;</td>
            <td class="diagram_arrow">&nbsp;</td>
            <td class="held state"><a href="#">Cancel</a></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>


    </div>
  </div>
</div>
<!--************************************
        RESIZE BAR
    *************************************-->
<div class="prvMoveDiv" id="previewMoveDiv"></div>
<div class="Preview">
  <!-- BEGIN: Preview Content -->
  <!--************************************
        VIEW CONTROLS
    *************************************-->
  <div class="view_controls">
    <h4>Status Summary</h4>
    <p>
      <label>View:</label>
      <select name="">
        <option value="">All Content</option>
        <option value="">selection</option>
        <option value="">selection</option>
      </select>
    </p>
  </div>
  <!--************************************
        TABLE ACTIONS
    *************************************-->
  <div class="table_actions">
    <div class="column_one no_width">
      <p> <a href="#" class="button"><span>Add Reviewers</span></a> <a href="#" class="button"><span>Remove Reviewers</span></a> <a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em></span></a> </p>
    </div>
    <div class="column_three">
      <p class="pagination"> <a href="#" class="page_first_disabled" title="First Page">&nbsp;</a> <a href="#" class="page_prev_disabled" title="Previous Page">&nbsp;</a> <span class="page">Page</span>
        <select name="">
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <span class="of">of 2</span> <a href="#" class="page_next" title="Next Page">&nbsp;</a> <a href="#" class="page_last" title="Last Page">&nbsp;</a> </p>
    </div>
  </div>
  <!--************************************
	TABLE HANDLE SELECTED
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
        <th>Col 5</th>
        <th class="resize">&nbsp;</th>
        <th>Col 6</th>
        <th class="resize">&nbsp;</th>
      </tr>
    </table>
  </div>
  <div class="scrollTableDiv">
    <table cellpadding="0" cellspacing="0" class="table_handle">
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
        <td>Text</td>
        <td class="resize">&nbsp;</td>
        <td>Text</td>
        <td class="resize">&nbsp;</td>
      </tr>
      <tr class="selected">
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
        <td>Text</td>
        <td class="resize">&nbsp;</td>
        <td>Text</td>
        <td class="resize">&nbsp;</td>
      </tr>
    </table>
  </div>
  <!--************************************
	TABLE ACTIONS
*************************************-->
  <div class="table_actions">
    <div class="column_one">
      <p> <span class="page">Rows per page:</span>
        <select name="" class="w50">
          <option value="">15</option>
          <option value="">30</option>
          <option value="">45</option>
        </select>
      </p>
    </div>
    <div class="column_two">
      <p>Selected: 1 of 7</p>
    </div>
    <div class="column_three">
      <p class="pagination"> <a href="#" class="page_first_disabled" title="First Page">&nbsp;</a> <a href="#" class="page_prev_disabled" title="Previous Page">&nbsp;</a> <span class="page">Page</span>
        <select name="">
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <span class="of">of 2</span> <a href="#" class="page_next" title="Next Page">&nbsp;</a> <a href="#" class="page_last" title="Last Page">&nbsp;</a> </p>
    </div>
  </div>
  <!-- END: Preview Content -->
</div>
