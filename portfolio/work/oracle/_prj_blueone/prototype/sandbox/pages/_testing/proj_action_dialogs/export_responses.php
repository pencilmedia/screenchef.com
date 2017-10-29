<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <title>Export</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Export</h2>
                <p>RFQ &bull; RFQ000453</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the output format and click Export. After downloading the file, click close.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		 <form id="form_dialogs" action="">
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side_mixed selector_list">
				<dt>Output Format:</dt>
				<dd>
					<input id="first_field" type="radio" name="s1" class="form_selectors" value="1" checked="checked" />
					<label for="first_field">CSV (comma-delimited)</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="workbook" type="radio" name="s1" class="form_selectors" value="2" />
					<label for="workbook">Microsoft&reg; Excel</label>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Export</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
