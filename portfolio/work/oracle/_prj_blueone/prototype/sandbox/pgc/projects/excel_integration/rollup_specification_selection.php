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
	<title>Rollup Specification Selection</title>
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
                <h2>Rollup Specification Selection</h2>
                <p>MD0 &bull; Specification Selection</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Please select the specification to use for the substance and weight roll-up.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
            


                <!-- Required Select -->
                <dt><label for="first_field">Specifications:</label></dt>
                <dd>
                    <select id="first_field" class="long_width">
	                    <option value="">BOAT Spec</option>
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
        <a href="#" id="cmdOk" class="button"><span><em class="save_dialog">&nbsp;</em>OK</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
