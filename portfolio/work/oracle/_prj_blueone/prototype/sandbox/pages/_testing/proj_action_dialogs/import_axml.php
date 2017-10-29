<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/tooltip.css" />
    <link rel="stylesheet" type="text/css" href="global/css/import_wizard.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.progress_indicator.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="import_ipc_axml.php.js"></script>
	<title>Import aXML</title>
	<style type="text/css">
		h4.toggler
		{
			padding:0 15px !important;
			font-size:12px;
			margin-top:10px;
		}	

		div.three_columns
		{
			overflow:hidden;
			margin-left: 20px;
		}
		div.three_columns ul.column_zero 
		{
			width:26%;
			padding-left: 10px;
		}
		div.three_columns ul.column_one,
		div.three_columns ul.column_two
		{
			width:30%;
		}
		p#progress_indicator_message 
		{
			text-align: right;
		}
		
		.message a { margin:0 5px; }
		.message a.first { margin-left:15px; }
}
    </style>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Import aXML</h2>
                <p>Declaration &bull; MD00163</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p id="step_message">Select a file to import. Only Agile XML (axml) file type is supported.</p>
			<p id="progress_indicator_message">Next update in: <strong>1</strong> second(s) <a href="#" class="first">Cancel</a> | <a href="#">Update Now</a></p>
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
                        <span class="error_msg hidden">Error message...</span>
                    </dd>
                </dl>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2						-->
        	<!-- ****************************** -->
            <div id="step_2" class="step import_review">
                <h4 id="toggle_F1" class="collapse toggler">File Information</h4>
                <dl id="toggle_F1_content"class="side_by_side_text">
                    <dt><label>File:</label></dt>
                        <dd>bom123.xls</dd>
                    <dt><label>Content:</label></dt>
                        <dd>Declaration | MD00163</dd>
                    <dt><label>Supplier:</label></dt>
                        <dd>Motorola</dd>
                </dl>

                <h4 id="toggle_F3" class="collapse toggler">Results</h4>
                <dl id="toggle_F3_content" class="side_by_side_text">
                    <dt><label id="r1_label">Import Started:</label></dt>
                        <dd><span id="results_01">&nbsp;</span></dd>
                    <dt><label id="r2_label">Import Completed:</label></dt>
                        <dd><span id="results_02">&nbsp;</span></dd>
                    <dt>&nbsp;</dt><dd>&nbsp;</dd>
                    <dt><label id="r3_label">Substances Created:</label></dt>
                        <dd><span id="results_03">&nbsp;</span></dd>
                    <dt><label id="r4_label">Substances Updated:</label></dt>
                        <dd><span id="results_04">&nbsp;</span></dd>
                    <!--
                    <dt id="r5_dt"><label id="r5_label">Fatal Errors:</label></dt>
                        <dd id="r5_dd">6</dd>-->
                </dl>


                <h4 id="toggle_F4" class="collapse toggler">Messages</h4>
                <dl id="toggle_F4_content" class="side_by_side_text">
                    <dt id="results_05l">Line 10:</dt>
                        <dd><div id="results_05"><span class="msg">Part 222 created</span></div></dd>
                    <dt id="results_06l">Line 33:</dt>
                        <dd><div id="results_06"><span class="msg">Part 112 XXX is an invalid Part and was rejected XXX is an invalid Part and was rejected XXX is an invalid Part and was rejected Part 112 XXX is an invalid Part and was rejected XXX is an invalid Part.</span></div></dd>
                    <dt id="results_07l">Line 42:</dt>
                        <dd><div id="results_07"><span class="msg">XXX is an invalid Part and was rejected</span></div></dd>
                </dl>
            </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div id="divTableFormat" class="column_one">
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdImport" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Import</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	        <a href="#" id="cmdClose" class="button btn_next_group"><span>Close</span></a> 
	    </div>
	</div>
</body>
</html>
