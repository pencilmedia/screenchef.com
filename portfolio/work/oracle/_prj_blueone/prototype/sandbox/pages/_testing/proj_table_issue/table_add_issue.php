<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Add Issue</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="../../../global/css/default.css" />
<link rel="stylesheet" type="text/css" href="../../../global/css/multi_list.css" />
<link rel="stylesheet" type="text/css" href="../../../global/css/multi_select_cascade_list_tree.css" />
</head>
<body id="car">
<div id="car_content" class="BottomPane">
<div id="Header" class="header" onclick="loadGrid(event);">
  <!--************************************
        HEADER
    *************************************-->
  <div class="header_wrapper">
    <div class="breadcrumb_wrapper">
      <ul class="breadcrumbs">
        <li><a href="#">Breadcrumb</a> »</li>
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
</div>
<!--************************************
        TABS
    *************************************-->
<ul class="agile_tabs">
  <li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
  <li class="indicator_gray selected"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
  <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
  <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
  <li class="indicator_gray"><a href="#"><span>History</span></a></li>
</ul>
<!--************************************
        MESSAGES
    *************************************-->
<div id="dms" class="message">
  <p class="text">&nbsp;</p>
</div>
<div class="utility_tools"> <a href="#" class="utility config" onclick="getDialog('pages/sprint_04/design_forms/config_help.php',525,475);return false;">&nbsp;</a><a href="#" class="utility help" onclick="getDialog('pages/sprint_04/dms/popHelp.php',525,475);return false;">&nbsp;</a> </div>
<div style="height: 413px;" id="PaneContent" class="frame_pinned">
  <div class="Object">
<!--***********************
    BEGIN: ADD ISSUE DIV
************************-->
    <div class="frame_error" id="frame_error" style="display: block; visibility: visible; top: 205px; left: 217px;">
      <div class="frame_error_top" id="frame_error_top">
        <div class="mid">
          <div class="left" id="frame_error_top_left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="frame_error_mid" id="frame_error_mid">
        <div class="mid">
          <div class="left"></div>
          <div class="right"></div>
          <div class="frame_error_content" id="frame_error_content">
            <div class="error_top">
              <div class="error_top_content" id="error_top_content">
                <h4 class="status_warning">Warning &bull; P000111</h4>
              </div>
              <div class="error_top_options" id="error_top_options">
              	 <p>Find number "10" is already used for Item P002345. Please resolve this issue, or continue by selecting "ignore this warning" below.</p>
                 <dl class="side_by_side_mixed selector_list">
                    <dt>&nbsp;</dt>
                    <dd><input type="checkbox" name="ignore" id="4" class="form_selectors" /><label for="4">Ignore this warning</label></dd>
                    <dt>&nbsp;</dt>
                    <dd><input type="checkbox" name="ignore_all" id="5" class="form_selectors" /><label for="5">Ignore all similar warnings</label></dd>
                 </dl>
              </div>
            </div>
            <div class="error_bottom">
              <div class="error_bottom_nav" id="error_bottom_nav">
                <div id="error_status" class="error_status">5 issues remaining</div>
                <div id="error_nav_buttons" class="error_nav_buttons">
                    <a class="button" href="#"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
                </div>
              </div>
            </div>
            <div class="error_close"><a class="close_error_frame" id="close_error_frame" name="close_error_frame" tabindex="-1"><span>close</span></a></div>
          </div>
        </div>
      </div>
      <div class="frame_error_bottom" id="frame_error_bottom">
        <div class="mid">
          <div class="left pointer" id="frame_error_bottom_left"> </div>
          <div class="right"> </div>
        </div>
      </div>
    </div>
<!--***********************
    END: ADD ISSUE DIV
************************-->


<!--***********************
    BEGIN: ADD ISSUE DIV
************************-->
    <div class="frame_error" id="" style="display: block; visibility: visible; top: 205px; left: 217px;">
      <div class="frame_error_top" id="">
        <div class="mid">
          <div class="left pointer" id=""> </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="frame_error_mid" id="">
        <div class="mid">
          <div class="left"> </div>
          <div class="right"> </div>
          <div class="frame_error_content" id="">
            <div class="error_top">
              <div class="error_top_content" id="">
                <h4 class="status_warning">Warning &bull; P000111</h4>
              </div>
              <div class="error_top_options" id="">
              	 <p>Find number "10" is already used for Item P002345. Please resolve this issue, or continue by selecting "ignore this warning" below.</p>
                 <dl class="side_by_side_mixed selector_list">
                    <dt>&nbsp;</dt>
                    <dd><input type="checkbox" name="ignore" id="4" class="form_selectors" /><label for="4">Ignore this warning</label></dd>
                    <dt>&nbsp;</dt>
                    <dd><input type="checkbox" name="ignore_all" id="5" class="form_selectors" /><label for="5">Ignore all similar warnings</label></dd>
                 </dl>
              </div>
            </div>
            <div class="error_bottom">
              <div class="error_bottom_nav" id="">
                <div class="error_status" id="">5 issues remaining</div>
                    <div class="error_nav_buttons" id="">
                        <a class="button" href="#"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
                </div>
              </div>
            </div>
            <div class="error_close"><a class="close_error_frame" id="" name="close_error_frame" tabindex="-1"><span>close</span></a></div>
          </div>
        </div>
      </div>
      <div class="frame_error_bottom" id="">
        <div class="mid">
          <div class="left" id=""> </div>
          <div class="right"> </div>
        </div>
      </div>
    </div>
<!--***********************
    END: ADD ISSUE DIV
************************-->



<!--***********************
    BEGIN: ADD ISSUE DIV
************************-->
    <div class="frame_error" id="" style="display: block; visibility: visible; top: 205px; left: 217px;">
      <div class="frame_error_top" id="">
        <div class="mid">
          <div class="left " id=""> </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="frame_error_mid" id="">
        <div class="mid">
          <div class="left"> </div>
          <div class="right"> </div>
          <div class="frame_error_content" id="">
            <div class="error_top">
              <div class="error_top_content" id="">
                <h4 class="status_warning">Warning &bull; P000111</h4>
              </div>
              <div class="error_top_options" id="">
              	 <p>Capacitor P000111 is currently on a pending change (C000123).</p>
                 <dl class="side_by_side_mixed selector_list">
                    <dt>&nbsp;</dt>
                    <dd><input type="radio" name="wset" id="1" class="form_selectors" checked="checked" /><label for="1">Continue</label></dd>
                    <dt>&nbsp;</dt>
                    <dd><input type="radio" name="wset" id="2" class="form_selectors" /><label for="2">Cancel</label></dd>
                 </dl>
                 <dl class="side_by_side_mixed with_top_margin">
                    <dt>&nbsp;</dt>
                    <dd><input type="checkbox" id="apply_similar" class="form_selectors" /><label for="apply_similar">Apply to similar warnings</label></dd>
                </dl>
              </div>
            </div>
            <div class="error_bottom">
              <div class="error_bottom_nav" id="">
                <div class="error_status" id="">5 issues remaining</div>
                <div class="error_nav_buttons" id="">
                	<a class="button" href="#"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
                </div>
              </div>
            </div>
            <div class="error_close"><a class="close_error_frame" id="" name="close_error_frame" tabindex="-1"><span>close</span></a></div>
          </div>
        </div>
      </div>
      <div class="frame_error_bottom" id="">
        <div class="mid">
          <div class="left" id=""> </div>
          <div class="right"> </div>
        </div>
      </div>
    </div>
<!--***********************
    END: ADD ISSUE DIV
************************-->



  </div>
</div>
</body>
</html>
