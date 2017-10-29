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
	<title>Create Transfer Authority</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Transfer Authority</h2>
                <p>&nbsp;</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>You can transfer the sign-off authority of one user to another for a specified period of time. Use criteria to define which workflows to transfer.</p>
        </div>
	</div>


	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                    <dt class="required"><label for="textbox1" >From User:</label></dt>
                    <dd>
                        <div class="list_control single_list long_width">
                            <input type="text" id="textbox1" class="textbox1" autocomplete="off" />
                            <div id="sss_autoCompleteList" class="auto_complete_results"></div>
                                <div class="pill_container" tabindex="-1">
                                    <ul id="sss_pillbox" class="pillbox"></ul>
                                </div>
                        </div>
                      <a href="#" class="button"><span><em class="addressbook">&nbsp;</em></span></a>
                    </dd>
                    <dt class="required"><label for="textbox2">To User:</label></dt>
                    <dd>
                        <div class="list_control single_list long_width">
                            <input type="text" id="textbox2" class="textbox1" autocomplete="off" />
                            <div id="sss_autoCompleteList2" class="auto_complete_results"></div>
                                <div class="pill_container" tabindex="-1">
                                    <ul id="sss_pillbox2" class="pillbox"></ul>
                                </div>
                        </div>
                      <a href="#" class="button"><span><em class="addressbook">&nbsp;</em></span></a>
                    </dd>
              	</dl>
           		<dl class="side_by_side_mixed with_top_margin">
                    <dt class="required"><label for="change1">Affected Changes:</label></dt>
                    <dd>				
                        <select id="change1" class="medium_width">
                            <option value="Option 1">Global.AAA_Affected Items</option>
                        </select>
                      <a href="#" class="button"><span><em class="createNew">&nbsp;</em></span></a>
                    </dd>
                    <dt class="required"><label for="date1">Start Date:</label></dt>
                    <dd>
                        <input type="text" id="date1" class="medium_width" />
                        <a href="#" class="button"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
                    </dd>
                    <dt class="required"><label for="date2">End Date:</label></dt>
                    <dd>
                        <input type="text" id="date2" class="medium_width" />
                        <a href="#" class="button"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
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
    	&nbsp;
    </div>
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
