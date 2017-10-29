<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Cascade List</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
   	<link rel="stylesheet" type="text/css" href="global/css/multi_select_cascade_list_tree.css" />
	<link rel="stylesheet" type="text/css" href="shuttle.css" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="shuttle.js"></script>
</head>
<body class="action_dialog"> 
    <!--************************************
        PALETTE
    *************************************-->
    <div id="palette" class="palette nodrag">
        <div id="floater_content" class="palette_content nodrag">
            <div id="drag_handle" class="handlebar"></div><a href="#" id="close_palette" class="close_palette"><span>close</span></a>
            <form>
                <fieldset class="dynamic shuttle_control">
                    <!-- SHUTTLE CONTROL PROTOTYPE -->
                    <div class="colonnade">
                        <div class="lt_column">
                            <h4>Available Fields</h4>
                            <div id="sc_control_1" class="shuttle_content">
                            	<p>test</p>
                            	<p>test</p>
                            	<p>test</p>
                            	<p>test</p>
                            	<p>test</p>
                            	<p>test</p>
                            	<p>test</p>
                            </div>
                            <div class="shuttle_buttons">
                                <p><a href="#" class="button" id="scr"><span><em class="iconic arrow_back">&nbsp;</em>&nbsp;</span></a></p>
                                <p><a href="#" class="button" id="scl"><span><em class="iconic arrow_next">&nbsp;</em>&nbsp;</span></a></p>
                            </div>
                        </div>
                        <div class="rt_column">
                            <h4>Fields to Display</h4>
                            <div id="sc_control_2" class="shuttle_content"></div>
                            <div class="shuttle_buttons">
                                <p><a href="#" class="button" id="scu"><span><em class="iconic arrow_up">&nbsp;</em>&nbsp;</span></a><br /></p>
                                <p><a href="#" class="button" id="scd"><span><em class="iconic arrow_down">&nbsp;</em>&nbsp;</span></a></p>
                           		<p><a href="#" id="cmdLock" class="button"><span><em class="iconic lock">&nbsp;</em>&nbsp;</span></a></p>
                            </div>
                        </div>
                    </div>
              </fieldset>
            </form>
            <div id="div1" class="nodrag"></div>
            <div id="div2" class="nodrag"></div>
            <div id="resize_handle" class="palette_resizer nodrag">&nbsp;</div>
        </div>
    </div>  

<div id="header" class="header">
	<a href="#" id="toggle_shuttle">Open Shuttle</a>
</div>
</body>
</html>
