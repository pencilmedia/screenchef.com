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
    <script type="text/javascript" src="publish_to_item_master.php.js"></script>
	<title>Publish to Item Master</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Publish to Item Master</h2>
                <p>Sourcing Project &bull; PRJ00063</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="dms" class="dms message"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p></div>-->
        <div id="page_message" class="message info">
            <p>Specify the content to publish, what type to publish as, and the publising mode.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset>
        	<legend>Specify Content to Publish</legend>
            <dl class="side_by_side_mixed chk_group with_top_margin">

				<dt><label>&nbsp;</label></dt>
				<dd>
					<input id="chk1" type="checkbox" name="" class="form_selectors" checked="checked" /> <label for="chk1">Item</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="chk2" type="checkbox" name="" style="margin-left: 30px;" checked="checked" /> <label for="chk2">Bill of Material</label>
				</dd>

				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="chk3" type="checkbox" name="" style="margin-left: 30px;" checked="checked" /> <label for="chk3">Approved Manufacturers List</label>
				</dd>

				<dt><label>&nbsp;</label></dt>
				<dd>
					<input id="chk4" type="checkbox" name="" class="form_selectors" /> <label for="chk4">Manufacturer Part</label>
				</dd>

            </dl>
        </fieldset>
        <fieldset>
        	<legend>Specify Default Types</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_00">Items:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="">Assembly</option>
                        <option value="">Opt 2</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
            
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_01">Manufacturers:</label></dt>
                <dd>
                    <select id="req_sel_01" class="long_width">
                        <option value="">Manufacturer</option>
                        <option value="">Opt 2</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
                
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_02">Manufacturer Parts:</label></dt>
                <dd>
                    <select id="req_sel_02" class="long_width">
                        <option value="">Manufacturer Part</option>
                        <option value="">Opt 2</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>                            
            
			</dl>
		</fieldset>
        <fieldset>
        	<legend>Publish Mode</legend>
            <dl class="side_by_side selector_list">
                <dt>Mode:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="pub_mode_auth" type="radio" name="pub_mode" class="form_selectors" checked /> <label for="pub_mode_auth">Authoring mode</label> &nbsp;
                    
                    <input id="pub_mode_red" type="radio" name="pub_mode" class="form_selectors" /> <label for="pub_mode_red">Redlining mode</label>
               	</dd>

                <!-- MULTI SELECT LIST -->
                <dt><label for="msl_00">Change Order:</label></dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
                <dt id="update_mode"><label for="add_mod">Update Mode:</label></dt>
                <dd class="radio_with_bottom_margin"><input id="add_mod" type="radio" name="update_mode" class="form_selectors" disabled="disabled" /> <label for="add_mod">Only add and modify data (do not delete)</label></dd>
                <dt class="place_holder">Blank</dt>
                <dd class="with_bottom_margin"><input id="add_delete" type="radio" name="update_mode" class="form_selectors" disabled="disabled" /> <label for="add_delete">Add, modify, and delete data</label></dd>

            </dl>
		</fieldset>

		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Publish</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
