<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="create_declaration.php.js"></script>
	<title>Create Declaration</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create New</h2>
                <p>Declaration</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the type of declaration to create and complete.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side_mixed">
                <!-- Required Select -->
                <dt class="required"><label for="req_sel_00">Type:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="">Materials Declaration</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
                <!-- Auto Number -->
                <dt class="required"><label for="autoNumber">Number:</label></dt>
                <dd>
                    <input type="text" id="autoNumber" value="P00023" class="auto_number_field long_width" />
                    <a href="#" id="cmdAutoNumber" class="button"><span><em class="iconic auto_number">&nbsp;</em>&nbsp;</span></a>
                </dd>
			</dl>
		</fieldset>
        <fieldset class="dynamic">
        	<dl class="side_by_side_mixed">
                <dt class="required"><label for="amo_01">Supplier:</label></dt>
                <dd>
                     <p class="side_by_side_radio">
                         <input id="sel1" type="radio" name="for_location" class="form_selectors" checked /> <label id="sel_approved" for="sel1">Approved</label>
                         <input id="sel2" type="radio" name="for_location" class="form_selectors" /> <label id="sel_other" for="sel2">Other Supplier</label>
                     </p>
                    <select id="txt_supplier" class="long_width">
                        <option value="">Motorola</option>
                    </select>

                    <div id="other1" class="list_control single_list long_width">
                        <input type="text" id="cp_01" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox"></ul>
                      	</div>
                    </div>
                    <a href="#" id="other2" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>


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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Create</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
