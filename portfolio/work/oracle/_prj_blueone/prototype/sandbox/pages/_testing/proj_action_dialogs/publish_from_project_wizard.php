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
	<script type="text/javascript" src="publish_from_project_wizard.php.js"></script>
	<title>Publish from Microsoft Project</title>
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
                <h2 id="header_title">Publish From Microsoft&reg; Project</h2>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Select the Microft Project file to publish.  File must be in XML format.</h2>
        </div>
        <ul id="step_indicator" class="steps"></ul>
        <div id="page_message" class="message info">
            <p id="step_message">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam vel nibh. Quisque massa nunc, molestie quis, ultricies nec, tempor aliquet, diam. Phasellus pharetra malesuada magna.</p>
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
            	<fieldset style="clear:both" id="config_options">
                	<legend>Excel Configuration Options</legend>
                    <dl class="side_by_side_mixed with_top_margin">
                        <!-- SELECT CONTROL -->
                        <dt><label for="req_sel_01">Template Type:</label></dt>
                        <dd>
                            <select id="req_sel_01" class="medium_width">
                                <option value="">Item Filter</option>
                                <option value="" selected="selected">Part Filter</option>
                                <option value="">Document Filter</option>
                            </select>
                        </dd>
                        <dt><label for="req_sel_02">Select Worksheet:</label></dt>
                        <dd>
                            <select id="req_sel_02" class="medium_width">
                                <option value="">Item Filter</option>
                                <option value="">Part Filter</option>
                                <option value="" selected="selected">Document Filter</option>
                            </select>
                        </dd>
                        <dt><label for="req_sel_03">Location of Header Row:</label></dt>
                        <dd>
                        	<input type="text" class="short_width" value="1" />
                        </dd>
                        <dt><label for="req_sel_04">Location of Last Row:</label></dt>
                        <dd>
							<input type="text" class="short_width" />
                        </dd>                        
                    </dl>
                </fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">


            <fieldset class="dynamic">
				<dl class="side_by_side_mixed chk_group with_top_margin">
					<dt>Publish as:</dt>
					<dd>
                    	<input type="radio" id="first_field" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="all tabs" checked="checked" />
                        <label for="first_field">Active</label>
                    </dd>
					<dt class="place_holder">blank</dt>
					<dd>
                    	<input type="radio" id="ui_control_id_45de2486c3bc79.50706018" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="<strong>title block</strong> tab only" />
                    	<label for="ui_control_id_45de2486c3bc79.50706018">Proposed</label>
                    </dd>
					<dt class="place_holder">blank</dt>
					<dd>
                    	<input type="radio" id="ui_control_id_45de2486c3bc79.50706018x" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="<strong>title block</strong> tab only" />
                    	<label for="ui_control_id_45de2486c3bc79.50706018x">Template</label>
                    </dd>

				</dl>
			</fieldset>



            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
					<table class="rbr">
						<thead>
							<tr>
								<th>File Resources</th>
								<th>System User</th>
								<th>Assign Roles</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #4						-->
        	<!-- ****************************** -->
            <div id="step_4" class="step">
            	<div class="import_mapping">
                    

						
					
					[ table ]
				</div>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #5						-->
        	<!-- ****************************** -->
            <div id="step_5" class="step import_review">
                <h4 id="toggle_F1" class="collapse toggler">File Information</h4>
                <dl id="toggle_F1_content"class="side_by_side_text">
                    <dt><label>File:</label></dt>
                        <dd>bom123.xls</dd>
                    <dt><label>Content:</label></dt>
                        <dd>Item | Bill of Materials</dd>
                    <dt><label>Mapping File:</label></dt>
                        <dd>Custom mapping</dd>
                    <dt><label>Transformation File:</label></dt>
                        <dd>No transformation file used</dd>
                </dl>

                <h4 id="toggle_F2" class="collapse toggler">Import Settings</h4>
                <dl id="toggle_F2_content" class="side_by_side_text">
                    <dt><label>Import Started:</label></dt>
                        <dd>02/10/2008 06:10:22 AM GMT</dd>
                    <dt><label>Import Completed:</label></dt>
                        <dd>02/10/2008 06:15:03 AM GMT</dd>
                    <dt><label>Items Created:</label></dt>
                        <dd>201 (10 rejected, 2 ignored)</dd>
                    <dt><label>Items Updated:</label></dt>
                        <dd>201</dd>
                    <dt><label>Messages:</label></dt>
                        <dd>
                            Part 222 created<br />
                            Part 1112<br />
                            XXX is an invalid Part and was rejected
                        </dd>
                </dl>


                <h4 id="toggle_F4" class="collapse toggler">Messages</h4>
                <dl id="toggle_F4_content" class="side_by_side_text">
                    <dt id="results_05l">Line 10:</dt>
                        <dd><div id="results_05"><span class="accept"><input type="checkbox" id="chk1"/> <label for="chk1">Accept</label></span> <span class="msg">Part 222 created</span></div></dd>
                    <dt id="results_06l">Line 33:</dt>
                        <dd><div id="results_06"><span class="accept"><input type="checkbox" id="chk2"/> <label for="chk2">Accept</label></span> <span class="msg">Part 112 XXX is an invalid Part and was rejected XXX is an invalid Part and was rejected XXX is an invalid Part and was rejected Part 112 XXX is an invalid Part and was rejected XXX is an invalid Part.</span></div></dd>
                    <dt id="results_07l">Line 42:</dt>
                        <dd><div id="results_07"><span class="accept"><input type="checkbox" id="chk3"/> <label for="chk3">Accept</label></span> <span class="msg">XXX is an invalid Part and was rejected</span></div></dd>
                </dl>
            </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div id="divTableFormat" class="column_one">
	        <a href="#" id="cmdSaveLog" class="button"><span>Save Log</span></a>
	        <a href="#" id="cmdImportAgain" class="button"><span>Publish Another File</span></a>
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdImport" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Publish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
            <a href="#" id="cmdClose" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
	    </div>
	</div>
</body>
</html>
