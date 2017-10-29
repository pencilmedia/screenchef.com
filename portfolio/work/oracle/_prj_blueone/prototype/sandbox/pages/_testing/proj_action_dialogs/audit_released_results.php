<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="audit_status_results.php.js"></script>
	<title>Audit Status Results</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Audit Released Results</h2>
                <p>Change &bull; C01701</p>
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

        <h4>Errors</h4>
        <ul class="reminder">
        	<li>
            	<p class="strong">The following affected items do not have the New Rev Set:</p>
                <p>P00014, P00015, P00016, P00017, P00018, P00019</p>
            </li>
        	<li>
            	<p class="strong">The following affected items do not have Description Set:</p>
                <p>P00015, P00024</p>
            </li>
        </ul>

        <h4>Warnings</h4>
        <ul class="reminder">
        	<li>
            	<p class="strong">The following affected items have pending changes:</p>
                <p>MTI1001</p>
            </li>
        	<li>
            	<p class="strong">There is a gap between the obsolete date of the old change and the effective date of the new change for the following:</p>
                <p>MTI1001, P00011, P00012, P00013, P00014, P00015</p>
            </li>
        </ul>

	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
        <a href="#" id="cmdPrint" class="button"><span>Print</span></a> 
    </div>
    <div class="column_three">
        <a href="#" id="cmdContinue" class="button disabled"><span><em class="save_dialog">&nbsp;</em>Continue</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
    </div>
</div>
</body>
</html>
