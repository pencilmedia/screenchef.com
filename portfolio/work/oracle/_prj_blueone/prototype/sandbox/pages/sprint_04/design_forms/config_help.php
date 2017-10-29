<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="../../../global/css/default.css" />
	<script type="text/javascript" src="../../../global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="../../../global/js/common.js"></script>
	<script type="text/javascript" src="../../../global/js/action_dialogs.js"></script>
	<title>Configure Help</title>
    <script type="text/javascript" language="javascript">
		/* Temporary */
		addLoadEvent(resizeActionDialog2);
		addResizeEvent(resizeActionDialog2);		
    </script>
    
    <style>	
	
    	fieldset p span {
			float: left;
			margin-right: 5px;
		}
    	fieldset p label {
			margin-top: 4px;
			margin-right: 5px; 
		}
		fieldset p.first {
			margin-top: 10px;
		}
		fieldset.mixed_content p {
			margin: 10px 20px;
			clear: both;
		}
		fieldset.text_content {
			padding-bottom: 10px;
		}
		fieldset.text_content p {
			margin: 10px 20px;
			clear: both;
		}
		fieldset.text_content p.indent_content {
			margin-left: 40px
		}
		
    </style>
</head>
<body class="action_dialog" onload="configSetup()">
	<div id="header2" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Configure Help</h2>
                <p>Program</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </div>
	</div>
	<div id="content2" class="content" style="overflow-x: hidden;">
    <form id="form_dialogs" name="configure_help" action="">
    	<fieldset class="mixed_content">
            <legend>Help</legend>
        	<p class="first">
                <span><input id="first_field" type="radio" name="config_help_type" checked="checked" class="form_selectors" onclick="disableConfigHelpText()" /></span><label for="first_field">URL:</label><input type="text" id="config_help_url" class="long_width" />
            </p>
            <p>   
                <span><input type="radio" name="config_help_type" id="config_help_text" class="form_selectors" onclick="enableConfigHelpText()" /></span>
                <label for="config_help_text" style="float: left;">Text:</label>
                <textarea id="config_help_textbox" class="long_width" rows="8"></textarea>
            </p>
        </fieldset>  
    	<fieldset class="text_content">
            <legend>Apply To</legend>
            <p class="first">
                <span><input type="radio" name="config_apply" checked="checked" id="config_program" class="form_selectors" onclick="programSubclass()" /></span><label for="config_program">Set for the <strong>Program</strong> subclass only</label>
            </p>
            <p>   
                <span><input type="radio" name="config_apply" id="config_activities" class="form_selectors" onclick="activitiesSubclass()" /></span><label for="config_activities">Set as default for all <strong>Activities</strong> subclasses</label>
            </p>
            <p class="indent_content">   
                <span><input type="checkbox" name="override" id="override_settings" class="form_selectors" /></span><label for="override_settings">Override current settings</label>
            </p>
        </fieldset>  
    </form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="footer" class="footer">
    <div class="column_one">
    	<a href="#" onclick="doSave();" class="button"><span>Preview</span></a>
    </div>
    <div class="column_three">
        <a href="#" onclick="doSave();" class="button"><span><em class="save_dialog">&nbsp;</em> Save</span></a>
        <a href="#" onclick="window.close();" id="close_button" class="button"><span><em class="cancel">&nbsp;</em> Cancel</span></a>
    </div>
</div>
</body>
</html>