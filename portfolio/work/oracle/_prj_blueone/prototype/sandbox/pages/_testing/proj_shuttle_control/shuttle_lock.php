<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Multi-select Search</title>
<link rel="stylesheet" type="text/css" href="global/css/default.css" />
<script type="text/javascript" src="global/js/common.js"></script>
<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
<script type="text/javascript" src="global/js/action_dialogs.js"></script>
<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

<script type="text/javascript" src="shuttle_control.js"></script>
<script type="text/javascript">
    	jQuery.noConflict();
    </script>
</head>
<body class="action_dialog">
<!--************************************
    HEADER
*************************************-->
<div id="header" class="header">
  <div class="header_wrapper">
    <div class="column_one">
      <h2>Shuttle Control</h2>
      <p>Prototype</p>
    </div>
    <div class="column_three"> <a href="#" class="button" onclick="doSave();"><span>Save</span></a> <a href="#" onclick="javascript:window.close();" class="button"><span>Cancel</span></a> </div>
  </div>
  <!--************************************
		MESSAGES
	*************************************-->
  <div id="page_message" class="message info">
    <p>Click save to view errors.</p>
  </div>
</div>
<!--************************************
    CONTENT
*************************************-->
<div id="content" class="content">
  <form id="form_dialogs" class="shuttle_control" name="shuttleCtrl">
    <fieldset class="dynamic">
    <!-- SHUTTLE CONTROL PROTOTYPE -->
    <div class="colonnade">
      <div class="lt_column">
        <h4>Available Values</h4>
        <div id="sc_control_1" class="shuttle_list">
          <div>Anthony Moquette</div>
          <div>Ralph Garcia</div>
          <div>Leader of the Day Workers</div>
          <div>Miss Tiff</div>
          <div>Uday</div>
          <div>Kanda</div>
        </div>
        <p> <a href="#" class="button" id="scr"><span><em class="iconic shuttle_control_right">&nbsp;</em>&nbsp;</span></a> <a href="#" class="button" id="scl"><span><em class="iconic shuttle_control_left">&nbsp;</em>&nbsp;</span></a> </p>
      </div>
      <div class="rt_column">
        <h4>Selected Values</h4>
        <div id="sc_control_2" class="shuttle_list">
          <div class="ygtvitem">
            <div style="padding-left: 0px;" class="agileTreeNode nodrag">
              <div style="cursor: pointer;" class="shuttle_list_item"> <a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" title="TEXT03long column header name with spl character too !@##$%^&^*()_(&^6" href="#" id=""  tabindex="-1" class="ygtvlabel selectedNode">TEXT03long column header name with spl character to long to be longing for a longer long width value that is too long.</a> </div>
            </div>
            <div class="shuttle_lock"></div>
            <div style="display: none;" id="ygtvc77" class="ygtvchildren"></div>
          </div>
          <div class="ygtvitem">
            <div style="padding-left: 0px;" class="agileTreeNode nodrag">
              <div style="cursor: pointer;" class="shuttle_list_item"> <a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" title="TEXT03long column header name with spl character too !@##$%^&^*()_(&^6" href="#" id=""  tabindex="-1" class="ygtvlabel selectedNode">TEXT03long colum g width value that is too long.</a> </div>
            </div>
            <div class="shuttle_lock"></div>
            <div style="display: none;" id="ygtvc77" class="ygtvchildren"></div>
          </div>
          <div class="ygtvitem">
            <div style="padding-left: 0px;" class="agileTreeNode nodrag">
              <div style="cursor: pointer;" class="shuttle_list_item selected"> <a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" title="TEXT03long column header name with spl character too !@##$%^&^*()_(&^6" href="#" id=""  tabindex="-1" class="ygtvlabel selectedNode">TEXT03long column header name with spl character to long to be longing for a longer long width value that is too long.</a> </div>
            </div>
            <div class="shuttle_lock selected"></div>
            <div style="display: none;" id="ygtvc77" class="ygtvchildren"></div>
          </div>
        </div>
        <p> <a href="#" class="button" id="scu"><span><em class="iconic shuttle_control_up">&nbsp;</em>&nbsp;</span></a> <a href="#" class="button" id="scd"><span><em class="iconic shuttle_control_down">&nbsp;</em>&nbsp;</span></a> </p>
      </div>
    </div>
    </fieldset>
  </form>
  
  
  
  
  <div style="border:1px solid blue; width: 350px; margin: 25px 0 0 25px; padding: 10px; overflow: auto;">
  
  <div id="shuttleRtColumn" tabindex="-1" class="rt_column nodrag">
    <div class="nodrag">
      <h4>Fields to Display</h4>
    </div>
    <div id="sc_control_2" tabindex="-1" class="shuttle_content nodrag" style="height: 115px;">
      <div id="ygtv0" class="ygtvitem">
        <div id="ygtvc0" class="ygtvchildren">
          <div id="ygtv74" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',74).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',74));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',74).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',74));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel74">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle74"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',74).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',74));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',74).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',74)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',74).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',74));" title="ML02-Search-Obj-SP" href="#" id="agileTreeNodeLink74"  tabindex="-1">ML02-Search-Obj-SP</a></div>
              <div id="agileTreeNodeLink74_lock"/>
            </div>
            <div style="display: none;" id="ygtvc74" class="ygtvchildren"/>
          </div>
          <div id="ygtv75" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',75).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',75));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',75).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',75));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel75">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle75"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',75).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',75));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',75).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',75)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',75).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',75));" title="ML4-List-Obj-FP" href="#" id="agileTreeNodeLink75"  tabindex="-1">ML4-List-Obj-FP</a></div>
              <div id="agileTreeNodeLink75_lock"/>
            </div>
            <div style="display: none;" id="ygtvc75" class="ygtvchildren"/>
          </div>
          <div id="ygtv76" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',76).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',76));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',76).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',76));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel76">
              <div style="" class="shuttle_list_item disabled" id="dragIdFormatShuttle76"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',76).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',76));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',76).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',76)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',76).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',76));" title="Standard Cost" href="#" id="agileTreeNodeLink76"  tabindex="-1">Standard Cost</a></div>
              <div id="agileTreeNodeLink76_lock" class="shuttle_lock disabled" />
            </div>
            <div style="display: none;" id="ygtvc76" class="ygtvchildren"/>
          </div>
          <div id="ygtv80" class="ygtvitem">
            <div class="agileTreeNode nodrag" id="ygtvcontentel80" style=" ">
                  <div style="" class="shuttle_list_item selected" id="dragIdFormatShuttle80">
                    <a title="TEXT03long column header name with spl character too" href="#" class="ygtvlabel">xx TEXT03 long column header name with spl character too</a>
                  </div>
                  <div id="agileTreeNodeLink80_lock" class="shuttle_lock selected"></div>
            </div>
            <div style="display: none;" id="ygtvc80" class="ygtvchildren"></div>
          </div>
          <div id="ygtv77" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel77">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle77"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',77).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',77));" title="Target Cost" href="#" id="agileTreeNodeLink77"  tabindex="-1">Target Cost</a></div>
              <div id="agileTreeNodeLink77_lock"/>
            </div>
            <div style="display: none;" id="ygtvc77" class="ygtvchildren"/>
          </div>
          <div id="ygtv78" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',78).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',78));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',78).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',78));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel78">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle78"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',78).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',78));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',78).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',78)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',78).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',78));" title="DATE02" href="#" id="agileTreeNodeLink78"  tabindex="-1">DATE02</a></div>
              <div id="agileTreeNodeLink78_lock"/>
            </div>
            <div style="display: none;" id="ygtvc78" class="ygtvchildren"/>
          </div>
          <div id="ygtv79" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',79).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',79));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',79).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',79));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel79">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle79"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',79).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',79));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',79).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',79)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',79).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',79));" title="TEXT02- only numeric" href="#" id="agileTreeNodeLink79"  tabindex="-1">TEXT02- only numeric</a></div>
              <div id="agileTreeNodeLink79_lock"/>
            </div>
            <div style="display: none;" id="ygtvc79" class="ygtvchildren"/>
          </div>
          <div id="ygtv81" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',81).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',81));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',81).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',81));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel81">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle81"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',81).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',81));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',81).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',81)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',81).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',81));" title="LIST04 SCL" href="#" id="agileTreeNodeLink81"  tabindex="-1">LIST04 SCL</a></div>
              <div id="agileTreeNodeLink81_lock"/>
            </div>
            <div style="display: none;" id="ygtvc81" class="ygtvchildren"/>
          </div>
          <div id="ygtv82" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',82).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',82));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',82).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',82));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel82">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle82"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',82).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',82));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',82).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',82)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',82).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',82));" title="LIST05 empty scl" href="#" id="agileTreeNodeLink82"  tabindex="-1">LIST05 empty scl</a></div>
              <div id="agileTreeNodeLink82_lock"/>
            </div>
            <div style="display: none;" id="ygtvc82" class="ygtvchildren"/>
          </div>
          <div id="ygtv83" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',83).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',83));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',83).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',83));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel83">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle83"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',83).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',83));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',83).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',83)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',83).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',83));" title="Site Address" href="#" id="agileTreeNodeLink83"  tabindex="-1">Site Address</a></div>
              <div id="agileTreeNodeLink83_lock"/>
            </div>
            <div style="display: none;" id="ygtvc83" class="ygtvchildren"/>
          </div>
          <div id="ygtv84" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',84).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',84));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',84).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',84));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel84">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle84"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',84).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',84));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',84).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',84)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',84).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',84));" title="Money02" href="#" id="agileTreeNodeLink84"  tabindex="-1">Money02</a></div>
              <div id="agileTreeNodeLink84_lock"/>
            </div>
            <div style="display: none;" id="ygtvc84" class="ygtvchildren"/>
          </div>
          <div id="ygtv85" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',85).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',85));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',85).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',85));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel85">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle85"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',85).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',85));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',85).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',85)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',85).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',85));" title="ML6 MSCL" href="#" id="agileTreeNodeLink85"  tabindex="-1">ML6 MSCL</a></div>
              <div id="agileTreeNodeLink85_lock"/>
            </div>
            <div style="display: none;" id="ygtvc85" class="ygtvchildren"/>
          </div>
          <div id="ygtv86" class="ygtvitem">
            <div onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',86).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',86));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',86).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',86));" style="padding-left: 0px;" class="agileTreeNode nodrag" id="ygtvcontentel86">
              <div style="" class="shuttle_list_item" id="dragIdFormatShuttle86"><a onmousedown="return YAHOO.widget.TreeView.getNode('sc_control_2',86).onLabelMousedown(event, YAHOO.widget.TreeView.getNode('sc_control_2',86));" onclick="return YAHOO.widget.TreeView.getNode('sc_control_2',86).onLabelClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',86)); return false;" ondblclick="return YAHOO.widget.TreeView.getNode('sc_control_2',86).onLabelDoubleClick(event, YAHOO.widget.TreeView.getNode('sc_control_2',86));" title="LIST01-type search-obj list -sss" href="#" id="agileTreeNodeLink86"  tabindex="-1">LIST01-type search-obj list -sss</a></div>
              <div id="agileTreeNodeLink86_lock"/>
            </div>
            <div style="display: none;" id="ygtvc86" class="ygtvchildren"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  </div><!--end style div-->
  
  
  
  
  
  <!-- needed! do not delete -->
  <p class="action_dialog_foot_spacer">.</p>
  <!-- needed! do not delete -->
</div>
</body>
</html>
