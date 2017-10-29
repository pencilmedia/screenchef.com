<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="../../../global/css/default.css" />
<link rel="stylesheet" type="text/css" href="../../../global/css/tooltip.css" />
<script type="text/javascript" src="../../../global/js/jquery/jquery.js"></script>
<script type="text/javascript" src="../../../global/js/jquery/plugins/jquery.colors.js"></script>
<script type="text/javascript" src="../../../global/js/jquery/plugins/jquery.dimensions.js"></script>
<script type="text/javascript" src="../../../global/js/jquery/plugins/jquery.tooltip.js"></script>
<script type="text/javascript" src="../../../global/js/action_dialogs_common.js"></script>
<script type="text/javascript" src="../../../global/js/multi_counter_expander.js"></script>
<script type="text/javascript" src="new_widget_wizard.php.js"></script>
<title>Wizard...</title>
</head>
<body class="action_dialog wizard muw">
<div id="wrapper_action_dialog_header" class="header rfq">
  <div class="header_wrapper">
    <div class="column_one">
      <h2>Add New Widget Wizard</h2>
    </div>
  </div>
  <div id="wizard_steps" class="wizard_steps">
    <h2 id="wStepTitle">Widget Properties</h2>
  </div>
  <ul class="steps">
    <li id="1" title="Tooltip Title - Lorem ipsum..." class="sec first"><a href="#">1</a></li>
    <li id="2" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">2</a></li>
    <li id="3" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">3</a></li>
    <li id="4" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">4</a></li>
    <!--
        	<li id="5" title="Select Suppliers - Choose which partners and suppliers to disseminate the RFQ." class="sec"><a href="#">5</a></li>
        	<li id="6" title="Select Price Scenarios - Set the RFQ Number and then fill in the RFQ attribute information." class="sec"><a href="#">6</a></li>
        	<li id="7" title="Add Attachments - Optionally, add attachments to RFQ using the Add action on the Attachments table below." class="sec"><a href="#">7</a></li>
           	-->
  </ul>
  <div id="page_message" class="message info">
    <p id="step_message">Name your widget, the type of visual you need (table or chart ) and choose wether you want to create a widget based on a previously saved search.  Once selected proceed to Step 2.</p>
  </div>
