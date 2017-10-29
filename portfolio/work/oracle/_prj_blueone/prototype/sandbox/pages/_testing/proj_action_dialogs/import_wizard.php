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
	<script type="text/javascript" src="import_wizard.php.js"></script>
	<title>Import</title>
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
                <h2 id="header_title">Import</h2>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Select File to Import</h2>
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

				<h4 id="FC00" class="collapse toggler">Items</h4>
                <div id="FC00_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="cust_00" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_00">Manufacturer Part Only</label></li>
                        <li><input id="cust_01" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_01">Item Attributes</label></li>
                        <li><input id="cust_02" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_02">Bill of Materials</label></li>
                        <li><input id="cust_03" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_03">Approved Manufacturers</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="cust_04" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_04">Specifications</label></li>
                        <li><input id="cust_05" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_05">Sites</label></li>
                        <li><input id="cust_06" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_06">Approved Suppliers List</label></li>
                        <li><input id="cust_07" type="radio" name="customize" value="" class="form_selectors"  /> <label for="cust_07">Relationships</label></li>
                    </ul>
				</div>

				<h4 id="FC01" class="collapse toggler"> Changes</h4>
                <div id="FC01_content" class="three_columns">
                    <ul class="column_zero">	
                        <li><input id="cust_00" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_00">Select All</label></li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="cust_00" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_00">Manufacturer Part Only</label></li>
                        <li><input id="cust_01" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_01">Item Attributes</label></li>
                        <li><input id="cust_02" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_02">Bill of Materials</label></li>
                        <li><input id="cust_03" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_03">Approved Manufacturers</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="cust_04" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_04">Specifications</label></li>
                        <li><input id="cust_05" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_05">Sites</label></li>
                        <li><input id="cust_06" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_06">Approved Suppliers List</label></li>
                        <li><input id="cust_07" type="checkbox" name="customize" value="" class="form_selectors"  /> <label for="cust_07">Relationships</label></li>
                    </ul>
				</div>

				<h4 id="FC03" class="collapse toggler"> Manufacturers</h4>
                <div id="FC03_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt00_00" type="radio" name="opt00" value="" class="form_selectors"  /> <label for="opt00_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt00_01" type="radio" name="opt00" value="" class="form_selectors"  /> <label for="opt00_01">Option Item</label></li>
                    </ul>
				</div>

				<h4 id="FC04" class="collapse toggler"> Part Groups</h4>
                <div id="FC04_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>

				<h4 id="FC05" class="collapse toggler"> Product Service Request</h4>
                <div id="FC05_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>

				<h4 id="FC06" class="collapse toggler"> Quality Change Request</h4>
                <div id="FC06_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>

				<h4 id="FC07" class="collapse toggler"> Customers</h4>
                <div id="FC07_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>

				<h4 id="FC08" class="collapse toggler"> Programs</h4>
                <div id="FC08_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
				
                <h4 id="FC09" class="collapse toggler"> Sourcing Projects</h4>
                <div id="FC09_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>

				
                <h4 id="FC10" class="collapse toggler"> Prices</h4>
                <div id="FC10_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                
                <h4 id="FC11" class="collapse toggler"> Suppliers</h4>
                <div id="FC11_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                
                <h4 id="FC12" class="collapse toggler"> Sites</h4>
                <div id="FC12_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                
                <h4 id="FC13" class="collapse toggler"> Discussions</h4>
                <div id="FC13_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                
                <h4 id="FC14" class="collapse toggler"> Reports</h4>
                <div id="FC14_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                       

                <h4 id="FC15" class="collapse toggler"> Packages</h4>
                <div id="FC15_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                       
                <h4 id="FC16" class="collapse toggler"> Transfer Orders</h4>
                <div id="FC16_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                                              

                <h4 id="FC17" class="collapse toggler"> Substances</h4>
                <div id="FC17_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                       
                <h4 id="FC18" class="collapse toggler"> Declarations</h4>
                <div id="FC18_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                       
                <h4 id="FC19" class="collapse toggler"> Specifications</h4>
                <div id="FC19_content" class="three_columns">
                    <ul class="column_zero">	
                        <li>&nbsp;</li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="opt01_00" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_00">Option Item</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="opt01_01" type="radio" name="opt01" value="" class="form_selectors"  /> <label for="opt01_01">Option Item</label></li>
                    </ul>
				</div>
                                                                                   


            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
                <h4 id="tag01" class="collapse toggler">Data Mapping</h4>
                <dl id="tag01_content" class="side_by_side_mixed with_top_margin">
                    <dt>&nbsp;</dt>
                    <dd>
                        <label for="optDataMapping_default"><input type="radio" id="optDataMapping_default" name="optDataMapping" value="yes" class="radio" checked="checked" />Use default mapping</label><br />
                        <label for="optDataMapping_yes"><input type="radio" id="optDataMapping_yes" name="optDataMapping" value="yes" class="radio" checked="checked" />Define attribute mapping in next step</label><br />
                        <label for="optDataMapping_no"><input type="radio" id="optDataMapping_no" name="optDataMapping" value="no" class="radio" />Use a saved mapping file</label><br />
                    </dd>
                    <dt>&nbsp;</dt>
                    <dd class="file_input">
                        <input id="txtMappingFile" type="file" class="file_selector" size="50" />
                    </dd> 
                </dl>

                <h4 id="tag02" class="collapse toggler">Data Transformation</h4>
                <dl id="tag02_content" class="side_by_side_mixed with_top_margin">
                    <dt>&nbsp;</dt>
                    <dd>
                        <label for="optTransformationFile_no"><input type="radio" id="optTransformationFile_no"  value="no" name="opt4" class="radio" checked="checked" />No transformations are necessary</label><br />
                        <label for="optTransformationFile_yes"><input type="radio" id="optTransformationFile_yes" value="yes" name="opt4" class="radio" />Use a saved transformation file</label><br />
                    </dd>
                    <dt>&nbsp;</dt>
                    <dd class="file_input">
                        <input id="txtTransformationFile" type="file" class="file_selector" size="50" /><br />
                        <a href="#" id="trans_template">Download transformation template</a>
                    </dd> 
                </dl>

                <h4 id="tag03" class="collapse toggler">Redline Options</h4>
                <dl id="tag03_content" class="side_by_side_mixed with_top_margin">
                    <dt>&nbsp;</dt>
                    <dd>
                        <label for="optRedline_yes"><input type="radio" id="optRedline_yes" name="opt1" value="yes" class="radio" checked="checked" />Updates do not requie redlining</label><br />
                        <label for="optRedline_no"><input type="radio" id="optRedline_no" name="opt1" value="no" class="radio" />Use the following Change for redlining</label><br />
                    </dd>
                    <dt>&nbsp;</dt>
                    <dd>
                        <div class="list_control single_list medium_width">
                            <input type="text" id="ssl_00" autocomplete="off" disabled="disabled" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox_00"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmdRedline" class="button disabled"><span><em class="view_details">&nbsp;</em></span></a>
                        <a href="#" id="cmdRedline" class="button disabled"><span><em class="createNew">&nbsp;</em></span></a>
                    </dd> 
                </dl>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #4						-->
        	<!-- ****************************** -->
            <div id="step_4" class="step">
            	<div class="import_mapping">
                    <div class=" left">
                        <h3>Agile Fields</h3>
                        <img src="global/images/temp_shuttle_control_right.png" />
                    </div>
                    <div  class="right">
                        <h3>Import File Fields</h3>
                        <img src="global/images/temp_shuttle_control_left.png" />
                        <p>
                            <a href="#" id="cmdExpandAll" class="button"><span>Expand All</span></a> 
                            <a href="#" id="cmdSaveAsFile" class="button"><span>Save as File</span></a> 
                        </p>
                    </div>
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

                <h4 id="toggle_F3" class="collapse toggler">Results</h4>
                <dl id="toggle_F3_content" class="side_by_side_text">
                    <dt><label id="r1_label">Import Started:</label></dt>
                        <dd><span id="results_01">&nbsp;</span></dd>
                    <dt><label id="r2_label">Import Completed:</label></dt>
                        <dd><span id="results_02">&nbsp;</span></dd>
                    <dt>&nbsp;</dt><dd>&nbsp;</dd>
                    <dt><label id="r3_label">Items Created:</label></dt>
                        <dd><span id="results_03">&nbsp;</span></dd>
                    <dt><label id="r4_label">Items Updated:</label></dt>
                        <dd><span id="results_04">&nbsp;</span></dd>
                    <dt id="r5_dt"><label id="r5_label">Fatal Errors:</label></dt>
                        <dd id="r5_dd">6</dd>
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
	        <a href="#" id="cmdPreferences" class="button"><span>Preferences</span></a>
	        <a href="#" id="cmdSaveLog" class="button"><span>Save Log</span></a>
	        <a href="#" id="cmdImportAgain" class="button"><span>Import Another File</span></a>
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdImport" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Import</span></a> 
    	    <a href="#" id="cmdValidate" class="button"><span>Validate</span></a>
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
            <a href="#" id="cmdClose" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
	    </div>
	</div>
</body>
</html>
