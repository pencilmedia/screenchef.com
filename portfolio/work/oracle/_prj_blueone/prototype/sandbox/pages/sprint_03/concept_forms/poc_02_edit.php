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
    <p class="button_controls">
    	<a href="#" id="saveForm" class="button"><span>Save</span></a>
    	<a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_03/concept_forms/poc_02.php');" class="button"><span>Cancel</span></a>
   </p>
  </div>
</div>
<div id="PaneContent">
<div class="ObjectFull">
<div class="container poc2">
<form id="form_dialogs" name="form_dialogs" action="">
    <fieldset class="lt_column">
        <dl class="side_by_side_mixed2">
            <dt><label for="ui_control_id1">Number:</label></dt>
            <dd>
                <input type="text" id="ui_control_id1" value="123456" class="auto_number_field long_width" />
                <a href="#" id="an_menu_1" class="button" onclick="increment('ui_control_id1');return false;"><span>123</span></a>
            </dd>
            <dt class="required"><label for="text1">Type Menu:</label></dt>
            <dd class="required">
                <input id="text1" type="text" class="long_width" />
                <span class="error_msg hidden">Error message...</span>
            </dd>
            <dt><label for="select1">Text:</label></dt>
            <dd>
                <select id="select1" class="long_width">
                    <option>Text</option>
                </select>
            </dd>
            <dt class="mixed_text"><label>Single-Select User:</label></dt>
            <dd class="mixed_text">User Link</dd><!--Not a link in edit mode-->
            <dt><label for="text3a">Short Text:</label></dt>
            <dd>
                <input id="text3a" type="text" class="short_width" />
            </dd>
            <dt><label for="text3">Medium Text:</label></dt>
            <dd>
                <input id="text3" type="text" class="medium_width" />
            </dd>
			<!-- Character Counter INPUT -->
            <dt><label for="textfield_counter">Text Counter:</label></dt>
            <dd>
                <input id="textfield_counter" class="long_width counter50" maxlength="50" onkeydown="textCounter('inputText',this,document.form_dialogs.textfield_char_counter,50)" onkeyup="textCounter('inputText',this,document.form_dialogs.textfield_char_counter,50)" />
                <input readonly="readonly" type="text" id="textfield_char_counter" class="counter" size="3" maxlength="3" value="50">
            </dd>                
            <dt><label for="textbox1">Multi-text:</label></dt>
            <dd>
                <textarea id="textbox1" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="textCounter('multiText',this,document.form_dialogs.multitext_char_counter2,150)" onkeyup="textCounter('multiText',this,document.form_dialogs.multitext_char_counter2,150)"></textarea>
                <input readonly="readonly" type="text" id="multitext_char_counter2" class="counter" size="3" maxlength="3" value="150">
            </dd>
            <dt><label for="select2">Menu Text:</label></dt>
            <dd>
                <select id="select2" class="long_width">
                    <option>Text</option>
                </select>
            </dd>
            <!-- Character Counter w/ Autoexpand Multi-text -->
            <dt><label for="multitext_counter">Multi-text:</label></dt>
            <dd>
                <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="textCounter('multiText',this,document.form_dialogs.multitext_char_counter,150)" onkeyup="textCounter('multiText',this,document.form_dialogs.multitext_char_counter,150)"></textarea>
                <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
            </dd>                   
        </dl>
    </fieldset>
    <fieldset class="rt_column">
        <dl class="side_by_side_mixed2">
            <dt class="required"><label for="menuc">Menu Text:</label></dt>
            <dd class="required">
                <input id="menuc" type="text" class="long_width" />
                <span class="error_msg hidden">Error message...</span>
            </dd>
            <dt class="required"><label for="menu1">Type Menu:</label></dt>
            <dd class="required">
                <input id="menu1" type="text" class="long_width" />
                <span class="error_msg hidden">Error message...</span>
            </dd>
            <dt><label for="selectb">Text:</label></dt>
            <dd>
                <select id="selectb" class="long_width">
                    <option>Text</option>
                </select>
            </dd>
            <dt class="mixed_text"><label>Single-Select User:</label></dt>
            <dd class="mixed_text">User Link</dd><!--Not a link in edit mode-->
            <dt><label for="textb">Short Text:</label></dt>
            <dd>
                <input id="textb" type="text" class="short_width" />
            </dd>
            <dt><label for="textg">Medium Text:</label></dt>
            <dd>
                <input id="textg" type="text" class="medium_width" />
            </dd>
			<!-- Character Counter INPUT -->
            <dt><label for="textfield2_counter">Text Counter:</label></dt>
            <dd>
                <input id="textfield2_counter" class="long_width counter50" maxlength="50" onkeydown="textCounter('inputText',this,document.form_dialogs.textfield2_char_counter,50)" onkeyup="textCounter('inputText',this,document.form_dialogs.textfield2_char_counter,50)" />
                <input readonly="readonly" type="text" id="textfield2_char_counter" class="counter" size="3" maxlength="3" value="50">
            </dd>                
            <!-- Character Counter w/ Autoexpand Multi-text -->
            <dt><label for="textbox3">Textarea:</label></dt>
            <dd>
                <textarea id="textbox3" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="textCounter('multiText',this,document.form_dialogs.textbox3_counter,150)" onkeyup="textCounter('multiText',this,document.form_dialogs.textbox3_counter,150)"></textarea>
                <input readonly="readonly" type="text" id="textbox3_counter" class="counter" size="3" maxlength="3" value="150">
            </dd>
            <dt><label>Text Link:</label></dt>
            <dd>&nbsp;</dd>
            <dt><label for="select4">Menu Text:</label></dt>
            <dd>
                <select id="select4" class="long_width">
                	<option>Text</option>
                </select>
            </dd>
        </dl>
    </fieldset>
    <h3>Page 2</h3>
    <fieldset class="lt_column">
        <dl class="side_by_side_mixed2">
            <dt><label for="text3">Menu:</label></dt>
            <dd>
                <input id="text3" type="text" value="" class="long_width" />
                <a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a> </dd>
            <dt><label for="text4">Menu Two:</label></label></dt>
            <dd>
                <input id="text4" type="text" value="" class="long_width" />
                <a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a> </dd>
        </dl>
    </fieldset>
    <fieldset class="rt_column">
        <dl class="side_by_side_mixed2">
            <dt><label for="text5">Menu:</label></dt>
            <dd>
                <input id="text5" type="text" value="" class="long_width" />
                <a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a> </dd>
            <dt><label for="text6">Menu Two:</label></dt>
            <dd>
                <input id="text6" type="text" value="" class="long_width" />
                <a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
           </dd>
        </dl>
    </fieldset>
        </div>
    </div>
</div>
