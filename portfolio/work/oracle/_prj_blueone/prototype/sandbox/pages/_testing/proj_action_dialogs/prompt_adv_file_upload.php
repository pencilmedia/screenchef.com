<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <title>File Upload Method</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>File Upload Method</h2>
                <p>&nbsp;</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select a preferred method for uploading files.  The Advanced File upload tool requires java.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		 <form id="form_dialogs" class="file_upload" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side_mixed selector_list">
			<dt class="place_holder">blank</dt>
					<dd><input type="radio" name="ui_control_id_45de2a82c05a12.25477507" class="form_selectors" value="using the advanced file upload tool" id="first_field" checked="checked"  /><label for="first_field">Use the Advanced File Upload tool</label></dd>
			<dt class="place_holder">blank</dt>
					<dd><input type="radio" name="ui_control_id_45de2a82c05a12.25477507" class="form_selectors" value="using the standard upload capability" id="ui_control_id_45de2a82c07016.93530266"   /><label for="ui_control_id_45de2a82c07016.93530266">Use the standard upload capability</label></dd>
			</dl>
		</fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    	<input type="checkbox" id="optional" /> <label for="optional">Do not prompt me again</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
