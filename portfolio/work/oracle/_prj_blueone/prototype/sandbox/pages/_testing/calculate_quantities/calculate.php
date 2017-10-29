<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Calculate Quantities Prompt</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
   	<link rel="stylesheet" type="text/css" href="global/css/multi_select_cascade_list_tree.css" />
    
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs.js"></script>
    <script type="text/javascript" src="global/js/agile_animations.js"></script>
    <!-- JQUERY -->
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="calculate.php.js"></script>
    
    <script type="text/javascript">
    	jQuery.noConflict();
    </script>
</head>
<body class="action_dialog"> 
<div class="prompt_mask"></div>
<div class="prompt_shadow">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Calculate Quantities</h4>
                <p>Calculating quantities will result in modified quantities in this project, related RFQs and RFQ Responses.  Click Calculate to execute this action.</p>
                <dl class="side_by_side_mixed chk_group prompt_options">
                    <dt>&nbsp;</dt>
                    <dd><label><input type="checkbox" id="one_member" name="opt1" />Perform this as a background process</label></dd>
                </dl>
            </fieldset>
        </form>
        <div class="prompt_footer">
	        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Calculate</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
        </div>
    </div>
</div>
<!--************************************
    HEADER
*************************************-->
<div id="header" class="header">
	<div class="header_wrapper">
            <div class="column_one">
                <h2>Calculate Quantities</h2>
                <p>Sourcing Project &bull; SPIdentifier 001</p>
            </div>		
		<div class="column_three">
		</div>
	</div>
	<!--************************************
		MESSAGES
	*************************************-->
        <div id="page_message" class="message info">
            <p>Calculating quantities will result in modified quantities in this project, related RFQs and RFQ Responses.  Click Calculate to execute this action.</p>
        </div>
</div>

<!--************************************
    CONTENT
*************************************-->
<div id="content" class="content">
	<h4>Prompt</h4>
</div>
</body>
</html>