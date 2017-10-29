
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
                <h2>Add Dependency</h2>
                <p>Task &bull; Create Marketing Plan</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
			<p>Select the activities to define a dependency and specify the dependency type and any time buffer.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
				<form id="form1" name="form1" action="#">
        <fieldset>
        	<legend> Select Dependent Activities</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT BOX -->

                <!-- MULTI SELECT LIST -->
                <dt><label for="cp_01">From Program:</label></dt>
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
               
				<dt><label for="first_field" title="Type">Type:</label></dt>
				<dd>
                    <select class="long_width" id="type">
                        <option value="">Task</option>
                        <option value="">Published Price</option>
                  	</select>
                    <span class="error_msg hidden" style="display: none;">Error message...</span>
                </dd>
			</dl>
            <dl class="side_by_side_mixed with_top_margin">

                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="amo_00">Activities:</label></dt>
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
            </dl>
        </fieldset>


        <fieldset>
        	<legend>Specify Dependency Relationship</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT BOX -->

				<dt class="required"><label for="first_field" title="Type">Type:</label></dt>
				<dd>
                    <select class="long_width" id="type">
                        <option value="">Task</option>
                        <option value="">Published Price</option>
                  	</select>
                    <span class="error_msg hidden" style="display: none;">Error message...</span>
                </dd>


                <!-- MULTI SELECT LIST -->
                <dt><label for="amo_00">Time Buffer:</label></dt>
                <dd>
					<input type="text" class="short_width" value="5" /> Days
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
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
