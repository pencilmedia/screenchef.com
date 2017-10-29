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
    <script type="text/javascript" src="set_as_best_auto_select.php.js"></script>
	<title>Auto-Select Best Responses</title>
    <style>
		.temp_00
		{
			width: 85%;
			height: 70px;
			float: left;
			margin-right: 5px;
		}
		.spinner_buttons { margin: 10px 0 5px 5px; }
	</style>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Auto-Select Best Responses</h2>
                <p>Sourcing Project &bull; PRJ00063</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="dms" class="dms message"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p></div>-->
        <div id="page_message" class="message info">
            <p>Auto-Selections are based on a single price scenario.  Select the scenario to analyze and specify your criteria.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset>
        	<legend>Content Selection Criteria</legend>
            <dl class="side_by_side_mixed chk_group with_top_margin">

                <dt><label for="req_sel_00">Analyze Scenario:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="">Quantity Break 1</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
			</dl>
            <dl class="side_by_side_mixed chk_group with_top_margin">
                <dt>Select for:</dt>
                <dd class="radio_with_bottom_margin">
                    <input id="pub_mode_red" type="radio" name="pub_mode" class="form_selectors" /> <label for="pub_mode_red">Selected Items Only</label>
                	<input id="pub_mode_auth" type="radio" name="pub_mode" class="form_selectors" checked /> <label for="pub_mode_auth">All Items</label> &nbsp;
               	</dd>
				

				<dt><label>Include:</label></dt>
				<dd>
					<input id="chk1" type="checkbox" name="" class="form_selectors" checked="checked" /> <label for="chk1">Alternate Parts</label>
					<input id="chk4" type="checkbox" name="" class="form_selectors" style="margin-left:10px;" /> <label for="chk4">Historical Quote Responses</label>
				</dd>

            </dl>
        </fieldset>
        <fieldset>
        	<legend>Primary Selection Criteria</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_00">First By:</label></dt>
                <dd>
                    <select id="sel1_select" class="long_width">
                        <option value="">------- Select Criteria --------</option>
                        <option value="II">Lowest coste within lead-time constraint</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
                <dt class="sel1"><label for="req_sel_001a">Constraint:</label></dt>
				<dd class="sel1">
                	<input type="text" class="short_width" value="90" /> days
                </dd>                
          	</dl>
      	</fieldset>
        <fieldset>
        	<legend>Secondary Selection Criteria</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <dt><label for="req_sel_02">Then By:</label></dt>
                <dd>
                    <select id="sel2_select" class="long_width">
                        <option value="">------- Select Criteria --------</option>
                        <option value="II">Supplier rating</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
                <dt class="sel2"><label for="req_sel_001a">Rating Order:</label></dt>
				<dd class="sel2">
                	<select multiple="multiple" class="temp_00">
		               	<option>Strategic</option>
                        <option>Approved</option>
                        <option>Offered Active</option>
                        <option>Offered Inactive</option>
                    </select>
                    <p class="spinner_buttons"><a href="#" class="button top"><span><em class="iconic shuttle_up"> </em></span></a></p>
					<p><a href="#" class="button"><span><em class="iconic shuttle_down"> </em></span></a></p>
                </dd> 
            </dl>
        </fieldset>
        <fieldset>
        	<legend>Tertiary Selection Criteria</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_03">Then By:</label></dt>
                <dd>
                    <select id="sel3_select" class="long_width">
                        <option value="">------- Select Criteria --------</option>
                        <option value="II">Supplier rating</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>                            
                <dt class="sel3"><label for="req_sel_001a">Rating Order:</label></dt>
				<dd class="sel3">
                    <select multiple="multiple" class="temp_00">
		               	<option>Preferred</option>
                        <option>Alternate</option>
                    </select>
                    <p class="spinner_buttons"><a href="#" class="button top"><span><em class="iconic shuttle_up"> </em></span></a></p>
					<p><a href="#" class="button"><span><em class="iconic shuttle_down"> </em></span></a></p>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Auto-Select</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
