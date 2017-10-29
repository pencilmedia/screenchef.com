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
    <script type="text/javascript" src="reject.php.js"></script>
    <title>Add Escalation</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add Escalation</h2>
                <p>User &bull; Bob Adriv</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Specify the criteria to be used for escalation and the users to escalate to.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
			<dl class="side_by_side_mixed">
                <dt class="required"><label for="multitext_counter">Criteria:</label></dt>
                <dd>
                    <select id="select_01" name="list_selector_01" tabindex="16" class="long_width">
                        <option>&nbsp;</option>
                    </select>
                </dd>

                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="msl_00">Notify List</label></dt>
                <dd class="with_bottom_margin">
						<div class="controlOuterContainer long_width" id="mssContainer">
                            <input type="text" autocomplete="off" class="search_query" id="target_query"/>
							<div tabindex="-1" class="selected_container " id="mss_targetContainer">
								<ul id="mss_pillbox1"><li title="Joel Nave">Joel Nave<a href="#"><span>x</span></a></li></ul>
								<ul id="mss_pillbox2"><li title="Joel Nave">Paul Maguire<a href="#"><span>x</span></a></li></ul>
								<ul id="mss_pillbox3"><li title="Joel Nave">Peter Parker<a href="#"><span>x</span></a></li></ul>
								<ul id="mss_pillbox4"><li title="Joel Nave">Ralph Garcia<a href="#"><span>x</span></a></li></ul>
							  </div>
						</div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>