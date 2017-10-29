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
	<script type="text/javascript" src="create_request_for_quote.php.js"></script>
	<title>Wizard...</title>
</head>
<body class="action_dialog wizard">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Request for Quote</h2>
                <p>Sourcing Project &bull; PRJ00502</p>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Enter RFQ Information</h2>
        </div>
        <ul class="steps">
        	<li id="1" title="Enter RFQ Information - Set the RFQ Number and then fill in the RFQ attribute information." class="sec first"><a href="#">1</a></li>
        	<li id="2" title="Define Data to Share - Cheak all the information tha tyou wnat to be share with suppliers." class="sec"><a href="#">2</a></li>
        	<li id="3" title="Specify Response Data Requirements - Check which attributes are requested and required." class="sec"><a href="#">3</a></li>
        	<li id="4" title="Select Part Addition Rule - Specify whic parts to add.  The highlighted rows in the key show you what will be added." class="sec"><a href="#">4</a></li>
        	<li id="5" title="Select Suppliers - Choose which partners and suppliers to disseminate the RFQ." class="sec"><a href="#">5</a></li>
        	<li id="6" title="Select Price Scenarios - Set the RFQ Number and then fill in the RFQ attribute information." class="sec"><a href="#">6</a></li>
        	<li id="7" title="Add Attachments - Optionally, add attachments to RFQ using the Add action on the Attachments table below." class="sec"><a href="#">7</a></li>
      	</ul>
        <div id="page_message" class="message info">
            <p id="step_message">Set the RFQ Number and then fill in the RFQ attribute information.</p>
        </div>

            <div class="view_controls">
                <h4>Attachments</h4>
            </div>
            <div class="table_actions">
                <div class="column_one no_width">
                    <p>
                        <a href="#" class="button"><span>Edit</span></a>
                        <a href="#" class="button"><span>Add<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                        <a href="#" class="button"><span>Remove</span></a>
                    </p>
                </div>
            </div>

	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <fieldset id="step_1" class="dynamic step">
   	            <dl class="side_by_side_mixed">

                    <!-- Auto Number -->
                    <dt><label for="autoNumber">Number:</label></dt>
                    <dd>
                        <input type="text" id="autoNumber" value="100664" class="auto_number_field disabled long_width" disabled="disabled" />
                        <a href="#" id="cmdAutoNumber" class="button"><span><em class="iconic auto_number">&nbsp;</em>&nbsp;</span></a>
                    </dd>

           			 <!-- Character Counter w/ Autoexpand Multi-text -->
               		<dt class="required"><label for="multitext_counter">RFQ Description:</label></dt>
                    <dd>
                        <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
						<input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                    </dd>   

                    <dt class="mixed_text"><label for="autoNumber">Lifecycle Phase:</label></dt>
                    <dd class="mixed_text"><p>Draft</p></dd>
                    
                    <dt><label for="">Due Date:</label></dt>
                    <dd>
                        <input type="text" id="" class="medium_width"  />
                        <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em> &nbsp; <em class="iconic divet">&nbsp;</em>&nbsp;</span></a>
                    </dd>

           			 <!-- Character Counter w/ Autoexpand Multi-text -->
               		<dt class="required"><label for="multitext_counter_01">Supplier Instructions:</label></dt>
                    <dd>
                        <textarea id="multitext_counter_01" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter_01,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter_01,150)"></textarea>
						<input readonly="readonly" type="text" id="multitext_char_counter_01" class="counter" size="3" maxlength="3" value="150">
                    </dd> 
  
                	<!-- SINGLE SELECT LIST -->
                    <dt><label for="ssl_00">Owner:</label></dt>
                    <dd>
                        <div class="list_control single_list long_width">
                            <input type="text" id="ssl_00" autocomplete="off" value="Sherwood, Gayle" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox_00"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                    </dd> 

                    <dt class="mixed_text"><label for="autoNumber">Create User:</label></dt>
                    <dd class="mixed_text"><p>Sherwood, Gayle</p></dd>
                    <dt class="mixed_text"><label for="autoNumber">Create Date:</label></dt>
                    <dd class="mixed_text"><p>12/20/2007 02:07:34 PM</p></dd>
                    <dt class="mixed_text"><label for="autoNumber">Project Number:</label></dt>
                    <dd class="mixed_text"><p>PRJ00502</p></dd>
                    <dt class="mixed_text"><label for="autoNumber">Ship-To Location:</label></dt>
                    <dd class="mixed_text"><p>Dallas</p></dd>
                    <dt class="mixed_text"><label for="autoNumber">Currency Conversion as of:</label></dt>
                    <dd class="mixed_text"><p>11/21/2007 10:23:34 AM</p></dd>
                    <dt class="mixed_text"><label for="autoNumber">Project Currency:</label></dt>
                    <dd class="mixed_text"><p>USD</p></dd>
                    <dt class="mixed_text"><label for="autoNumber">RFQ Type:</label></dt>
                    <dd class="mixed_text"><p>RFQ</p></dd>

                	<!-- SINGLE SELECT LIST -->
                    <dt><label for="ssl_01">Authorized Users:</label></dt>
                    <dd>
                        <div class="list_control single_list long_width">
                            <input type="text" id="ssl_01" autocomplete="off" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox_01"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                    </dd> 

                    <!-- Required Select -->
                    <dt><label for="req_sel_00">Terms and Conditions:</label></dt>
                    <dd>
                        <select id="req_sel_00" class="medium_width">
                            <option value="">No</option>
                            <option value="">Opt 2</option>
                        </select>
                        <span class="error_msg hidden">Error message...</span>
                    </dd>                    
                </dl>
            </fieldset>
            
        	<!-- ****************************** -->
			<!-- 	STEP #2						-->
        	<!-- ****************************** -->
            <fieldset id="step_2" class="step dynamic">
            	<fieldset id="step_2" class="input_lists three_columns cpf">
                    <legend>Cover Page Fields</legend>
                    <ul class="column_zero">	
                        <li><input id="chk_cpf" type="checkbox" name="" value="" class="form_selectors" /> <label for="chk_cpf">All</label></li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="chk_01" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_01">Supplier Instructions</label></li>
                        <li><input id="chk_02" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_02">Project Number</label></li>
                        <li><input id="chk_03" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_03">Program</label></li>
                        <li><input id="chk_04" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_04">Customer</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_05" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_05">MFG Site</label></li>
                        <li><input id="chk_06" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_06">Ship-To Location</label></li>
                        <li><input id="chk_07" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_07">Product Lines</label></li>
                    </ul>
                </fieldset>

            	<fieldset class="input_lists three_columns aml">
                    <legend>Item and AML Fields</legend>
                    <ul class="column_zero">	
                        <li><input id="chk_aml" type="checkbox" name="" value="" class="form_selectors" /> <label for="chk_aml">All</label></li>
                    </ul>

                    <ul class="column_one">	
                        <li><input id="chk_08" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_08">Number</label></li>
                        <li><input id="chk_09" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_09">Description</label></li>
                        <li><input id="chk_10" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_10">Rev</label></li>
                        <li><input id="chk_11" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_11">Manufacturer</label></li>
                        <li><input id="chk_12" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_12">Commodity</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_13" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_13">UOM</label></li>
                        <li><input id="chk_14" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_14">AML Split %</label></li>
                        <li><input id="chk_15" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_15">Quantity</label></li>
                        <li><input id="chk_16" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_16">Target Cost</label></li>
                        <li><input id="chk_17" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_17">IPN Info</label></li>
                    </ul>
                </fieldset>

            	<fieldset class="input_lists three_columns oi">
                    <legend>Other Information</legend>
                    <ul class="column_zero">	
                        <li><input id="chk_oi" type="checkbox" name="" value="" class="form_selectors" /> <label for="chk_oi">All</label></li>
                    </ul>

                    <ul class="column_one">
                        <li><input id="chk_18" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_18">Content BOM View</label></li>
                        <li><input id="chk_19" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_19">Costed BOM View</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_20" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_20">RFQ Attachments</label></li>
                        <li><input id="chk_21" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_21">Item and Manufacturer Part Attachments</label></li>
                    </ul>
                </fieldset>
            </fieldset>
            
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <fieldset id="step_3" class="dynamic step 3">
                <table class="response_data">
                	<thead>
                        <tr><th class="w250">Requested Attributes</th><th class="w100">Required</th><th>Requested</th></tr>
                    </thead>
                	<tbody>
                        <tr><td>All</td><td><input id="required_00" type="checkbox" class="chk_required" /></td><td><input id="requested_00" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Lead-Time</td><td><input id="required_01" type="checkbox" class="chk_required" /></td><td><input id="requested_01" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Inventory Available</td><td><input id="required_02" type="checkbox" class="chk_required" /></td><td><input id="requested_02" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Transportation Terms</td><td><input id="required_03" type="checkbox" class="chk_required" /></td><td><input id="requested_03" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>County of Origin</td><td><input id="required_04" type="checkbox" class="chk_required" /></td><td><input id="requested_04" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>EOL Date</td><td><input id="required_05" type="checkbox" class="chk_required" /></td><td><input id="requested_05" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>NCNR</td><td><input id="required_06" type="checkbox" class="chk_required" /></td><td><input id="requested_06" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Minimum</td><td><input id="required_07" type="checkbox" class="chk_required" /></td><td><input id="requested_07" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Multiple</td><td><input id="required_08" type="checkbox" class="chk_required" /></td><td><input id="requested_08" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Material Price</td><td><input id="required_09" type="checkbox" class="chk_required" /></td><td><input id="requested_09" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Material Price Adder 2</td><td><input id="required_10" type="checkbox" class="chk_required" /></td><td><input id="requested_10" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Non-Material Price 1</td><td><input id="required_11" type="checkbox" class="chk_required" /></td><td><input id="requested_11" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>Non-Material Price 10</td><td><input id="required_12" type="checkbox" class="chk_required" /></td><td><input id="requested_12" type="checkbox" class="chk_requested" /></td></tr>
                        <tr><td>NRE</td><td><input id="required_13" type="checkbox" class="chk_required" /></td><td><input id="requested_13" type="checkbox" class="chk_requested" /></td></tr>
					</tbody>
                </table>
            </fieldset>

        	<!-- ****************************** -->
			<!-- 	STEP #4						-->
        	<!-- ****************************** -->
            <fieldset id="step_4" class="dynamic step">
   	            <p><strong>Parts to Add</strong></h4>
                <ul class="request_quote">
                	<li id="rq1" class="rq rq1 selected" title="Add selected items and all sub-components">
                    	<p><input type="radio" id="req_quote1" name"req_quote" /> Add selected items<br />and all sub-components.</p>
                        <p><img src="global/images/rq_01.png" /></p>
                    </li>
                	<li id="rq2" class="rq rq2" title="Add selected items only, without sub-components" >
                       	<p><input type="radio" id="req_quote2" name"req_quote" /> Add selected items only,<br />without sub-components.</p>
                        <p><img src="global/images/rq_02.png" /></p>
                    </li>
                	<li id="rq3" class="rq rq3" title="Add only sub-components of selected items">
                    	<p><input type="radio" id="req_quote3" name"req_quote" /> Add only sub-components<br /> of selected items.</p>
                        <p><img src="global/images/rq_03.png" /></p>
                    </li>
				</ul>                
    		</fieldset>        

        	<!-- ****************************** -->
			<!-- 	STEP #5						-->
        	<!-- ****************************** -->
            <fieldset id="step_5" class="dynamic step">
            	<fieldset class="input_lists">
                    <legend>Selected Partners</legend>
                    <ul class="column_one">	
                        <li><input id="chk_36" type="checkbox" name="" value="" class="form_selectors" checked="checked" /> <label for="chk_36">AVNET (AVNET)</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_37" type="checkbox" name="" value="" class="form_selectors" checked="checked" /> <label for="chk_37">BUILD-ALL CONTRACT MFG (BUILDALL)</label></li>
                    </ul>
                </fieldset>

            	<fieldset class="input_lists">
                    <legend>Suppliers</legend>


                    <dl class="side_by_side_mixed">


                        <!-- MULTI SELECT LIST -->
                        <dt><label for="msl_00">Suppliers:</label></dt>
                        <dd class="top_space">
                            <div class="list_control multi_list long_width">
                                <input type="text" id="msl_00" autocomplete="off" />
                                <div class="auto_complete_results"></div>
                                <div class="pill_container" tabindex="-1">
                                    <ul id="pillbox_00"></ul>
                                </div>
                            </div>
                            <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                        </dd>                


                        <!-- Required Select -->
                        <dt><label for="req_sel_00">Dissemination Method:</label></dt>
                        <dd>
                            <select id="req_sel_00" class="long_width">
                                <option value="">Manufacturer</option>
                                <option value="">Opt 2</option>
                            </select>
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                

                        <!-- MULTI SELECT LIST -->
                        <dt><label for="msl_00">Filter by:</label></dt>
                        <dd class="filter_by">
                        	<p><input id="fb1" type="checkbox" name="" value="" class="form_selectors" /> <label for="fb1">Stratigic Suppliers</label></p>
                            <p><input id="fb2" type="checkbox" name="" value="" class="form_selectors" /> <label for="fb2">Approved Suppliers</label></p>
                            <p><input id="fb3" type="checkbox" name="" value="" class="form_selectors" /> <label for="fb2">Offered</label></p>
                            <p><input id="fb4" type="checkbox" name="" value="" class="form_selectors" /> <label for="fb4">Offered - Inactive</label></p>
                        </dd>                
                
                    </dl>
                
                </fieldset>

    		</fieldset> 



        	<!-- ****************************** -->
			<!-- 	STEP #6						-->
        	<!-- ****************************** -->
            <fieldset id="step_6" class="dynamic step">

                    <dl class="side_by_side_mixed">

                        <!-- FOLDER CONTROL -->
                        <dt style="width:10%;">&nbsp;</dt>
                        <dd class="">
                        	<p><strong>Available Price Scenarios</strong></p>
                            <div class="shadow_container">
                            </div>
                            <p style="text-align: right; padding-top:5px;"><a href="#" id="cmd_new_folder_00" class="button"><span>Add</span></a></p>
                        </dd>


                        <!-- FOLDER CONTROL -->
                        <dt style="width:10%;">&nbsp;</dt>
                        <dd class="">
                        	<p><strong>Selected Price Scenarios</strong></p>
                            <div class="shadow_container">
                            	<p>09/01/2006 - 11/30/2006: Quantity Break 1</p>
                            	<p>09/01/2006 - 11/30/2006: Quantity Break 2</p>
                            	<p>12/01/2006 - 02/28/2007: Quantity Break 1</p>
                            	<p>12/01/2006 - 02/28/2007: Quantity Break 2</p>
                            </div>
                            <p style="text-align: right; padding-top:5px;"><a href="#" id="cmd_new_folder_00" class="button"><span>Remove</span></a></p>
                        </dd>

                    </dl>
                
    		</fieldset>             
        	<!-- ****************************** -->
			<!-- 	STEP #7						-->
        	<!-- ****************************** -->
            <div id="step_7" class="step">
                <!--************************************
                    TABLE ACTIONS
                *************************************-->
                <table class="rbr" cellpadding="0" cellspacing="0">
                    <tr class="header">
                        <td class="handle"></td>
                        <td>File Name</td>
                        <td>File Description</td>
                        <td>File Size</td>
                        <td>File Type</td>
                    </tr>
                </table>
    		</div>             
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
        <div class="column_one">
            <input type="checkbox" id="optional" /> <label for="optional">Create as a background process</label>
        </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next <em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdFinish" class="button"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
