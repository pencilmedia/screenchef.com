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

    <style type="text/css">
		.shuttle_control .colonnade {
			position: relative;
			top: 0;
			left: 0;
			width: 100%;
			min-width: 525px;
			min-height: 175px;
			padding: 0;
		}
    	.shuttle_control .lt_column {
			position: absolute;
			top: 0;
			left: 0;
			width: 49.5%;
			min-width: 200px;
			margin: 0;
			padding: 0;
		}
		.shuttle_control .rt_column {
			position: absolute;
			top: 0;
			right: 0;
			width: 49.5%;
			min-width: 200px;
			margin: 0 0 0 50%;
			padding: 0;
		}
		.shuttle_control .colonnade h4 {
			font-size: 115%;
			font-weight: bold;
			margin: 0 0 5px 0 !important;
		}
		.shuttle_control .colonnade ul {
			float: left;
			width: 86%;
			min-height: 150px;
			padding: 0;
			border: 1px solid silver;
		}

		.shuttle_control .colonnade ul li {
			cursor:pointer;
			padding: 2px;
		}
		.shuttle_control .colonnade ul li.selected {
			background-color: #efefef;
		}

		
		.shuttle_control .colonnade select option {
			padding: 3px;
		}
		.shuttle_control .colonnade p {
			float: left;
			width: auto;
			clear: right;
			margin-left: 3px;
			margin-top: 40px;
		}		
		.shuttle_control .colonnade p a.button {
			display: block;
			clear: right;
			margin-top: -5px !important;
		}
    </style>
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
                    <ul id="sc_control_1" class="shuttle_control">
                    	<li>Anthony Moquette</li>
                    	<li>Ralph Garcia</li>
                    	<li>Leader of the Day Workers</li>
                    	<li>Miss Tiff</li>
                    	<li>Uday</li>
                    	<li>Kanda</li>
                    </ul>
                    <p>
                        <a href="#" class="button" id="scr"><span><em class="iconic shuttle_control_right">&nbsp;</em>&nbsp;</span></a>
                        <a href="#" class="button" id="scl"><span><em class="iconic shuttle_control_left">&nbsp;</em>&nbsp;</span></a>
                    </p>
                </div>
                <div class="rt_column">
                	<h4>Selected Values</h4>
                    <ul id="sc_control_2" class="shuttle"></ul>
                    <p>
                        <a href="#" class="button" id="scu"><span><em class="iconic shuttle_control_up">&nbsp;</em>&nbsp;</span></a>
                        <a href="#" class="button" id="scd"><span><em class="iconic shuttle_control_down">&nbsp;</em>&nbsp;</span></a>
                    </p>
                </div>
            </div>
        </fieldset>
    </form>
</div>
    
    <!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>