<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/tooltip.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="export_wizard.php.js"></script>
	<title>Export</title>
</head>
<body class="action_dialog wizard ew">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Export</h2>
                <p>Sourcing Project &bull; PRJ00502</p>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Select Objects to Export</h2>
        </div>
        <ul class="steps">
        	<li id="1" title="Tooltip Title - Lorem ipsum..." class="sec first"><a href="#">1</a></li>
        	<li id="2" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">2</a></li>
        	<li id="3" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">3</a></li>
            <li id="4" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">4</a></li>
      	</ul>
        <div id="page_message" class="message info">
            <p id="step_message">Select one or more objects to export.  The "Simple Export" option will export Title Block attributes only in a format that can be modified and re-imported.</p>
        </div>
        <div class="view_controls">
            <h4 id="view_control_title">Apply To</h4>
            <dl class="side_by_side_mixed">
                <dt><label for="req_sel_00">Format:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option>Excel (xls)</option>
                        <option>Text (csv)</option>
                        <option>aXML</option>
                        <option>PDX</option>
                        <optgroup> </optgroup> 
                        <option>Simple Excel (xls)</option>
                        <option>Simple Text</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
                <dt><label for="req_sel_00x">Site:</label></dt>
                <dd>
                    <select id="req_sel_00x" class="medium_width">
                        <option value="" selected="selected">All Sites</option>
                        <option value="">San Jose</option>
                        <option value="">Suzhou</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
            </dl>
        </div>
        <div class="table_actions">
            <div class="column_one no_width">
                <p id="ac1">
                    <a href="#" id="cmdAdd" class="button"><span>Add</span></a>
                    <a href="#" id="cmdRemove" class="button"><span>Remove</span></a>
                </p>
            </div>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <div id="step_1" class="step">
                <table class="rbr" cellpadding="0" cellspacing="0" style="position:relative">
                    <tr class="header">
                        <td class="handle"></td>
                        <td class="obj_part">&nbsp;</td>
                        <td>Name / Number</td>
                        <td class="attachment w15">&nbsp;</td>
                        <td class="rfq w15">&nbsp;</td>
                        <td class="manufacturer_part w15">&nbsp;</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Revision</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="bom w15">&nbsp;</td>
                        <td>P00009</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td id="test">SPRING STYLUS - SLV</td>
                        <td>Preliminary</td>
                        <td>
                        	<select style="margin:2px;">
                                <option>Introductory</option>
	                        </select>                        
                        </td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="bom w15">&nbsp;</td>
                        <td>P00009</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td id="test2">SPRING STYLUS - SLV</td>
                        <td>Preliminary</td>
                        <td>
                        	<select style="margin:2px;">
                                <option>Introductory</option>
	                        </select>                        
                        </td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="bom w15">&nbsp;</td>
                        <td>P00009</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td id="test3">SPRING STYLUS - SLV</td>
                        <td>Preliminary</td>
                        <td>
                        	<select style="margin:2px;">
                                <option>Introductory</option>
	                        </select>                        
                        </td>
                    </tr>
                </table>
               	<input id="txt1" type="text" style="width:100px; border: 4px solid #D9E8FD; z-index:1000; position: absolute; display:none;" />

            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">
            	<fieldset>
                	<legend>Output Filter</legend>
                    <dl class="side_by_side_mixed choice_filter">
                    	<dt>&nbsp;</dt>
                        <dd><label for="opt_customize"><input type="radio" id="opt_customize" name="opt1" class="r_handler" />Create custom filter</label></dd>
                    	<dt>&nbsp;</dt>
                        <dd><label for="opt_saved_filters"><input type="radio" id="opt_saved_filters" name="opt1" class="r_handler" checked="checked" />Use predefined filter</label></dd>
                    </dl>
                    <dl class="side_by_side_mixed">
                        <!-- SELECT CONTROL -->
                        <dt><label for="req_sel_00">Item:</label></dt>
                        <dd>
                            <select id="req_sel_00" class="medium_width">
                                <option value="" selected="selected">Item Filter</option>
                                <option value="">Part Filter</option>
                                <option value="">Document Filter</option>
                            </select>
                            <a href="#" id="cmdViewFilter" class="button"><span>Preview</span></a> 
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                        <dt><label for="req_sel_01">Manufacture Part:</label></dt>
                        <dd>
                            <select id="req_sel_01" class="medium_width">
                                <option value="">Item Filter</option>
                                <option value="" selected="selected">Part Filter</option>
                                <option value="">Document Filter</option>
                            </select>
                            <a href="#" id="cmdViewFilter1" class="button"><span>Preview</span></a> 
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                        <dt><label for="req_sel_02">Change:</label></dt>
                        <dd>
                            <select id="req_sel_02" class="medium_width">
                                <option value="">Item Filter</option>
                                <option value="">Part Filter</option>
                                <option value="" selected="selected">Document Filter</option>
                            </select>
                            <a href="#" id="cmdViewFilter2" class="button"><span>Preview</span></a> 
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                    </dl>
                </fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
            	<h4>Item</h4>
                <fieldset class="input_lists three_columns" style="margin-top: 20px">
                    <legend><label for="opt_customize">Custom Select Content</label></legend>
                    <ul class="column_zero left_10">	
                        <li><input id="chkAll" type="checkbox" name="" value="" class="form_selectors" disabled="disabled" /> <label for="chkAll">Select All</label></li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="cust_00" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_00">Title Block</label></li>
                        <li><input id="cust_01" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_01">Page Two</label></li>
                        <li><input id="cust_02" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_02">Page Three</label></li>
                        <li><input id="cust_03" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_03">Changes Tab</label></li>
                        <li><input id="cust_04" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_04">BOM Tab</label></li>
                        <li class="indent"><input id="cust_04a" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_04a">BOM Items,</label> <input id="txtLevels" type="text" value="1" disabled="disabled" style="width:15px;" /> Levels</li>
                        <li class="indent"><input id="cust_04b" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_04b">BOM Items, All Levels</label></li>
                        <li><input id="cust_05" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_05">Manufacturers</label></li>
                        <li class="indent"><input id="cust_05b" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_05b">Manufacturers Parts</label></li>
                    </ul>
                    <ul class="column_two with_file_extension">
                        <li><input id="cust_06" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_06">Prices</label></li>
                        <li><input id="cust_07" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_07">Sites Tab</label></li>
                        <li><input id="cust_08" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_08">Compliance Tab</label></li>
                        <li><input id="cust_09" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_09">Where Used</label></li>
                        <li><input id="cust_10" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_10">Relationship Tab</label></li>
                        <li><input id="cust_11" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_11">Where Used Tab</label></li>
                        <li class="indent"><input id="cust_12" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_12">Attachment Files</label></li>
                        <li class="indent"><label for="txt_01">Include File Extensions</label> <input id="txt_01" type="text" size="5" /></li>
                        <li><input id="cust_14" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_14">History Tab</label></li>
                    </ul>
                </fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #4						-->
        	<!-- ****************************** -->
            <div id="step_4" class="step">
            	<h4>Manufacture Part</h4>
                <fieldset class="input_lists three_columns" style="margin-top: 20px">
                    <legend><label for="opt_customize">Custom Select Content</label></legend>
                    <ul class="column_zero">	
                        <li><input id="chkAll" type="checkbox" name="" value="" class="form_selectors" disabled="disabled" /> <label for="chkAll">Select All</label></li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="cust_00" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_00">Title Block</label></li>
                        <li><input id="cust_01" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_01">Page Two</label></li>
                        <li><input id="cust_02" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_02">Page Three</label></li>
                        <li><input id="cust_03" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_03">Changes Tab</label></li>
                        <li><input id="cust_04" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_04">BOM Tab</label></li>
                        <li class="indent"><input id="cust_04a" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_04a">BOM Items,</label> <input id="txtLevels" type="text" value="1" disabled="disabled" style="width:15px;" /> Levels</li>
                        <li class="indent"><input id="cust_04b" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_04b">BOM Items, All Levels</label></li>
                        <li><input id="cust_05" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_05">Manufacturers Tab</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="cust_06" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_06">Prices</label></li>
                        <li><input id="cust_07" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_07">Sites Tab</label></li>
                        <li><input id="cust_08" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_08">Compliance Tab</label></li>
                        <li><input id="cust_09" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_09">Supplier Tab</label></li>
                        <li><input id="cust_10" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_10">Relationship Tab</label></li>
                        <li><input id="cust_11" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_11">Where Used Tab</label></li>
                        <li><input id="cust_12" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_12">Attachments Tab</label></li>
                        <li><input id="cust_13" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_13">History Tab</label></li>
                    </ul>
                </fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #5						-->
        	<!-- ****************************** -->
            <div id="step_5" class="step">
            	<h4>Change</h4>
                <fieldset class="input_lists three_columns" style="margin-top: 20px">
                    <legend><label for="opt_customize">Custom Select Content</label></legend>
                    <ul class="column_zero">	
                        <li><input id="chkAll" type="checkbox" name="" value="" class="form_selectors" disabled="disabled" /> <label for="chkAll">Select All</label></li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="cust_00" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_00">Title Block</label></li>
                        <li><input id="cust_01" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_01">Page Two</label></li>
                        <li><input id="cust_02" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_02">Page Three</label></li>
                        <li><input id="cust_03" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_03">Changes Tab</label></li>
                        <li><input id="cust_04" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_04">BOM Tab</label></li>
                        <li class="indent"><input id="cust_04a" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_04a">BOM Items,</label> <input id="txtLevels" type="text" value="1" disabled="disabled" style="width:15px;" /> Levels</li>
                        <li class="indent"><input id="cust_04b" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled"> <label for="cust_04b">BOM Items, All Levels</label></li>
                        <li><input id="cust_05" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_05">Manufacturers Tab</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="cust_06" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_06">Prices</label></li>
                        <li><input id="cust_07" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_07">Sites Tab</label></li>
                        <li><input id="cust_08" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_08">Compliance Tab</label></li>
                        <li><input id="cust_09" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_09">Supplier Tab</label></li>
                        <li><input id="cust_10" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_10">Relationship Tab</label></li>
                        <li><input id="cust_11" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_11">Where Used Tab</label></li>
                        <li><input id="cust_12" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_12">Attachments Tab</label></li>
                        <li><input id="cust_13" type="checkbox" name="customize" value="" class="form_selectors"  disabled="disabled" /> <label for="cust_13">History Tab</label></li>
                    </ul>
                </fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #6						-->
        	<!-- ****************************** -->
            <div id="step_6" class="step">
                <dl class="side_by_side_mixed with_bottom_margin">
                    <dt><label for="txt_field_00">Creator:</label></dt>
                    <dd>
                        <input type="text" id="txt_field_00" class="long_width disabled" value="Administrator, admin (admin)" disabled="disabled" />
                        <span class="error_msg hidden">Error message...</span>
                    </dd>

                    <dt><label for="txt_field_01">Type:</label></dt>
                    <dd>
                        <input type="text" id="txt_field_01" class="long_width" />
                        <span class="error_msg hidden">Error message...</span>
                    </dd>
                    <dt><label for="multitext_counter">Description:</label></dt>
                    <dd>
                        <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                        <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                    </dd>   
				</dl>
            </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div id="divTableFormat" class="column_one">

	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdExport" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Export</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
