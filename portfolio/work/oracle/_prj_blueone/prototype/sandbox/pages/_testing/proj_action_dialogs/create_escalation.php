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
    <script type="text/javascript" src="substitute_resource.php.js"></script>
	<title>Create Escalation</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Escalation</h2>
                <p>User &bull; User 1</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the escalation criteria and which users to notify on an escalation.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                <dt class="required"><label for="sel_00">Criteria:</label></dt>
				<dd>
					<select id="sel_00" class="long_width">
                        <option value=""></option>
                        <option value="">All Active RFQs</option>
                        <option value="">All Active Sourcing Project</option>
                        <option value="">All Activities</option>
                        <option value="">All Administrator Reports</option>
                        <option value="">All Audits</option>
    
                        <option value="">All Automated Tranfer Orders</option>
                        <option value="">All Cancelled Programs</option>
                        <option value="">All Cancelled Programs I am owner of</option>
                        <option value="">All Cancelled Programs, Phases, Tasks and Gates</option>
                        <option value="">All Cancelled Programs, Phases, Tasks and Gates I am owner of</option>
                        <option value="">All CAPAs</option>
    
                        <option value="">All Change Orders</option>
                        <option value="">All Change Orders for which I am the originator</option>
                        <option value="">All Change Orders with folders checked out by me</option>
                        <option value="">All Change Orders, Released or Under Review</option>
                        <option value="">All Change Requests</option>
                        <option value="">All Change Requests for which I am the originator</option>
    
                        <option value="">All Changes</option>
                        <option value="">All Changes for which I am the originator</option>
                        <option value="">All Changes with folders checked out by me</option>
                        <option value="">All Changes, Cancelled or Under Review or Held or Pending or Unassigned or Submitted</option>
                        <option value="">All Closed Supplier RFQ Responses</option>
                        <option value="">All Compliance Reports</option>
    
                        <option value="">All Content Tranfer Orders</option>
                        <option value="">All Custom Reports</option>
                        <option value="">All Customer Complaints</option>
                        <option value="">All Customers</option>
                        <option value="">All Customers with folders checked out by me</option>
                        <option value="">All Declarations</option>
    
                        <option value="">All Declarations for everything</option>
                        <option value="">All Declarations with folders checked by me</option>
                        <option value="">All Deviations</option>
                        <option value="">All Deviations for which I am the originator</option>
                        <option value="">All Discussions</option>
                        <option value="">All Discussions I am notified about</option>
    
                        <option value="">All Disussions with a status</option>
                        <option value="">All Disussions with a status that have folders checked out by me</option>
                        <option value="">All Disussions without a status</option>
                        <option value="">All Disussions without any status that have folders checked out by me</option>
                        <option value="">All Documentations</option>
                        <option value="">All Documentations with a lifecycle phase</option>
    
                        <option value="">All Draft/Closed RFQs</option>
                        <option value="">All Draft/Open Sourcing Projects</option>
                        <option value="">All File Folders</option>
                        <option value="">All File Folders checked out by me</option>
                        <option value="">All Gates</option>
                        <option value="">All Gates I am a team member of</option>
    
                        <option value="">All Global User Groups</option>
					</select>
				</dd>



                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="msl_00">Notify Users:</label></dt>
                <dd>
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="addressbook">&nbsp;</em></span></a>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Create</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
