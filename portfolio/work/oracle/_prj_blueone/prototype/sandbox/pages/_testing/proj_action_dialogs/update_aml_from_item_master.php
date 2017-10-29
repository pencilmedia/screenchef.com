<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script><script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="update_aml_from_item_master.php.js"></script>
	<title>Update AML from Item Master</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Update AML from Item Master</h2>
                <p>Sourcing Project &bull; SPIdentifier 001</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Select the Approved Manufacturers List (AML) information that you would like to update.  If you would like to maintain AML modifications made in the Sourcing Project, then select to not overwrite Sourcing Project Changes.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset class="dynamic aml">
                <p class="aml_options"><input type="checkbox" id="chk1" checked="checked" /> <label for="chk1">Update the AML</label></p>
                <p><input type="radio" id="opt1" name="opt1" class="opt" checked="checked" /> <label for="opt1"  id="lbl1">Do not overwrite changes made in this Sourcing Project</label></p>
                <p><input type="radio" id="opt2" name="opt1"  class="opt" /> <label for="opt2"  id="lbl2">Overwrite changes made in this Sourcing Project</label></p>

                <p class="aml_options"><input type="checkbox" id="chk2" /> <label for="chk2">Update AML Attributes</label></p>
                <p><input type="radio" id="opt3" name="opt2"  class="opt" disabled="disabled"/> <label for="opt3" id="lbl3" class="disabled">Do not overwrite changes made in this Sourcing Project</label></p>
                <p><input type="radio" id="opt4" name="opt2"  class="opt" disabled="disabled" /> <label for="opt4" id="lbl4" class="disabled">Overwrite changes made in this Sourcing Project</label></p>
            </fieldset>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_three">
	        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Update</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>