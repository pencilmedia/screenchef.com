
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="create_new_published_prices.php.js"></script>
	<title>Create New...</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create New</h2>
                <p>Published Prices</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
            


                <!-- Required Select -->
                <dt class="required"><label for="first_field">Type:</label></dt>
                <dd>
                    <select id="first_field" class="long_width">
                        <option value="" selected="selected"></option>
                        <option value="">Contract</option>
                        <option value="">Published Price</option>
                  	</select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
            



                <!-- Auto Number -->
                <dt class="hidden"><label for="autoNumber">Number:</label></dt>
                <dd class="hidden">
                    <input type="text" id="autoNumber" value="100664" class="auto_number_field disabled long_width" disabled="disabled" />
                    <a href="#" id="cmdAutoNumber" class="button"><span><em class="iconic auto_number">&nbsp;</em>&nbsp;</span></a>
                </dd>



                <!-- Required Select -->
                <dt class="required hidden"><label for="req_sel_00">Type:</label></dt>
                <dd class="hidden">
                    <select id="req_sel_00" class="long_width">
                        <option value="" selected="selected"></option>
						<option value="">Item</option>
						<option value="">Manufacturer Part</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>

                            
                <!-- SINGLE SELECT LIST -->
                <dt class="hidden"><label for="ssl_00">Number:</label></dt>
                <dd class="hidden with_bottom_margin">
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                        </div>
                    </div>
                    <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd> 
                    

                <!-- SINGLE SELECT LIST -->
                <dt class="required hidden"><label for="ssl_01">Supplier:</label></dt>
                <dd class="hidden">
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_01" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_01"></ul>
                        </div>
                    </div>
                    <a href="#" id="cmd_ssl_01" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd> 
                
                
                <!-- SINGLE SELECT LIST -->
                <dt class="hidden"><label for="ssl_02">Manufacturing Site:</label></dt>
                <dd class="hidden">
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_02" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_02"></ul>
                        </div>
                    </div>
                    <a href="#" id="cmd_ssl_02" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd> 
                
                 <!-- SINGLE SELECT LIST -->
                <dt class="hidden"><label for="ssl_03">Program:</label></dt>
                <dd class="hidden">
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_03" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_03"></ul>
                        </div>
                    </div>
                    <a href="#" id="cmd_ssl_03" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd> 

                <!-- SINGLE SELECT LIST -->
                <dt class="hidden"><label for="ssl_04">Customer:</label></dt>
                <dd class="hidden">
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_04" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_04"></ul>
                        </div>
                    </div>
                    <a href="#" id="cmd_ssl_04" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
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
    	<input type="checkbox" id="optional" /> <label for="optional">Continue creation in wizard</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
