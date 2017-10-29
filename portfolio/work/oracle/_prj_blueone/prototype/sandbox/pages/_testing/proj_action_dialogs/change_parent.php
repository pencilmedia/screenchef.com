
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<title>Change Parent</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Change Parent</h2>
                <p>Program &bull; New Product development</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
			<p>Select a new parent.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
				<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                
                <!-- SELECT BOX -->
                <dt><label for="cp_00">Current Parent:</label></dt>
                <dd> 
                	<input type="text" id="cp_00" value="CCM" class="long_width" disabled="disabled" />
                    <span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="cp_01">New Parent:</label></dt>
                <dd>
                    <div class="list_control single_list long_width">
                        <input type="text" id="cp_01" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_cp_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>                       
               
            </dl>
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Change</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
