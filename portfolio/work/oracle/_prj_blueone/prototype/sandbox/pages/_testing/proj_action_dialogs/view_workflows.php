<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="view_workflows.php.js"></script>
	<title>View Workflows...</title>
</head>
<body class="action_dialog workflow">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>View Workflows</h2>
                <p>Object Type &bull; Identifier</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset class="dynamic">
                <!-- Required Select -->
                <p style="padding: 20px 0 0 30px;"><label for="first_field">View:</label>
                    <select id="selector" id="first_field" class="medium_width">
                        <option value="auto">Chang Orders - Auto</option>
                        <option value="manual">Chang Orders - Manual</option>
                    </select>
                </p>
            </fieldset>
		</form>
        <div class="item_workflow" style="height: 220px;">
            <table cellspacing="0" cellpadding="0" class="workflow_diagram">
              <tr>
                <td class="held nohover state">Pending</td>
                <td class="diagram_arrow">&nbsp;</td>
                <td class="held nohover state">Submitted</td>
                <td class="diagram_arrow">&nbsp;</td>
                <td class="held nohover state">CCB</td>
                <td class="diagram_arrow">&nbsp;</td>
                <td class="held nohover state">Released</td>
                <td class="diagram_arrow">&nbsp;</td>
                <td class="held nohover state">Implemented</td>
              </tr>
            </table>
        </div>
      </div>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
    </div>
</div>
</body>
</html>
