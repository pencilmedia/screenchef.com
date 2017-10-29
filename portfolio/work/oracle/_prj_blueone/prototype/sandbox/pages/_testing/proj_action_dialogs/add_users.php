<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="save_as.php.js"></script>
	<title>Add Users</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add Users</h2>
                <p>Part &bull; P00034</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select users and assign roles.</p>
        </div>
	</div>


	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
		<dl class="side_by_side_mixed">
            <dt class="required"><label for="first_field">Users</label></dt>
            <dd>
                <div class="list_control multi_list long_width">
                    <input type="text" autocomplete="off" value="" id="first_field" />
                    <div class="auto_complete_results"></div>
                    <div class="pill_container" tabindex="-1">
                        <ul id="pillbox"></li></ul>
                    </div>
                </div>
                <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
            </dd>   
            <dt class="required"><label for="msl">Roles</label></dt>
            <dd>
                <div class="controlOuterContainer multi_list long_width" id="mssContainer_nv">
                    <input type="text" autocomplete="off" id="msl" class="search_query" />
                    <div style="display: none;" class="added_notice" id="mss_added_notice_nv">Added</div>
                    <div tabindex="-1" class="selected_container" id="mss_targetContainer_nv">
                        <ul id="mss_pillbox_nv"/>
                    </div>
                </div>
                <a class="button" id="cmdMssPallete_nv" href="#"><span><em class="view_details"> </em> </span></a>
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
    	
    </div>
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
