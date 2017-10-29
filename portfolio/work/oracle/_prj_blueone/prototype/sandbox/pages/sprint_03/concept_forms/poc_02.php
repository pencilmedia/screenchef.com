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
    <p class="button_controls"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_03/concept_forms/poc_02_edit.php', 'loadCompleteForm()');" class="button"><span>Edit</span></a></p>
  </div>
</div>
<div id="PaneContent">
  <div class="ObjectFull">
    <div class="container poc2">
      <form id="form_dialogs" name="frm1" action="">
        <fieldset class="lt_column">
        <dl class="side_by_side_text2">
          <dt>
            <label>Number:</label>
          </dt>
          <dd>Text</dd>
          <dt>
            <label>Type Menu:</label>
          </dt>
          <dd>Text</dd>
          <dt>
            <label>Text:</label>
          </dt>
          <dd>Value</dd>
          <dt>
            <label>Single-Select User:</label>
          </dt>
          <dd><a href="#">User Link</a></dd>
          <dt>
            <label>Text Input:</label>
          </dt>
          <dd>Text</dd>
          <dt>
            <label>Textarea:</label>
          </dt>
          <dd>This is example text in a multi-line text field.  The content of this field may take up more space than the input.  In that case, the input would have a vertical scrollbar.</dd>
          <dt>
            <label>Text Link:</label>
          </dt>
          <dd>&nbsp;</dd>
          <dt>
            <label>Text Link 2:</label>
          </dt>
          <dd>&nbsp;</dd>
          <dt>
            <label>Menu Text:</label>
          </dt>
          <dd>&nbsp;</dd>
        </dl>
        </fieldset>
        <fieldset class="rt_column">
        <dl class="side_by_side_text2">
          <dt>
            <label>Menu Text:</label>
          </dt>
          <dd>Text</dd>
          <dt>
            <label>Type Menu:</label>
          </dt>
          <dd>Text</dd>
          <dt>
            <label>Text:</label>
          </dt>
          <dd>Value</dd>
          <dt>
            <label>Single-Select User:</label>
          </dt>
          <dd><a href="#">User Link</a></dd>
          <dt>
            <label>Text Input:</label>
          </dt>
          <dd>Text</dd>
          <dt>
            <label>Textarea:</label>
          </dt>
          <dd>This is example text in a multi-line text field.  The content of this field may take up more space than the input.  In that case, the input would have a vertical scrollbar.</dd>
          <dt>
            <label>Text Link:</label>
          </dt>
          <dd>&nbsp;</dd>
          <dt>
            <label>Text Link 2:</label>
          </dt>
          <dd>&nbsp;</dd>
          <dt>
            <label>Menu Text:</label>
          </dt>
          <dd>&nbsp;</dd>
        </dl>
        </fieldset>
        <h3>Page 2</h3>
        <fieldset class="lt_column">
        <dl class="side_by_side_text2">
          <dt>
            <label>Menu:</label>
          </dt>
          <dd>List Value</dd>
          <dt>
            <label>Multi-Select Menu:</label>
          </dt>
          <dd>Value 1; Value 2</dd>
          <dt>
            <label>Text:</label>
          </dt>
          <dd>Text typed in here</dd>
        </dl>
        </fieldset>
        <fieldset class="rt_column">
        <dl class="side_by_side_text2">
          <dt>
            <label>Menu:</label>
          </dt>
          <dd>List Value</dd>
          <dt>
            <label>Multi-Select Menu:</label>
          </dt>
          <dd>Value 1; Value 2</dd>
          <dt>
            <label>Text:</label>
          </dt>
          <dd>Text typed in here</dd>
        </dl>
        </fieldset>
      </form>
    </div>
  </div>
</div>
