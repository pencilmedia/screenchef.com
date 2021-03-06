<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
	<link rel="stylesheet" type="text/css" href="global/css/action_dialogs.css" />	
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/yui/dom/dom-min.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs.js"></script>
    <script type="text/javascript" src="global/js/yui/animation/animation-min.js"></script>
    <script type="text/javascript" src="global/js/agile_animations.js"></script>
	<script type="text/javascript" src="aliasing.js"></script>
	<title>Aliasing Control</title>
</head>
<body class="action_dialog"> 
<div id="header" class="header">
	<!--************************************
		HEADER
	*************************************-->
	<div class="header_wrapper">
		<div class="column_one">
			<h2>Aliasing</h2>
			<p>September 2007</p>
		</div>		
		<div class="column_three">
			<a href="#" class="button" onclick="doSave();"><span>Save</span></a>
			<a href="#" onclick="javascript:window.close();" class="button"><span>Cancel</span></a>
		</div>
	</div>
	<!--************************************
		MESSAGES
	*************************************-->
	<div id="page_message" class="message info">
		<p>Click save to view errors.</p>
	</div>
</div>
<div id="content" class="content">
    <form id="form_dialogs" name="form_dialogs" action="javascript: void(0);">
        <div id="edit_mode">
            <fieldset class="dynamic">

	            <!-- EDITABLE -->
                <dl class="side_by_side">
                    <dt title="Single Select Search"><label for="textbox1" >Aliasing:</label></dt>
                    <dd>
                        <div id="sss" class="sss medium_width" style="height:82px;">
                            <input type="text" id="textbox1" class="textbox1" autocomplete="off" />
                            <ul id="pillbox" class="pillbox" style="height:60px; overflow-x:hidden;"></ul>
                        </div>
                    </dd>
                </dl>
            </fieldset>
        </div>
    </form>
</div>
</body>
</html>