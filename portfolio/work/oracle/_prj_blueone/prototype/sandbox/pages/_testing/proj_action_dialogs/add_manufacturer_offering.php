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
	<title>Add Manufacturer Offering</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add Manufacturer Offering</h2>
                <p>Supplier &bull; Avnet</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select one or more Manufacturers to add to the supplier's list of offerings. Offerings can be assigned to a ship-to location, or by geography based on continents, countries or regions.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_bottom_margin">
            
                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="amo_00">Manufacturers:</label></dt>
                <dd>
                    <div class="list_control multi_list long_width">
                        <input type="text" id="amo_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_amo_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>                

                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="amo_01">For Locations:</label></dt>
                <dd>
                     <p class="side_by_side_radio with_bottom_margin">
                         <input id="by_ship" type="radio" name="for_location" class="form_selectors" checked /> <label for="by_ship">By Ship-To</label>
                          <input id="by_geo" type="radio" name="for_location" class="form_selectors" /> <label for="by_geo">By Geography</label>
                     </p>
                    <div class="list_control multi_list long_width">
                        <input type="text" id="amo_01" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_amo_01" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>      
                
                 <!-- Required Select -->
                <dt class="required"><label for="amo_02">Rating:</label></dt>
                <dd>
                    <select id="amo_02" class="long_width">
						<option>Approved</option>
						<option>TBD</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
