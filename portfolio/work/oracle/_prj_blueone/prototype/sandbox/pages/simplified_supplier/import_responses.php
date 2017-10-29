<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.progress_indicator.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<title>Import Responses</title>
</head>
<body class="action_dialog wizard">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Import Responses</h2>
                <p>Import Source</p>
            </div>		
        </div>
        <div class="message info">
            <p>Select a file to import.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <div id="step_1" class="step">
				<dl class="side_by_side_mixed">
                    <dt class="required"><label for="req_sel_00">Import File:</label></dt>
                    <dd>
                        <input id="file_selector" type="file" class="file_selector" size="50" />
                    </dd>
                    <dt>File Type:</dt>
                    <dd class="side_by_side_radio">
                         <input type="radio" checked="" class="form_selectors" name="for_location" id="sel1"/> <label for="sel1">Supplier Response File (.csv .txt or .xls)</label>
                	</dd>
                </dl>
            </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div id="divTableFormat" class="column_one">
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdImport" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Import</span></a>
	        <a href="#" id="cmdClose" class="button"><span>Validate</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
