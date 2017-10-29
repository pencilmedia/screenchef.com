<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="substitute_resource.php.js"></script>
	<title>Substitute Resouces</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Substitute Resource</h2>
                <p>Program &bull; Hybrid Propulsion System</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the resources to replace. Select &quot;Apply to this level and below&quot; if the replacement should be applied at this level and related activities below this level.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                <dt class="required"><label for="sel_00">Resource to Remove:</label></dt>
				<dd>
					<select id="sel_00" class="long_width">
						<option value="">&nbsp;</option>
						<option value="">Anthony Moquette</option>
						<option value="">Ralph Garcia</option>
						<option value="">Tiffany Altieri</option>
					</select>
				</dd>

                <!-- SINGLE SELECT LIST -->
                <dt class="required"><label for="ssl_00">Replacement Resource:</label></dt>
                <dd>
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_00" autocomplete="off" value="Maguire, Paul (pmaguire)" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox"></li></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                </dd>  

            </dl>
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    	<input type="checkbox" id="optional" /> <label for="optional">Apply to this level and below</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
