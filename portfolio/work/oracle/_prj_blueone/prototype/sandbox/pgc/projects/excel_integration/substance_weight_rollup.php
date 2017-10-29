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
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
    <script type="text/javascript" src="rollup_specification_selection.php.js"></script>
	<title>Substance Weight Roll-Up</title>
</head>
<body class="action_dialog">
<div class="prompt_shadow">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Processing Request...</h4>
                <p style="width: 100%;">Where is the progress indicator for this?</p>
            </fieldset>
        </form>
    </div>
</div>


	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Select Item for Roll-up</h2>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the Item and Specification to use in your roll-up.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
            
                <dt><label for="ssl_00">Item:</label></dt>
                <dd>
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_00" autocomplete="off" value="" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox">
								<li>10D-34009-10 <a id="currentPillAnchor" href="#" tabindex="-1"><span>&nbsp;</span></a></li>                            
                            </ul>

                      	</div>
                    </div>
                    <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>  

                <dt><label for="first_field">Specifications:</label></dt>
                <dd>
                    <select id="first_field" class="long_width">
	                    <option value="">China RoHSc</option>
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
        <a href="#" id="cmdOk" class="button"><span><em class="save_dialog">&nbsp;</em>Open</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