</div>
<div id="wrapper_action_dialog_content" class="content">
  <form id="form1" name="form1" action="#">
    <!-- ****************************** -->
    <!-- 	STEP #1						-->
    <!-- ****************************** -->
    <fieldset id="step_1" class="dynamic step">
      <dl class="side_by_side_mixed">
        <!-- Auto Number -->
        <dt>
          <label>Name:</label>
        </dt>
        <dd class="select_action_choices">
          <input type="text" value="" class="medium_width" />
        </dd>
        <dt>
          <label>Display Type:</label>
        </dt>
        <dd class="select_action_choices">
          <select class="medium_width" id="r_handler">
            <option value="graph">Graph</option>
            <option value="table">Table</option>
          </select>
        </dd>
      </dl>
    </fieldset>
    <!-- ****************************** -->
    <!-- 	STEP #2						-->
    <!-- ****************************** -->
    <div id="step_2" class="step">
      <dl class="side_by_side_mixed with_bottom_margin">
        <!-- SINGLE SELECT LIST -->
        <dt  class="mixed_text">
          <input type="radio" name="search_type"  id="st1" checked="checked"  />
        </dt>
        <dd>
          <label for="st1">Saved Search</label>
        </dd>
        <dt>&nbsp;</dt>
        <dd>
          <div class="list_control single_list medium_width">
            <input type="text" id="ssl_00" autocomplete="off"/>
            <div class="auto_complete_results"></div>
            <div class="pill_container" tabindex="-1">
              <ul id="pillbox_00">
              </ul>
            </div>
          </div>
          <a href="#" id="cmd_ssl_00" class="button"><span><em class="view_details">&nbsp;</em></span></a></dd>
      </dl>
      <dl class="side_by_side_mixed with_bottom_margin">
        <!-- SINGLE SELECT LIST -->
        <dt  class="mixed_text">
          <input type="radio" name="search_type" id="st2" />
        </dt>
        <dd>
          <label for="st2">Advanced Search</label>
          <a href="#" id="cmd_ssl_00" class="button"><span>Define Query</span></a></dd>
        <dt>&nbsp;</dt>
        <dd>
          <dl>
            <!-- SINGLE SELECT LIST -->
            <dt class="mixed_text small">For:</dt>
            <dd class="small_text">Change</dd>
            <dt class="mixed_text small">Type:</dt>
            <dd class="small_text">Object Search</dd>
            <dt class="mixed_text small">Criteria:</dt>
            <dd class="small_text">Type is: equal to ECO and change Analyst is equal to Joe Smith</dd>
          </dl>
        </dd>
      </dl>
    </div>
    <!-- ****************************** -->
    <!-- 	STEP #3						-->
    <!-- ****************************** -->
    <div id="step_3" class="step">
      <div id="table_content">
        <!--Begin Shuttle Wrapper-->
        <h4 class="toggle toggle1 collapse">Display Fields</h4>
        <div class="shuttle_control toggle_me1" style="height: 200px;">
          <div class="colonnade">
            <!--Begin Colonnade-->
            <div class="lt_column">
              <!--Begin Left Column-->
              <h4>Hidden Fields</h4>
              <div class="shuttle_content" style="height: 150px;">
                <div id="ygtv102" class="ygtvitem">
                  <div id="ygtvc102" class="ygtvchildren"></div>
                </div>
              </div>
              <div id="ltButtons-yui-gen10-FormatShuttle" class="shuttle_buttons" style="margin-top: 50px;">
                <p><a class="button" id="scr-yui-gen10-FormatShuttle" href="#" tabindex="4" title="Dispaly selected columns" onclick="return false;"><span id="scr-yui-gen10-FormatShuttlespan"><em class="iconic shuttle_control_right">&nbsp;</em>&nbsp;</span></a></p>
                <p><a class="button" id="scl-yui-gen10-FormatShuttle" href="#" tabindex="4" title="Hide selected columns" onclick="return false;"><span id="scl-yui-gen10-FormatShuttlespan"><em class="iconic shuttle_control_left">&nbsp;</em>&nbsp;</span></a></p>
              </div>
            </div>
            <div class="rt_column">
              <!--Begin Right Column-->
              <h4>Displayed Fields</h4>
              <div id="sc_control_2-yui-gen10-FormatShuttle" tabindex="-1" class="shuttle_content" style="height: 150px;">
                <div id="ygtv101" class="ygtvitem">
                  <div id="ygtvc101" class="ygtvchildren">
                    <div id="ygtv110" class="ygtvitem">
                      <div style="padding-left: 0px;" class="agileTreeNode">
                        <div style="white-space: nowrap;" class="shuttle_list_item selected" id="dragIdyui-gen10-FormatShuttle110"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2-yui-gen10-FormatShuttle',110).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2-yui-gen10-FormatShuttle',110));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2-yui-gen10-FormatShuttle',110).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2-yui-gen10-FormatShuttle',110)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2-yui-gen10-FormatShuttle',110).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2-yui-gen10-FormatShuttle',110));" title="Type (Image)" href="javascript:noaction();" id="agileTreeNodeLink110" style="padding: 2px 5px; outline-style: none; white-space: nowrap;" tabindex="-1" class="ygtvlabel">Type (Image)</a></div>
                        <div id="agileTreeNodeLink110_lock"></div>
                      </div>
                      <div style="display: none;" id="ygtvc110" class="ygtvchildren"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="shuttle_buttons" style="margin-top: 50px;">
                <p><a class="button" id="scu-yui-gen10-FormatShuttle" href="#" tabindex="7" title="Move the selected columns up" onclick="return false;"><span id="scu-yui-gen10-FormatShuttlespan"><em class="iconic shuttle_control_up">&nbsp;</em>&nbsp;</span></a></p>
                <p><a class="button" id="scd-yui-gen10-FormatShuttle" href="#" tabindex="8" title="Move the selected columns down" onclick="return false;"><span id="scd-yui-gen10-FormatShuttlespan"><em class="iconic shuttle_control_down">&nbsp;</em>&nbsp;</span></a></p>
              </div>
              <div class="shuttle_buttons lock_button" style="margin-top: 30px;">
                <p><a class="button" id="cmdLock-yui-gen10-FormatShuttle" href="#" tabindex="9" title="Lock selected column" onclick="return false;"><span id="cmdLock-yui-gen10-FormatShuttlespan"><em class="iconic shuttle_control_lock">&nbsp;</em>&nbsp;</span></a></p>
              </div>
            </div>
          </div>
        </div>
        <!--End Shuttle Wrapper-->
        <!--Begin Sort Wrapper-->
        <h4 class="toggle toggle2 collapse">Sorting</h4>
        <div class="multi_sort_col_content sort_layout toggle_me2" style="height: 259px;">
          <div class="multi_sort_col_labels">
            <div class="multi_sort_col_left">
              <p>Attribute</p>
            </div>
            <div class="multi_sort_col_right">
              <p>Sort Order</p>
            </div>
            <div class="groupby">
              <p>Group By</p>
            </div>
          </div>
          <div tabindex="-1" class="multi_sort_col_content0">
            <div tabindex="-1" class="multi_sort_col_left ">
              <p>
                <select id="sortAttr0" onblur="selectBlur(this);" onfocus="selectFocus(this);">
                  <option value="0">-- Select a Field --</option>
                  <option value="2000004700">Type (Image)</option>
                  <option value="2000002504">Specification</option>
                  <option value="2000005328">Lifecycle Phase</option>
                  <option value="2000001445">Calculated Compliance</option>
                  <option value="2000002506">Declared Compliance</option>
                  <option value="2000001536">Exemptions</option>
                  <option value="2000002310">Exemption Expiration Date</option>
                </select>
              </p>
            </div>
            <div tabindex="-1" class="multi_sort_col_right">
              <p>
                <select id="sortOrder0" onblur="selectBlur(this);" onfocus="selectFocus(this);">
                  <option value="1">Ascending</option>
                  <option value="2">Descending</option>
                </select>
              </p>
            </div>
            <div tabindex="-1" class="groupby">
              <p><input type="checkbox" /></p>
            </div>
          </div>
          <div tabindex="-1" class="multi_sort_col_content1 ">
            <div tabindex="-1" class="multi_sort_col_left ">
              <p>
                <select id="sortAttr1" onblur="selectBlur(this);" onfocus="selectFocus(this);">
                  <option value="0">-- Select a Field --</option>
                  <option value="2000004700">Type (Image)</option>
                  <option value="2000002504">Specification</option>
                  <option value="2000005328">Lifecycle Phase</option>
                  <option value="2000001445">Calculated Compliance</option>
                  <option value="2000002506">Declared Compliance</option>
                  <option value="2000001536">Exemptions</option>
                  <option value="2000002310">Exemption Expiration Date</option>
                </select>
              </p>
            </div>
            <div tabindex="-1" class="multi_sort_col_right ">
              <p>
                <select id="sortOrder1" onblur="selectBlur(this);" onfocus="selectFocus(this);">
                  <option value="1">Ascending</option>
                  <option value="2">Descending</option>
                </select>
              </p>
            </div>
            <div tabindex="-1" class="groupby">
              <p><input type="checkbox" /></p>
            </div>
          </div>
          <div tabindex="-1" class="multi_sort_col_content2 ">
            <div tabindex="-1" class="multi_sort_col_left ">
              <p>
                <select id="sortAttr2" onblur="selectBlur(this);" onfocus="selectFocus(this);">
                  <option value="0">-- Select a Field --</option>
                  <option value="2000004700">Type (Image)</option>
                  <option value="2000002504">Specification</option>
                  <option value="2000005328">Lifecycle Phase</option>
                  <option value="2000001445">Calculated Compliance</option>
                  <option value="2000002506">Declared Compliance</option>
                  <option value="2000001536">Exemptions</option>
                  <option value="2000002310">Exemption Expiration Date</option>
                </select>
              </p>
            </div>
            <div tabindex="-1" class="multi_sort_col_right ">
              <p>
                <select id="sortOrder2" onblur="selectBlur(this);" onfocus="selectFocus(this);">
                  <option value="1">Ascending</option>
                  <option value="2">Descending</option>
                </select>
              </p>
            </div>
            <div tabindex="-1" class="groupby">
              <p><input type="checkbox" /></p>
            </div>
          </div>
        </div>
        <!--End Sort Wrapper-->
      </div>
      <div id="graph_content">
        <fieldset class="dynamic with_bottom_margin">
          <dl class="side_by_side_mixed">
            <dt>
              <label>Type:</label>
            </dt>
            <dd class="mixed_text">
              <select id="as_of" class="short_width">
                <option>Polar</option>
              </select>
            </dd>
          </dl>
          <dl class="side_by_side_mixed">
            <dt class="mixed_text">&nbsp;</dt>
            <dd class="mixed_text">
              <input id="kick_baseline" type="checkbox" name="" value="" class="form_selectors" />
              <label for="kick_baseline">3-D Style</label>
            </dd>
            <dt class="mixed_text">&nbsp;</dt>
            <dd class="mixed_text">
              <input id="plan_record" type="checkbox" name="" value="" class="form_selectors" />
              <label for="plan_record">Show Legend</label>
              <label for="3" class="inline_dropdown">Legend Position:
                <select id="as_of" class="short_width">
                  <option>Default</option>
                </select>
              </label>
            </dd>
          </dl>
        </fieldset>
        <fieldset class="dynamic with_bottom_margin">
          <dl class="side_by_side_mixed">
            <dt>
              <label>X-Axis:</label>
            </dt>
            <dd class="mixed_text">
              <select id="as_of" class="medium_width">
                <option>General Info Owner</option>
              </select>
            </dd>
            <dt>
              <label>Y-Axis:</label>
            </dt>
            <dd class="mixed_text">
              <select id="as_of" class="medium_width">
                <option>Cover Page RFQ Number</option>
              </select>
            </dd>
          </dl>
        </fieldset>
        <fieldset class="dynamic with_bottom_margin">
          <dl class="side_by_side_mixed">
            <dt>
              <label>Function:</label>
            </dt>
            <dd class="mixed_text">
              <select id="as_of" class="medium_width">
                <option>Average</option>
              </select>
            </dd>
          </dl>
        </fieldset>
        <fieldset class="dynamic with_bottom_margin">
          <dl class="side_by_side_mixed">
            <dt>
              <label>Header Label:</label>
            </dt>
            <dd class="mixed_text">
              <input type="text" class="medium_width" />
            </dd>
            <dt>
              <label>Footer Label:</label>
            </dt>
            <dd class="mixed_text">
              <input type="text" class="medium_width" />
            </dd>
            <dt>
              <label>X-Axis Label:</label>
            </dt>
            <dd class="mixed_text">
              <input type="text" class="medium_width" />
            </dd>
            <dt>
              <label>Y-Axis Label:</label>
            </dt>
            <dd class="mixed_text">
              <input type="text" class="medium_width" />
            </dd>
          </dl>
        </fieldset>
      </div>
    </div>
    <!-- ****************************** -->
    <!-- 	STEP #4						-->
    <!-- ****************************** -->
    <fieldset id="step_4" class="dynamic step">
      <p><strong>Step 4</strong>
        </h4>
    </fieldset>
  </form>
</div>
<div id="wrapper_action_dialog_footer" class="footer">
  <div class="column_three"><a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a><a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a><a href="#" id="cmdFinish" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Finish</span></a><a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a></div>
</div>
</body>
</html>
