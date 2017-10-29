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
	<title>Add Transfer Specifications</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add Transfer Specifications</h2>
                <p>CTO &bull; CTO1234</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Specify the transfer destination and select transfer options.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_bottom_margin">
            
            

                <!-- TEXT CONTROL -->
                <dt><label for="sel_00">Destination:</label></dt>
				<dd>

					<select id="sel_00" class="long_width">
						<option value="">Example Destination</option>
					</select>
				</dd>

                <!-- MULTI SELECT LIST -->
                <dt><label for="msl_00">Filters</label></dt>
                <dd>
                    <div class="list_control multi_list long_width">

                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic action_list">&nbsp;</em>&nbsp;</span></a>
                </dd>



                <dt><label for="sel_00">Output Type:</label></dt>
				<dd>

					<select id="sel_00" class="long_width">
						<option value="">aXML</option>
						<option value="">PDX</option>
					</select>
				</dd>

                <dt><label for="sel_00">Site:</label></dt>
				<dd>

					<select id="sel_00" class="long_width">
						<option value="">All</option>
					</select>
				</dd>
                
                <dt><label for="sel_00">Language:</label></dt>
				<dd>

					<select id="sel_00" class="long_width">
						<option value="">English</option>
					</select>
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
